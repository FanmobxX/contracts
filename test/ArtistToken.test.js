/* eslint-disable */ 

const ArtistToken = artifacts.require('./ArtistToken.sol');
const assert = require('assert');

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

  it('has a cap of 10,000,000 tokens', async function () {
    const cap = await token.cap();
    assert(cap.eq(new web3.BigNumber('10000000e18')));
  });

  describe('mint()', () => {
    const to = accounts[1];
    const amount = web3.fromWei('500000e18', 'ether');
    let instance = null;
    let result = null;

    before(async () => {
      instance = await ArtistToken.deployed();
      result = await instance.mint(to, amount);
    });

    it('should mint tokens for fanmob', async () => {
      assert(result);
    });

    it('should fire events for Mint and Transfer', async () => {
      assert.equal(result.logs[0].event, 'Mint');
      assert.equal(result.logs[1].event, 'Transfer');
    });

    it('should update total supply of tokens', async () => {
      const totalSupply = await instance.totalSupply.call();
      assert(totalSupply.eq(amount));
    });

    it('should update token balance for fanmob', async () => {
      const balance = await instance.balanceOf.call(accounts[1]);
      assert(balance.eq(amount));
    });
  });
});
