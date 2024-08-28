require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */

const WALLET_PRIVATE_KEY = vars.get("WALLET_PRIVATE_KEY");
const ALCHEMY_API_URL = vars.get("ALCHEMY_API_URL");
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: ALCHEMY_API_URL,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    },
  },
   etherscan: {
      apiKey: ETHERSCAN_API_KEY,
    }
};