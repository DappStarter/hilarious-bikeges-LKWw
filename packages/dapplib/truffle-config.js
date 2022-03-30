require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile proof harvest forest flush slim'; 
let testAccounts = [
"0x2db24a9400e715e7e4a326d07c7e7c01fa1c84a4406028a402524420fd02f5cd",
"0x26ce4324e4a9e458e7d26030bf27d31017d37c3d1a37878630e360f521e50607",
"0xc9c08f706867c650db92869e5d5e7fa2ab47d05d5b83e691079eb89b9daecdd6",
"0xea105d80fca012ae2ebb371a0fd84176cbee7946c939cb8b66426c4fa2681819",
"0x5158ee0be298723facaa60604fa6f651817218e744344549558a9779fbcede4a",
"0xd5507789f28c9b38bcacfdcef78c7b985af6cc96a59ba5c0438625ec60b9828e",
"0x4e86ee4d9cd2da76fb71c931cebd2535883b8985e2b660ebe8b010620f8daba5",
"0x8f1e3342d3a7891554b6d71acc76c032a60deb02788c785badb0b4eb0a0a7b75",
"0x92740a4d9eba9b96ed96db0e009c0ca5b455b366fb489c9f605e9531218b8c2e",
"0xc8bcdcea91bdce3f8300766fcdb36779e2cd4f59027aca0f28d609a85025e3d5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

