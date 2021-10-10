using DigitalHeaven.Interfaces;

namespace DigitalHeaven.Models {
    public class Game : IMedia {
        public int Id { get; init; }
        public string Title { get; set; }
        public double Price { get; set; }
        public string Console { get; set; }
    }
}