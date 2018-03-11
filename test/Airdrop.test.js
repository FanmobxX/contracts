const Airdrop = artifacts.require('./Airdrop.sol');
const ArtistToken = artifacts.require('./ArtistToken.sol');
const assert = require('assert');

contract('Airdrop', accounts => {
  let contract;

  beforeEach(async () => {
    // contract = await Airdrop.new();
  });

  describe('multisend()', () => {
    let tokenAddress = null;
    let airdropInstance = null;
    let result = null;

    before(async () => {
      const artistTokenInstance = await ArtistToken.deployed();
      tokenAddress = artistTokenInstance.address;
      airdropInstance = await Airdrop.deployed();
      console.log(airdropInstance);
    });

    it('should deploy airdrop contract', async () => {
      assert(airdropInstance);
    });

    // it('should fire events for Mint and Transfer', async () => {
    //   assert.equal(result.logs[0].event, 'Mint');
    //   assert.equal(result.logs[1].event, 'Transfer');
    // });

    // it('should update total supply of tokens', async () => {
    //   const totalSupply = await instance.totalSupply.call();
    //   assert(totalSupply.eq(amount));
    // });

    // it('should update token balance for fanmob', async () => {
    //   const balance = await instance.balanceOf.call(accounts[1]);
    //   assert(balance.eq(amount));
    // });
  });
});
