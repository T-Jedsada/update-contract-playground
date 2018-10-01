const UserV4 = artifacts.require('UserV4')

module.exports = async function(deployer) {
  deployer.deploy(UserV4);
};
