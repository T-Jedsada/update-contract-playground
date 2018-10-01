const UserV5 = artifacts.require('UserV5')

module.exports = async function(deployer) {
  deployer.deploy(UserV5);
};
