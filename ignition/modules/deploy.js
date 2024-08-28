//  const myNFT = await MyNFT.deploy();
//   await myNFT.deployed()
//   console.log("Contract deployed to address:", myNFT.address)
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("MyNFTModule", (m) => {
 
  const lock = m.contract("MyNFT", []);

  return { lock };
});
