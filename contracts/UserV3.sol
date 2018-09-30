pragma solidity ^0.4.24;

import "./StorageState.sol";
import "./Ownable.sol";


contract UserV3 is StorageState, Ownable {

    function register(string username) public onlyOwner {
        _storage.setUser(username, msg.sender);
    }

    function getUsers(uint index) public view returns (string username, address myAddress) {
        return _storage.getUser(index);
    }

    function getCountUser() public view returns (uint countUser) {
        return _storage.getCountUser();
    }
}