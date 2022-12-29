const hre = require("hardhat");

async function main() {

  const NexnusDubai = await ethers.getContractFactory('NexnusDubai')
  const nexnusDubai = await NexnusDubai.deploy()
  await nexnusDubai.deployed()
  console.log("nexnusDubai deployed to:", nexnusDubai.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
