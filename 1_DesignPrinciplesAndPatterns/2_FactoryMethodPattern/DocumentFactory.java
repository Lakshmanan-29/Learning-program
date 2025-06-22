public abstract class DocumentFactory {
    public abstract Document createDocument();

    public void manageDocument() {
        Document document = createDocument();
        document.open();
        document.save();
    }
}