const UserV2 = artifacts.require('UserV2')

module.exports = async function(deployer) {
  deployer.deploy(UserV2);
};
