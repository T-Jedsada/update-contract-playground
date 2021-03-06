pragma solidity ^0.4.24;

import "./StorageState.sol";
import "./ProductStorageState.sol";
import "./Ownable.sol";


contract UserV4 is StorageState, Ownable, ProductStorageState {

    function register(string username) public onlyOwner {
        _storage.setUser(username, msg.sender);
    }

    function getUsers(uint index) public view returns (string username, address myAddress) {
        return _storage.getUser(index);
    }

    function getCountUser() public view returns (uint countUser) {
        return _storage.getCountUser();
    }

    function saveProduct() public {
        _product.setProduct("name", 100);
    }
}