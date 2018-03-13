/* eslint-disable */ 

const CappedToken = artifacts.require('./CappedToken.sol');
const assert = require('assert');

contract('CappedToken', accounts => {
  let token;
  const creator = accounts[0];

  beforeEach(async () => {
    // token = await CappedToken.new('50000');
    token = await CappedToken.new(new web3.BigNumber('10000000e18'));
  });

  describe('mint()', () => {
    const to = accounts[1];
    const amount = web3.fromWei('500000e18', 'ether');
    let instance = null;
    let result = null;

    before(async () => {
      instance = await CappedToken.deployed();
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
