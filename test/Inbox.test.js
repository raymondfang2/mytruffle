const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //convention, class/constructor --> to be instantiated before using
const web3 = new Web3(ganache.provider({fork: 'http://localhost:8545'}));

//TODO: address to be changed for every deployment --> truffle migrate...
const address = '0x0059C5388b9C553D7660238760a48D2d5fDFc493';
const abi = require('../build/contracts/Inbox.json').abi;
const inbox = new web3.eth.Contract(abi, address);

let accounts;

beforeEach(async() => {
    // Get a list of accounts
    accounts = await web3.eth.getAccounts()

})

describe('Inbox', () => {
    it('hi',() => {
        console.log(accounts)
    })
    it('contract exist', () => {
        console.log(inbox.options.address)
        assert.ok(inbox.options.address);
    })

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hello');
    })

    it('can change the message', async () => {
        await inbox.methods.setMessage('Change')
            .send({from: accounts[0]});

        const message = await inbox.methods.message().call();
        assert.equal(message, 'Change');

    })
})