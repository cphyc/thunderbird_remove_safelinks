var assert = require('assert');
var decoders = require("../src");

describe('Decoder', function() {
  describe('#safeLink()', function() {
    let encoded_urls = [
      "https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fmochajs.org%2F%23getting-started&amp;data=04%7C01%7C%7C2f36b70a94f44000effb08d8760186f7%7C1faf88fea9984c5b93c9210a11d9a5c2%7C0%7C1%7C637389096241229831%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&amp;sdata=oCPIK9For1kcpd6Vog9%2FD0k6LGLW%2F9aZPU4T1pZdukQ%3D&amp;reserved=0",
      "https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2F68%25E2%2580%259395%25E2%2580%259399.7_rule&amp;data=04%7C01%7C%7C2f36b70a94f44000effb08d8760186f7%7C1faf88fea9984c5b93c9210a11d9a5c2%7C0%7C1%7C637389096241229831%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&amp;sdata=sHyEH2d9fkO%2Fe89wxD4%2B9Zxxt7EPwbRiJD2lDaDr6Ts%3D&amp;reserved=0",
      "https://na01.safelinks.protection.outlook.com/?url=http%3a%2f%2fwww.avanan.com"
    ];
    let expected_urls = [
      "https://mochajs.org/#getting-started",
      "https://en.wikipedia.org/wiki/68%E2%80%9395%E2%80%9399.7_rule",
      "http://www.avanan.com"
    ];

    encoded_urls.forEach((url, index) => {
      let encoded = encoded_urls[index];
      let expected = expected_urls[index];
      it('should decode ' + index, function() {
        assert.strictEqual(decoders.safelinkDecoder(encoded), expected);
      });
    });
  });
});
