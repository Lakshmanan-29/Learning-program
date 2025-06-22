public class Singleton {
    public static void main(String[] args) {
        System.out.println("Singleton Pattern");
        System.out.println("-----------------");
        Logger logger1 = Logger.getInstance();

        Logger logger2 = Logger.getInstance();

        if (logger1 == logger2) {
            System.out.println("Both logger instances are the same.");
        } else {
            System.out.println("Instances are different!");
        }

        logger1.log("Application started.");
        logger2.log("User logged in.");

    }
}