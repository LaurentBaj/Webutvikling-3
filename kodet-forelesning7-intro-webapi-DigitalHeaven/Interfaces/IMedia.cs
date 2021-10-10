namespace DigitalHeaven.Interfaces {
    public interface IMedia{
        int Id { get; init; } // Med init blir Id immutable
        string Title { get; set; }
        double Price { get; set; }
    }
}