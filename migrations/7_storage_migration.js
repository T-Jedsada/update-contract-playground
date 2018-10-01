const Storage = artifacts.require("Storage")
const ProductStorage = artifacts.require("ProductStorage")
const Proxy2 = artifacts.require("Proxy2")

module.exports = async function(deployer, network, accounts) {
  deployer.deploy(ProductStorage).then(function() {
    return deployer.deploy(Proxy2, ProductStorage.address, Storage.address);
  });
};