// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Azure Storage DM Dev',
    registeredProviders: [],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West Europe';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_SITE_TEST_LOCATION'] = 'West Europe';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices/xcliaccount4831/keys')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices/xcliaccount4831</Url><StorageServiceKeys><Primary>b/DmJa1VVc+1krJDlLuJ3etPKFU1wgoImGx6trUIKzJ+HVJeAc0WhirmW3P81jLG5J9wi4IGFIm8z4AcSrvceg==</Primary><Secondary>p1Bl/oTIAqR6wMQFRuzb4rM3P9pNIHIfWdoKecAE2ad7fhN3rXP3gHdiXZLnbOLoE3XtyWbsmcK1KWx0w2KAKQ==</Secondary></StorageServiceKeys></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '518',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'c372b9d254bc8e91a78e9fc28982e5bd',
  date: 'Fri, 03 Apr 2015 14:11:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices/xcliaccount4831/keys')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices/xcliaccount4831</Url><StorageServiceKeys><Primary>b/DmJa1VVc+1krJDlLuJ3etPKFU1wgoImGx6trUIKzJ+HVJeAc0WhirmW3P81jLG5J9wi4IGFIm8z4AcSrvceg==</Primary><Secondary>p1Bl/oTIAqR6wMQFRuzb4rM3P9pNIHIfWdoKecAE2ad7fhN3rXP3gHdiXZLnbOLoE3XtyWbsmcK1KWx0w2KAKQ==</Secondary></StorageServiceKeys></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '518',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'c372b9d254bc8e91a78e9fc28982e5bd',
  date: 'Fri, 03 Apr 2015 14:11:27 GMT',
  connection: 'close' });
 return result; }]];