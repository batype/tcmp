const inquirer = require('inquirer');
const child_process = require('child_process');
const { Signale } = require('signale');
const logger = new Signale();
logger.info('生成文件流程开始');
// 主流程
(async function () {
  try {
    const result = await inquirer.prompt({
      type: 'input',
      name: 'version',
      message: '请输入生成文件路径和名称',
    });
    const version = result.version;
    child_process.execSync(`umi generate page ${version} --typescript`, {
      stdio: [0, 1, 2],
    });
    logger.info(`生成文件${version}完成`);
  } catch (e) {
    logger.error(e.message);
  }
})();
