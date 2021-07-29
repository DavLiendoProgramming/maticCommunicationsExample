require('dotenv').config();

module.exports = {
  root: {
    /**RPC url */
    RPC: 'https://goerli.infura.io/v3/b54b460934684a5aa1852b969ab85966',
    /**
     * For Goerli
     * According to: https://static.matic.network/network/testnet/mumbai/index.json  // July 2021
     *
     * RootChainManager	"0x8829EC24A1BcaCdcF4a3CBDE3A4498172e9FCDcE"
     * RootChainManagerProxy	"0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74"
     *
     * ERC721Predicate	"0xb9B40c5a9614A40148cd11A494b00EE8E6f486E3"
     * ERC721PredicateProxy	"0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b"
     *
     * MintableERC721Predicate	"0x90445D7f2838198Dc8c034ac7F365E5d6144c90C"
     * MintableERC721PredicateProxy	"0x56E14C4C1748a818a5564D33cF774c59EB3eDF59"
     */
    POSRootChainManager: '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74',
    DERC20: '0x655F2166b0709cd575202630952D71E2bB0d61Af',

    /**
     * Contract Address of the  ERC721 token inside Goerli
     */
    DERC721: '0x344cA19326cbF0D753f311E57d88E38c7eE57b36',
    /****************************************/

    DERC1155: '0x2e3Ef7931F2d0e4a7da3dea950FF3F19269d9063',
    posERC20Predicate: '0xdD6596F2029e6233DEFfaCa316e6A95217d4Dc34',

    /**
     * Predicate contracts
     */

    posERC721Predicate: '0x56E14C4C1748a818a5564D33cF774c59EB3eDF59',
    posERC1155Predicate: '0xB19a86ba1b50f0A395BfdC3557608789ee184dC8',
    posEtherPredicate: '0xe2B01f3978c03D6DdA5aE36b2f3Ac0d66C54a6D5',
  },
  child: {
    RPC: 'https://rpc-mumbai.maticvigil.com',
    DERC20: '0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1',

    /**
     * Contract Address of the  ERC721 token inside Mumbai
     */
    DERC721: '0x746e69EFCED6F8594740D54C9A3766224C9929c7',
    /****************************************/

    DERC1155: '0xA07e45A987F19E25176c877d98388878622623FA',
    MaticWETH: '0x714550C2C1Ea08688607D86ed8EeF4f5E4F22323',
  },
  user: {
    privateKey: process.env.PRIVATE_KEY,
    address: process.env.MAIN_ADDRESS,
    amount: '600000000000000000', // 0.5
    amount2: '7000000000000000', // 0.007
    /**
     * Select the token's Id for trading the ERC721
     */
    tokenId: '6',
    tokenId2: '6789',
  },
};
