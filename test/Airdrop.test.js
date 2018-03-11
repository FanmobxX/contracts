const assert = require('assert');

const Airdrop = artifacts.require('./Airdrop.sol');
const ArtistToken = artifacts.require('./ArtistToken.sol');

contract('Airdrop', accounts => {
  let contract;

  beforeEach(async () => {
    // contract = await Airdrop.new();
  });

  describe('multisend()', () => {
    let airdropInstance = null;
    let artistTokenInstance = null;

    before(async () => {
      artistTokenInstance = await ArtistToken.deployed();
      airdropInstance = await Airdrop.deployed();
    });

    it('should deploy airdrop contract', async () => {
      console.log(`contract address: ${airdropInstance.address}`);
      assert(airdropInstance);
    });

    it('should get total supply of tokens', async () => {
      const totalSupply = await artistTokenInstance.totalSupply.call();
      assert(totalSupply.eq(0));
    });

    it('should get owner of contract', async () => {
      const owner = await artistTokenInstance.owner.call();
      assert.equal(owner, accounts[0]);
    });

    it('should airdrop tokens to addresses', async () => {
      const tokenAddr = artistTokenInstance.address;
      const dests = [accounts[1], accounts[2]];
      const value = 100;
      console.log(tokenAddr);
      console.log(dests);
      console.log(value);
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
