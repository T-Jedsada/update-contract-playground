const Storage = artifacts.require("Storage")
const Proxy = artifacts.require("Proxy")

module.exports = async function(deployer, network, accounts) {
  deployer.deploy(Storage).then(function() {
    return deployer.deploy(Proxy, Storage.address, accounts[0]);
  });
};