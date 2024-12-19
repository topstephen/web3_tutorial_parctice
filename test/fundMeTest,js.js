const {ethers, deployments, getNamedAccounts, network} = require("hardhat")
const {assert, expect} = require("chai")
describe("test fundme", async () => {
    let fundMe;
    let firstAccount;
    beforeEach(async () => {
        await deployments.fixture(["all"]);
         firstAccount = (await getNamedAccounts()).firstAccount;
        const fundMeDeployment =await deployments.get("FundMe");
        fundMe =await ethers.getContractAt("FundMe", fundMeDeployment.address);

    })


    it("test owner", async () => {
        //获取第一个账户
        // const [firstAccount] = await ethers.getSigners();
        // const fundMeFac = await ethers.getContractFactory("FundMe");
        // const fundMe = await fundMeFac.deploy(200);
        // await fundMe.waitForDeployment();
        const owner = await fundMe.owner();
        assert.equal(owner, firstAccount);
    })


    it("test datafee", async () => {
        //获取第一个账户
        // const [firstAccount] = await ethers.getSigners(); //z
        // const fundMeFac = await ethers.getContractFactory("FundMe");
        // const fundMe = await fundMeFac.deploy(200);
        // await fundMe.waitForDeployment();
        const dataFee = await fundMe.dataFeed(); //这里的datafeed是一个地址?难道不是接口
        assert.equal(dataFee, "0x694AA1769357215DE4FAC081bf1f309aDC325306");
    })

})

