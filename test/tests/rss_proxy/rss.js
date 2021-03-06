const assert = require('assert');

const lib = require('../lib');

module.exports = (testInfo) => {
  // these could fail if website hiccups
  it('messenger feed', async function() {
    // test token endpoints
    const result = await testInfo.overlayApi.serverRequest('loki/v1/rss/messenger');
    assert.equal(200, result.statusCode);
    assert.ok(result.response); // is a timestamp...
    assert.ok(result.response.meta);
    assert.equal(200, result.response.meta.code);
    assert.ok(result.response.data); // xml blob
  });
  it('loki feed', async function() {
    // test token endpoints
    const result = await testInfo.overlayApi.serverRequest('loki/v1/rss/loki');
    assert.equal(200, result.statusCode);
    assert.ok(result.response); // is a timestamp...
    assert.ok(result.response.meta);
    assert.equal(200, result.response.meta.code);
    assert.ok(result.response.data); // xml blob
  });
}
