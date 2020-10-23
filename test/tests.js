var assert = require('assert');
var decoders = require("../src/decoders");
var atob = require("atob");


// Need to mock atob
global.atob = atob;


function testDecoder(encoded_urls, expected_urls, decoder) {
    encoded_urls.forEach((url, index) => {
        let encoded = encoded_urls[index];
        let expected = expected_urls[index];
        it(`should decode to ${expected}`, function() {
            assert.strictEqual(decoder(encoded), expected);
        });
      });
}

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

    testDecoder(encoded_urls, expected_urls, decoders.safelinkDecoder);
  });

  describe("#urlDefense()", function() {
    let encoded_urls = [
      "https://urldefense.com/v3/__http://www.nytimes.com__;!!HXCxUKc!gS3R_a6o2YLKi40IjjGycUqONlxHfNqrvHlhNGZwRBu9TKXx1tZpvsBf30hlJyo$",
      "https://urldefense.proofpoint.com/v2/url?u=http-3A__www.google.com_&d=hdfskhafdslhkafdslhafdsflhfdsalhfadslhkfdsahjlfdsalhfdsalhfdsalhdfsalhfadslh",
      "https://urldefense.proofpoint.com/v2/url?u=https-3A__api.onedrive.com_v1.0_shares_u-21aHR0cHM6Ly9vbmVkcml2ZS5saXZlLmNvbS9yZWRpcj9yZXNpZD1GRUQyQUZBQzMxMUQzMTFGITEyNzkmYXV0aEtleT0hQUg0c0JnQnNySXJNSkxJ_root_content&d=DwMCaQ&c=f-Ks-KiS2VRTRTUfkXMUvg&r=TQ7uKHB8pW4nr_C-ML5FaJJibvZVvm8gWKw_1RfXFus&m=ddb3WW62gJVoLm-9zi0G2Yoz0SJmYNCglDb0fg5C2pE&s=GWJ3mi6XJdAdcq9RyqlO5quzRLjOwtWij8MfOl9i2ec&e=",
      "https://urldefense.proofpoint.com/v2/url?u=http-3A__links.mkt3337.com_ctt-3Fkn-3D3-26ms-3DMzQ3OTg3MDQS1-26r-3DMzkxNzk3NDkwMDA0S0-26b-3D0-26j-3DMTMwMjA1ODYzNQS2-26mt-3D1-26rt-3D0&d=DwMFaQ&c=Vxt5e0Osvvt2gflwSlsJ5DmPGcPvTRKLJyp031rXjhg&r=MujLDFBJstxoxZI_GKbsW7wxGM7nnIK__qZvVy6j9Wc&m=QJGhloAyfD0UZ6n8r6y9dF-khNKqvRAIWDRU_K65xPI&s=ew-rOtBFjiX1Hgv71XQJ5BEgl9TPaoWRm_Xp9Nuo8bk&e=",
      "https://urldefense.proofpoint.com/v1/url?u=http://www.bouncycastle.org/&k=oIvRg1%2BdGAgOoM1BIlLLqw%3D%3D%0A&r=IKM5u8%2B%2F%2Fi8EBhWOS%2BqGbTqCC%2BrMqWI%2FVfEAEsQO%2F0Y%3D%0A&m=Ww6iaHO73mDQpPQwOwfLfN8WMapqHyvtu8jM8SjqmVQ%3D%0A&s=d3583cfa53dade97025bc6274c6c8951dc29fe0f38830cf8e5a447723b9f1c9a",
      "https://urldefense.com/v3/__https://google.com:443/search?q=a*test&gs=ps__;Kw!-612Flbf0JvQ3kNJkRi5Jg!Ue6tQudNKaShHg93trcdjqDP8se2ySE65jyCIe2K1D_uNjZ1Lnf6YLQERujngZv9UWf66ujQIQ$",
    ];
    let expected_urls = [
      "http://www.nytimes.com",
      "http://www.google.com/",
      "https://api.onedrive.com/v1.0/shares/u!aHR0cHM6Ly9vbmVkcml2ZS5saXZlLmNvbS9yZWRpcj9yZXNpZD1GRUQyQUZBQzMxMUQzMTFGITEyNzkmYXV0aEtleT0hQUg0c0JnQnNySXJNSkxJ/root/content",
      "http://links.mkt3337.com/ctt?kn=3&ms=MzQ3OTg3MDQS1&r=MzkxNzk3NDkwMDA0S0&b=0&j=MTMwMjA1ODYzNQS2&mt=1&rt=0",
      "http://www.bouncycastle.org/",
      "https://google.com:443/search?q=a+test&gs=ps",
    ];

    testDecoder(encoded_urls, expected_urls, decoders.proofPointDecoder)
  });
});
