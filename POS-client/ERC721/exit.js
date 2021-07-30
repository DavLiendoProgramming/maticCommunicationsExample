const utils = require('../utils');
const maticPOSClient = utils.getMaticPOSClient();

const burnHash =
  '0x74f76deb1e73d9f5b08b16ad4b7732fbcf4229ec572002d30779782b1ce2f17a';

const execute = async () => {
  try {
    const tx = await maticPOSClient.exitERC721(burnHash);
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
