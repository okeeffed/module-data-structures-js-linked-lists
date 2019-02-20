const lib = require('./index');
// const mocha = require('mocha');
const chai = require('chai');
const {expect} = chai;
describe('linked lists', function () {
    it('', function () {
        const srcOne = [1, 2, 3];
        const srcTwo = ['Hello', 'world', '!'];
        const expectRes = [
            '!',
            3,
            'world',
            2,
            'Hello',
            1
        ];

        let res = queueFromStack(srcOne, srcTwo);
        expect(res.data)
            .to
            .deep
            .equal(expectRes);
    });
});