require("@nomicfoundation/hardhat-toolbox");
// require("@chainlink/env-enc").config();
require("dotenv").config();
require("hardhat-deploy");
require("@nomicfoundation/hardhat-ethers");
require("hardhat-deploy-ethers");
require("@chainlink/env-enc").config();
require("./task") //默认导入的是index.js
// require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVE_KEY,process.env.PRIVE_KEY2],
      chainId: 11155111  //https://chainlist.org/ 查看chainId
    }
  },

  // ETHERSCAN_API_KEY
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY,
    }
  },
  namedAccounts: {
    firstAccount: {
      default: 0
    },
    secondAccount: {
      default: 1
    },
  },
  gasReporter: {
    enabled: true
  }
};
