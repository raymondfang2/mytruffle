**Use Traffle and Ganache**

1. install truffle
   npm install -g truffle
2. create project
    cd mytruffle
    truffle init
    modify truffle-config.js --> the network part
3. Install Ganache-cli
   npm install -g ganache-cli
   ganache-cli -p 8545
4. Compile and deploy the contract to ganache
   truffle compile
   truffle migrate --network development
5. Code to look into
   package.json 
   truffle-config.js
    Inbox.sol
    1_initial_migration.js
    Inbox.test.js

