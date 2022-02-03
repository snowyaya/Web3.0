// https://eth-ropsten.alchemyapi.io/v2/wKZ753YF4UW6V4jq7J3RlOhMzeBeLywv

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/wKZ753YF4UW6V4jq7J3RlOhMzeBeLywv',
      accounts: ['843d15c1e89e30452f40c24143d72ce4b29aacaad99eb20a481e48f99a7cbe31'],
    },
  },
};