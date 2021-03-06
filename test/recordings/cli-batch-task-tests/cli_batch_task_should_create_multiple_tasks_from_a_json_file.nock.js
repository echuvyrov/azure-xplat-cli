// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/xplatJobForTaskTests/addtaskcollection?api-version=2016-02-01.3.0&timeout=30', '*')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#taskaddresult\",\"value\":[\r\n    {\r\n      \"status\":\"Success\",\"taskId\":\"xplatTask1\",\"eTag\":\"0x8D36F939BBA1691\",\"lastModified\":\"2016-04-28T18:33:35.2911505Z\",\"location\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask1\"\r\n    },{\r\n      \"status\":\"Success\",\"taskId\":\"xplatTask2\",\"eTag\":\"0x8D36F939BBA643B\",\"lastModified\":\"2016-04-28T18:33:35.2931387Z\",\"location\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask2\"\r\n    },{\r\n      \"status\":\"Success\",\"taskId\":\"xplatTask3\",\"eTag\":\"0x8D36F939BBB0076\",\"lastModified\":\"2016-04-28T18:33:35.2971382Z\",\"location\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask3\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd05d3bb1-7bf9-4874-90c7-130f70c8de1e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '888a6762-367f-49b3-8bdb-90b385692eb9',
  dataserviceversion: '3.0',
  date: 'Thu, 28 Apr 2016 18:33:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/xplatJobForTaskTests/addtaskcollection?api-version=2016-02-01.3.0&timeout=30', '*')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#taskaddresult\",\"value\":[\r\n    {\r\n      \"status\":\"Success\",\"taskId\":\"xplatTask1\",\"eTag\":\"0x8D36F939BBA1691\",\"lastModified\":\"2016-04-28T18:33:35.2911505Z\",\"location\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask1\"\r\n    },{\r\n      \"status\":\"Success\",\"taskId\":\"xplatTask2\",\"eTag\":\"0x8D36F939BBA643B\",\"lastModified\":\"2016-04-28T18:33:35.2931387Z\",\"location\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask2\"\r\n    },{\r\n      \"status\":\"Success\",\"taskId\":\"xplatTask3\",\"eTag\":\"0x8D36F939BBB0076\",\"lastModified\":\"2016-04-28T18:33:35.2971382Z\",\"location\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask3\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd05d3bb1-7bf9-4874-90c7-130f70c8de1e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '888a6762-367f-49b3-8bdb-90b385692eb9',
  dataserviceversion: '3.0',
  date: 'Thu, 28 Apr 2016 18:33:34 GMT',
  connection: 'close' });
 return result; }]];