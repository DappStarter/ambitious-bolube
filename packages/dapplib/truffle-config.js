require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile proof hunt glove flat skin'; 
let testAccounts = [
"0x2ad9b3388e8abdb275543e319901e7c9cd28308bd35e52715a14d4bb4ead2a9d",
"0x4043d5c379a4464ebdc3e83bf242bc8951c91f2191ba5e20cc118a18e64f604a",
"0xee330d18c671d5f92a2f9f1f032b1578886f5b6a865dcbc5ad12cc88b96b3a23",
"0x2cadd413e5a2ac3a8f9a7d69b641d338c1e6d9391f31df2df2839840cc7e2e29",
"0xd7f5f0574070771097c9aff5850a7ed10f4cba7b766d0da6721401802c730f26",
"0x52e4654b306dc953ada08a04553de5310810f567f7c51039b347f7d487ce2af4",
"0x9ec231756d9c855036b373faf587b23b657548f8c5b14fd4d55f532614744dcd",
"0x0b7fd0123e1ba66278ff4ec0e7c5781c2fc2b77a6bdd8fb9b89c46f68787ce25",
"0x34f5e13cdab2840fc71d4210d7a79427e239aa66cea7bbe78d200026d41bc765",
"0xcddd5de9b1eb4dfcb6f996d3bea4a07365f847c30e88029c16e2a906af90529c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
