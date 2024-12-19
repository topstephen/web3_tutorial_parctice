//还需要在配置文件 hardhat.config 中引入该文件
// 执行命名 npx hardhat help 可以查看添加任务是否成功
exports.deployConract = require("./deploy-fundme")
exports.interactContract = require("./interact-fundme")