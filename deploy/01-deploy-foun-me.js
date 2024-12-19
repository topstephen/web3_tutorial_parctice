// function deployFunction() {
//     console.log("this is a deploy function")
// }

const { network } = require("hardhat")
// const {devlopmentChains, networkConfig, LOCK_TIME, CONFIRMATIONS} = require("../helper-hardhat-config")


module.exports= async({getNamedAccounts, deployments}) => {
    const {firstAccount} = await getNamedAccounts()
    const {deploy} = deployments
    const fundMe =  await deploy("FundMe", {
        from: firstAccount,
        log: true,
        args: [300],
    });
}

module.exports.tags = ["all", "fundme"]