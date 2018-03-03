const ArtistToken = artifacts.require('./ArtistToken.sol');

module.exports = (deployer) => {
  deployer.deploy(ArtistToken);
};
