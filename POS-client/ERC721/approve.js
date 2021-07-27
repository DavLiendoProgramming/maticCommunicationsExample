const config = require('../config');
const utils = require('../utils');
const maticPOSClient = utils.getMaticPOSClient();

const execute = async () => {
  try {
    const tx = await maticPOSClient.approveERC721ForDeposit(
      config.root.DERC721,
      config.user.tokenId,
      config.maticDefaultOptions
    );
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
