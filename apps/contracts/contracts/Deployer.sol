// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Deployer {
    address public owner;
    mapping(address => bool) public authorized;

    event ContractDeployed(address indexed deployedAddress, address indexed deployedBy);
    event Authorized(address indexed addr);
    event AuthorizationRevoked(address indexed addr);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyAuthorized() {
        require(authorized[msg.sender] || msg.sender == owner, "Unauthorized deployer");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function authorize(address addr) public onlyOwner {
        authorized[addr] = true;
        emit Authorized(addr);
    }

    function revokeAuthorization(address addr) public onlyOwner {
        authorized[addr] = false;
        emit AuthorizationRevoked(addr);
    }

    function deploy(bytes memory bytecode) public onlyAuthorized returns (address) {
        address deployedAddress;
        assembly {
            deployedAddress := create(0, add(bytecode, 0x20), mload(bytecode))
        }
        require(deployedAddress != address(0), "Failed to deploy contract");

        emit ContractDeployed(deployedAddress, msg.sender);
        return deployedAddress;
    }
}