const utils = require('../utils');
const maticPOSClient = utils.getMaticPOSClient();

const burnHash =
  '0xc19d47d13d1ff3d6f9c2bb01341245703d9434d334c969f9973a337016e2e2a0';

const execute = async () => {
  try {
    const tx = await maticPOSClient.exitERC721(burnHash);
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
