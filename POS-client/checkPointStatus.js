const Web3 = require('web3');

// Ethereum provider
const provider = new Web3.providers.WebsocketProvider(
  `wss://goerli.infura.io/ws/v3/8173bc023d8f45e595df4f3fb55db36e`
);

const web3 = new Web3(provider);

// Sign up for a free dedicated RPC URL at https://rpc.maticvigil.com/ or other hosted node providers.
const chil_provider = new Web3.providers.HttpProvider(
  'https://rpc-mumbai.matic.today'
);
const child_web3 = new Web3(chil_provider);

// txHash - transaction hash on Matic
// rootChainAddress - root chain proxy address on Ethereum
async function checkInclusion(txHash, rootChainAddress) {
  let txDetails = await child_web3.eth.getTransactionReceipt(txHash);

  block = txDetails.blockNumber;
  return new Promise(async (resolve, reject) => {
    web3.eth.subscribe(
      'logs',
      {
        address: rootChainAddress,
      },
      async (error, result) => {
        if (error) {
          reject(error);
        }

        console.log(result);
        if (result.data) {
          let transaction = web3.eth.abi.decodeParameters(
            ['uint256', 'uint256', 'bytes32'],
            result.data
          );
          if (block <= transaction['1']) {
            resolve(result);
          }
        }
      }
    );
  });
}

// Param1 - Burn transaction hash on child chain
// Param2 - RootChainProxy Address on root chain (0x86E4Dc95c7FBdBf52e33D563BbDB00823894C287 for mainnet)
checkInclusion(
  '0x74f76deb1e73d9f5b08b16ad4b7732fbcf4229ec572002d30779782b1ce2f17a',
  '0x2890ba17efe978480615e330ecb65333b880928e'
)
  .then((res) => {
    console.log(res);
    provider.disconnect();
  })
  .catch((err) => {
    console.log(err);
  });
