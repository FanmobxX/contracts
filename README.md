# Fanmob Contracts

Contracts and tests for Fanmob.

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
Compiling ./contracts/Airdrop.sol...
Compiling ./contracts/ArtistToken.sol...
Compiling ./contracts/BasicToken.sol...
Compiling ./contracts/CappedToken.sol...
Compiling ./contracts/ERC20.sol...
Compiling ./contracts/ERC20Basic.sol...
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/MintableToken.sol...
Compiling ./contracts/Ownable.sol...
Compiling ./contracts/SafeMath.sol...
Compiling ./contracts/StandardToken.sol...


  Contract: Airdrop
    multisend()
      ✓ should get total supply of tokens
      ✓ should get owner of contracts (112ms)
      ✓ should get cap of token
      ✓ should deploy airdrop contract
      ✓ should airdrop tokens to addresses (109ms)

  Contract: ArtistToken
    ✓ has a name (117ms)
    ✓ has a symbol
    ✓ has 18 decimals
    ✓ has a cap of 10,000,000 tokens
    mint()
      ✓ should mint tokens for fanmob
      ✓ should fire events for Mint and Transfer
      ✓ should update total supply of tokens
      ✓ should update token balance for fanmob

  Contract: CappedToken
    mint()
      ✓ should mint tokens for fanmob
      ✓ should fire events for Mint and Transfer
      ✓ should update total supply of tokens
      ✓ should update token balance for fanmob


  17 passing (2s)
```
