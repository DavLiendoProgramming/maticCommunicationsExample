const hre = require('hardhat');
async function main() {
  const [signer] = await ethers.getSigners();
  console.log('Signer address', signer.address);
  /**
   * Contract factory
   */
  const NFT = await hre.ethers.getContractFactory('FlatChildCreature4');
  // const URI = 'something';

  /**
   * Owner of the nft and contract addresses
   */
  const WALLET_ADDRESS = '0x7e693A3E0132Fa9D24B883979d4e405A64D67361';
  const CONTRACT_ADDRESS = '0xA21fDf59B074EA0687Eb283ac8AA59827E0B8337';
  /**
   * Contract that is mapped and will receive tokens
   */
  const SECONDARY_CONTRACT = '0x5a3c29A5F8ed04E2FD22BEd25a4b353Ff28c96b8';
  /**
   * Returns a new instance of the Contract attached to a new address
   */
  const contract = NFT.attach(CONTRACT_ADDRESS);

  /**
   * Minting a new NFT
   */
  const txResult = await contract.mintTo(WALLET_ADDRESS);
  console.log('Tx1 Result:', txResult);
  const txResult2 = await contract.owner();
  console.log('Tx2 Result:', txResult2);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
