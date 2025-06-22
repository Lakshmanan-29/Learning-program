public class Ecommerce {
    public static void main(String[] args) {
        System.out.println("E-commerce Search Example");
        System.out.println("-------------------------");
        Product[] products = {
                new Product(201, "Coffee Maker", "Home Appliances"),
                new Product(205, "Wireless Mouse", "Electronics"),
                new Product(202, "Running Shoes", "Sports & Fitness"),
                new Product(207, "Bluetooth Speaker", "Electronics"),
                new Product(203, "Yoga Mat", "Sports & Fitness"),
                new Product(209, "Smart Watch", "Wearables")
        };
        java.util.Arrays.sort(products, (p1, p2) -> Integer.compare(p1.getProductId(), p2.getProductId()));

        System.out.println("Sorted Products:");
        for (Product p : products) {
            System.out.println(p);
        }
        int searchId = 207;

        System.out.println("\nSearching for Product ID: " + searchId);

        Product linearResult = SearchAlgorithms.linearSearch(products, searchId);
        Product binaryResult = SearchAlgorithms.binarySearch(products, searchId);

        System.out.println("\nLinear Search Result: " + (linearResult != null ? linearResult : "Not Found"));
        System.out.println("Binary Search Result: " + (binaryResult != null ? binaryResult : "Not Found"));

        System.out.println("------------");
        System.out.println("Testing Done");
    }
}