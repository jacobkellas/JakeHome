using Newtonsoft.Json;

namespace JakeHome.Models;

public class Activity
{
    [JsonProperty(PropertyName = "id")]
    public string Id { get; set; }

    [JsonProperty(PropertyName = "name")]
    public string Name { get; set; }

    [JsonProperty(PropertyName = "description")]
    public string Description { get; set; }
    
    [JsonProperty(PropertyName = "cost")]
    public decimal Cost { get; set; }
}