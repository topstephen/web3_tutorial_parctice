require("@nomicfoundation/hardhat-toolbox");
require("@chainlink/env-enc").config();
// require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVE_KEY],
      chainId: 11155111
    }
  },

  // ETHERSCAN_API_KEY
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY,
    }
  }
};
