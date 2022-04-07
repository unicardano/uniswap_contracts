# 🦄 UNICARDANO migration project

# Pre requisites for development
1. Truffle
1. NodeJs
1. typescript
1. ts-node
1. Ganache and or Remix
`npm install -g typescript`
`npm install -g ts-node`

## Merkel root
You need to checkout [Merkel Distributor Project](https://github.com/unicardano/merkle-distributor)

Calculate the Merkel Root using
`ts-node scripts/generate-merkle-root.ts --input scripts/airdrop_list.json`

Where airdrop_list.json is a list of accounts with the airdrop initial value.

This commend will return the output as following;
`{"merkleRoot":"<merkel_root>","tokenTotal":"0x0100","claims":{"0xD7C3EBae9aca6149f7bC9ED834239BD43cFDcE91":{"index":0,"amount":"0x0100","proof":[]}}}`