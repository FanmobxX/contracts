# Fanmob Contracts

Contains contracts and tests. This is a separate repo because mocha and npm don't work nice with truffle and complicates testing contracts. mocha picks up contract tests and truffle picks up node tests, etc.

Tests contracts here before deploying.

## Install

```
npm install -g truffle
npm install
```

Install [Ganache](http://truffleframework.com/ganache/).

## Usage

Run [Ganache](http://truffleframework.com/ganache/).

`truffle test`

```
Compiling ./contracts/ArtistToken.sol...
Compiling ./contracts/Migrations.sol...
Compiling zeppelin-solidity/contracts/math/SafeMath.sol...
Compiling zeppelin-solidity/contracts/ownership/Ownable.sol...
Compiling zeppelin-solidity/contracts/token/ERC20/BasicToken.sol...
Compiling zeppelin-solidity/contracts/token/ERC20/CappedToken.sol...
Compiling zeppelin-solidity/contracts/token/ERC20/ERC20.sol...
Compiling zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol...
Compiling zeppelin-solidity/contracts/token/ERC20/MintableToken.sol...
Compiling zeppelin-solidity/contracts/token/ERC20/StandardToken.sol...


  Contract: ArtistToken
    ✓ has a name (55ms)
    ✓ has a symbol
    ✓ has 18 decimals
    ✓ has a cap of 10,000,000 tokens
    mint()
      ✓ should mint tokens for fanmob
      ✓ should fire events for Mint and Transfer
      ✓ should update total supply of tokens
      ✓ should update token balance for fanmob


  8 passing (1s)
```
