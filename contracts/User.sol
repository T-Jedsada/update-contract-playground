pragma solidity ^0.4.24;

import "./StorageState.sol";


contract User is StorageState {

    function register(string username) public {
        _storage.setUser(username, msg.sender);
    }
}