const CappedToken = artifacts.require('./CappedToken.sol');

module.exports = (deployer) => {
  deployer.deploy(CappedToken, new web3.BigNumber('10000000e18'));
};
