module.exports = {
  networks: {
    local: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
      // gas: 7e6,
      // gasPrice: 3e10,
    },
    kovan: {
      host: '198.199.66.129',
      port: 8545,
      network_id: '*',
      gas: 6431652,
    },
  },
};
