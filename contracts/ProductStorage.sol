pragma solidity ^0.4.24;


contract ProductStorage {

    struct Product {
        string name;
        uint price;
    }

    Product[] public items;

    function setProduct(string name, uint price) public {
        items.push(Product(name, price));
    }

    function getProduct(uint index) public view returns (string productName, uint proudctPrice) {
        return (items[index].name, items[index].price);
    }
}