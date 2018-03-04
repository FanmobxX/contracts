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

  it('should mint tokens for fanmob', async () => {
    const to = accounts[2];
    const amount = web3.fromWei('500000e18', 'ether');
    const instance = await ArtistToken.deployed();
    const success = await instance.mint(to, amount);
    assert(success);
    const totalSupply = await instance.totalSupply.call();
    assert(totalSupply.eq(amount));
    // check new account balance
    // console.log(web3.eth.getBalance(accounts[0]));
    // console.log(web3.eth.getBalance(accounts[2]));
    // .send({
    //   from: accounts[0],
    // });
  });
});
