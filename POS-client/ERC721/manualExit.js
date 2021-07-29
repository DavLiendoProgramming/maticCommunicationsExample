const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const utils = require('../utils');
const maticPOSClient = utils.getMaticPOSClient();

const burnHash =
  '0xc2ec17858b0390ae83e638221fc6c3596cefcaaccb1825d9ef7d0f6d4821ac54';

const execute = async () => {
  try {
    const exitCalldata = await maticPOSClient.exitERC721(burnHash, {
      from: '0x7e693A3E0132Fa9D24B883979d4e405A64D67361',
      encodeAbi: true,
    });
    console.log('exit calldata:', exitCalldata); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
