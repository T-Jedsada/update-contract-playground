pragma solidity ^0.4.24;

import "./StorageState.sol";


contract UserV2 is StorageState {

    function register(string username) public {
        _storage.setUser(username, msg.sender);
    }

    function getUsers(uint index) public view returns (string username, address myAddress) {
        return _storage.getUser(index);
    }

    function getCountUser() public view returns (uint countUser) {
        return _storage.getCountUser();
    }
}