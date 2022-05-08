using System;
using System.Net;
using System.Threading.Tasks;
using JakeHome.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Cosmos;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Enums;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;

namespace JakeHome.Functions;

public class AddActivity
{
    private readonly ILogger<AddActivity> _logger;
    private readonly string _connectionString;
    private readonly CosmosClient _client;
    private readonly string _databaseName;
    private readonly string _containerName;
    private readonly Container _container;

    public AddActivity(ILogger<AddActivity> log)
    {
        _connectionString = Environment.GetEnvironmentVariable("ConnectionString");
        _databaseName = Environment.GetEnvironmentVariable("DatabaseName");
        _containerName = Environment.GetEnvironmentVariable("ContainerName");
        _client = new CosmosClient(_connectionString);
        _container = _client.GetContainer(_databaseName, _containerName);
        _logger = log;
    }

    [FunctionName("AddActivity")]
    [OpenApiOperation(operationId: "Run", tags: new[] { "name" })]
    [OpenApiSecurity("function_key", SecuritySchemeType.ApiKey, Name = "code", In = OpenApiSecurityLocationType.Query)]
    [OpenApiRequestBody(contentType: "application/json", bodyType: typeof(Activity), Description = "Activity to add", Required = true)]
    [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "text/plain", bodyType: typeof(string), Description = "Activity Added")]
    public async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] Activity activity, HttpRequest req)
    {
        _logger.LogInformation("Adding an activity");

        await _container.CreateItemAsync<Activity>(activity);

        return new OkObjectResult("Activity Added");
    }
}
