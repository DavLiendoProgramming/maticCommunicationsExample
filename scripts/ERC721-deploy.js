const hre = require('hardhat');

/**
 * Opensea address to whitelist
 */
const openseaProxy = '0x58807baD0B376efc12F5AD86aAc70E78ed67deaE';
async function main() {
  // We get the contract to deploy
  const childCreature4 = await hre.ethers.getContractFactory('FlatCreature3');
  const childcreature4 = await childCreature4.deploy(
    '0x3166fAF2D5c1669872e09065De614d3b98090E8f'
  );

  await childcreature4.deployed();

  console.log('Sample ERC721 token deployed to:', childcreature4.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
