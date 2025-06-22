public class FactoryMethod{
    public static void main(String[] args) {
        System.out.println("Factory Method Pattern Example");
        System.out.println("------------------------------");

        // Create factories
        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        // Use factories to create and manage documents
        System.out.println("Creating and managing a Word document:");
        wordFactory.manageDocument();

        System.out.println("\nCreating and managing a PDF document:");
        pdfFactory.manageDocument();

        System.out.println("\nCreating and managing an Excel document:");
        excelFactory.manageDocument();

        System.out.println("-------------");
        System.out.println("Testing Done");
    }
}