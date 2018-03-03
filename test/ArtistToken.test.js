const ArtistToken = artifacts.require('./ArtistToken.sol');
const assert = require('assert');
const BigNumber = require('bignumber.js');

contract('ArtistToken', accounts => {
  let token;
  const creator = accounts[0];

  beforeEach(async () => {
    token = await ArtistToken.new({ from: creator });
  });

  it('has a name', async function () {
    const name = await token.name();
    assert.equal(name, 'Tiga Coin');
  });

  it('has a symbol', async function () {
    const symbol = await token.symbol();
    assert.equal(symbol, 'TIGA');
  });

  it('has 18 decimals', async function () {
    const decimals = await token.decimals();
    assert(decimals.eq(18));
  });

  it('has a cap', async function () {
    const cap = await token.cap();
    assert(cap.eq(new BigNumber('10000000e18')));
  });
});
