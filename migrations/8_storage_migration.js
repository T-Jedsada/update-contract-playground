const Proxy2 = artifacts.require("Proxy2")
const Storage = artifacts.require("Storage")
const ProductStorage = artifacts.require("ProductStorage")

module.exports = async function(deployer) {
  deployer.deploy(ProductStorage).then(function() {
    return deployer.deploy(Proxy2, ProductStorage.address, Storage.address);
  });
};