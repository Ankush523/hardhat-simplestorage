const {ethers} = require('hardhat')

async function main()
{
  const SimpleContractFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying contract...")
  const simpleStorage = await SimpleStorageFactory.deploy()
  await simpleContract.deployed()
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log("error");
    process.exit(1);
  });
