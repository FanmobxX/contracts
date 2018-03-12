/* eslint-disable */ 

const assert = require('assert');

const Airdrop = artifacts.require('./Airdrop.sol');
const CappedToken = artifacts.require('./CappedToken.sol');

contract('Airdrop', accounts => {
  let contract;

  beforeEach(async () => {
    // contract = await Airdrop.new();
  });

  describe('multisend()', () => {
    let airdropInstance = null;
    let cappedTokenInstance = null;

    before(async () => {
      cappedTokenInstance = await CappedToken.deployed();
      airdropInstance = await Airdrop.deployed();
    });

    it('should get total supply of tokens', async () => {
      const totalSupply = await cappedTokenInstance.totalSupply.call();
      assert(totalSupply.eq(0));
    });

    it('should get owner of contract', async () => {
      const owner = await cappedTokenInstance.owner.call();
      assert.equal(owner, accounts[0]);
    });

    it('should get cap of token', async () => {
      const cap = await cappedTokenInstance.cap.call();
      assert(cap.eq(new web3.BigNumber('10000000e18')));
    });

    it('should deploy airdrop contract', async () => {
      console.log(`contract address: ${airdropInstance.address}`);
      assert(airdropInstance);
    });

    it('should airdrop tokens to addresses', async () => {
      const tokenAddr = cappedTokenInstance.address;
      const dests = [accounts[1], accounts[2]];
      const value = 100;
      console.log(`Capped token address: ${tokenAddr}`);
      console.log(`Destination addresses: ${dests}`);
      console.log(`Value: ${value}`);
      // ethTx.getCurrentWeb3().utils.toWei('500000', 'ether');
      // const value = web3.eth.util.toWei('100', 'ether');
      const result = await airdropInstance
        .multisend(
          tokenAddr,
          dests,
          value,
          // { from: accounts[0] },
        );
      console.log(result);
      assert(result);
    });
  });
});
