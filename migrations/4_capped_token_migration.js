const CappedToken = artifacts.require('./CappedToken.sol');

module.exports = (deployer) => {
  deployer.deploy(CappedToken, '500000');
};
