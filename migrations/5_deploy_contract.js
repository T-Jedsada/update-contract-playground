const UserV3 = artifacts.require('UserV3')

module.exports = async function(deployer) {
  deployer.deploy(UserV3);
};
