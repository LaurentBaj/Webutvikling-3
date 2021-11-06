namespace ChocolateApi.DatabaseSettings
{
    public class ChocolateDatabaseSettings : IChocolateDatabaseSettings
    {
        public string ChocolateCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
    public interface IChocolateDatabaseSettings
    {
        string ChocolateCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}