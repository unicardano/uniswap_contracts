// v2-core
const json_factory = require('@uniswap/v2-core/build/UniswapV2Factory.json')
const json_erc20 = require('@uniswap/v2-core/build/UniswapV2ERC20.json')
const json_pair = require('@uniswap/v2-core/build/UniswapV2Pair.json')
// v2-periphery
const json_migrator = require('@uniswap/v2-periphery/build/UniswapV2Migrator.json')
const json_router1 = require('@uniswap/v2-periphery/build/UniswapV2Router01.json')
const json_router2 = require('@uniswap/v2-periphery/build/UniswapV2Router02.json')
const json_descriptor = require('../build/contracts/NonfungibleTokenPositionDescriptor.json')
// v3-periphery
const json_positionmanager = require('@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json')

// v3-core
const json_factoryv3 = require('@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json')
const json_v3pool = require('../v3-core/contracts/UniswapV3PoolDeployer.sol/UniswapV3PoolDeployer.json')
// multicall contract
const json_multicall = require('../build/contracts/UniswapInterfaceMulticall.json')
const json_swaprouter02 = require('@uniswap/swap-router-contracts/artifacts/contracts/SwapRouter02.sol/SwapRouter02.json')

const contract = require('@truffle/contract');
const UniswapV2Factory = contract(json_factory);
const UniswapV2ERC20 = contract(json_erc20);
const UniswapV2Pair = contract(json_pair);
const UniswapV2Router01 = contract(json_router1);
const UniswapV2Router02 = contract(json_router2);
const UniswapV2Migrator = contract(json_migrator);
const UniswapV3Factory = contract(json_factoryv3);
const UniswapV3PoolDeployer = contract(json_v3pool);
const UniswapInterfaceMulticall = contract(json_multicall);
const NonfungibleTokenPositionDescriptor = contract(json_descriptor);
const NonfungiblePositionManagerJson = contract(json_positionmanager);
const SwapRouter02 = contract(json_swaprouter02);

UniswapV2Factory.setProvider(this.web3._provider);
UniswapV2ERC20.setProvider(this.web3._provider);
UniswapV2Pair.setProvider(this.web3._provider);
UniswapV2Router01.setProvider(this.web3._provider);
UniswapV2Router02.setProvider(this.web3._provider);
UniswapV2Migrator.setProvider(this.web3._provider);
UniswapV3Factory.setProvider(this.web3._provider);
UniswapV3PoolDeployer.setProvider(this.web3._provider);
UniswapInterfaceMulticall.setProvider(this.web3._provider);
SwapRouter02.setProvider(this.web3._provider);
NonfungiblePositionManagerJson.setProvider(this.web3._provider);
NonfungibleTokenPositionDescriptor.setProvider(this.web3._provider);

//module.exports = function(_deployer, network, accounts) {
async function doDeploy(_deployer, network, accounts) {
// _deployer.deploy(UniswapV2ERC20, {from: accounts[0]})
    // _deployer.deploy(UniswapV2Pair)
    // NEED V1 factory _deployer.deploy(UniswapV2Router01)
    // NEED V1 factory _deployer.deploy(UniswapV2Router02)
    // NEED V1 factory _deployer.deploy(UniswapV2Migrator)
    
    // _deployer.deploy(UniswapV3PoolDeployer, {from: accounts[0]})
    // _deployer.deploy(UniswapInterfaceMulticall, {from: accounts[0]})
    /*
    _deployer.deploy(UniswapV2Factory, accounts[0], {from: accounts[0]}).then(() => {
        console.log('V2_FACTORY_ADDRESS '+UniswapV2Factory.address)
    })
    _deployer.deploy(UniswapV3Factory, {from: accounts[0]}).then(() => {
        UniswapV3Factory.detectNetwork()
        console.log('V3_FACTORY_ADDRESS '+UniswapV3Factory.address)
    })
    */
    // https://ethereum.stackexchange.com/questions/39372/you-must-deploy-and-link-the-following-libraries-before-you-can-deploy-a-new-ver
    await _deployer.deploy(NonfungibleTokenPositionDescriptor,        
        '0xD0Fab4aE1ff28825aabD2A16566f89EB8948F9aB', //_WETH9
        'ADA', //_nativeCurrencyLabelBytes
        {from: accounts[0]})
    console.log('V3_FACTORY_ADDRESS '+NonfungibleTokenPositionDescriptor.address)
    
    /*
    _deployer.deploy(NonfungiblePositionManagerJson,
        '0x41C1357AD087F6e31DbbA1B376243c20F9ca0E24', //v3-factory
        '0xD0Fab4aE1ff28825aabD2A16566f89EB8948F9aB', //_WETH9
        '0x9c7cc58d319BFb7D8970d7D7f55Fe872897E0AdD', //_tokenDescriptor_
        {from: accounts[0]}).then(() => {
        console.log('NONFUNGIBLEMANAGER '+NonfungiblePositionManagerJson.address)
    })
    */

    /*
    _deployer.deploy(SwapRouter02, 
        UniswapV2Factory.address,  
        UniswapV3Factory.address, 
        NonfungiblePositionManagerJson.address,
    '0xD0Fab4aE1ff28825aabD2A16566f89EB8948F9aB', {from: accounts[0]})
    .then(() => {
        console.log('SWAP_ROUTER_ADDRESSES '+SwapRouter02.address)
    })
    */
    
};

module.exports = (deployer, network, accounts) => {
    deployer.then(async () => {
        await doDeploy(deployer, network, accounts);
    });
};