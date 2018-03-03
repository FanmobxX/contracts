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

  it('has a cap', async function () {
    const cap = await token.cap();
    assert.equal(cap, 10000000 * (10 ** uint256(decimals)));
  });

  // it('assigns the initial total supply to the creator', async function () {
  //   const totalSupply = await token.totalSupply();
  //   const creatorBalance = await token.balanceOf(creator);

  //   assert(creatorBalance.eq(totalSupply));

  //   const receipt = web3.eth.getTransactionReceipt(token.transactionHash);
  //   const logs = decodeLogs(receipt.logs, SimpleToken, token.address);
  //   assert.equal(logs.length, 1);
  //   assert.equal(logs[0].event, 'Transfer');
  //   assert.equal(logs[0].args.from.valueOf(), 0x0);
  //   assert.equal(logs[0].args.to.valueOf(), creator);
  //   assert(logs[0].args.value.eq(totalSupply));
  // });
});
