describe('count even numbers and sum their', () => {

    it('validity', () => {
        expect(countEven('51')).to.eql(undefined);
        expect(countEven(-99)).to.eql(undefined);
        expect(countEven(0)).to.eql(undefined);
    })
    it('Find the sum of even numbers and their number in the range from 1 to 99', () => {
        expect(countEven(99)).to.eql([2450,49]);
        expect(countEven(10)).not.to.eql([31,5]);
        expect(countEven(250)).to.eql([2450,49]);
        expect(countEven(51)).to.eql([650,25]);

    })
});

describe('Is it a prime number to check?', () => {

    it('validity', () => {
        expect(isSimple('10')).to.eql(undefined);
        expect(isSimple('')).to.eql(undefined);

    })
    it('is it a prime number?', () => {
        expect(isSimple(99)).to.eql(false);
        expect(isSimple(10)).not.to.eql(true);
        expect(isSimple(101)).to.eql(true);
        expect(isSimple(51)).to.eql(false);
        expect(isSimple(-99)).to.eql(true);
        expect(isSimple(0)).to.eql(true);
    })
});

describe('Find the root of a natural number up to an integer', () => {

    it('validity', () => {
        expect(SqRootSeq('10')).to.eql(undefined);
        expect(SqRootSeq('')).to.eql(undefined);
        expect(SqRootSeq(0)).to.eql(0);
        expect(SqRootSeq(-99)).to.eql(undefined);
    })
    it('should return root of number', () => {
        expect(SqRootSeq(9)).to.eql(3);
        expect(SqRootSeq(225)).not.to.eql(10);
        expect(SqRootSeq(451)).to.eql(21);
        expect(SqRootSeq(51)).to.eql(7);
    })
});

describe('Calculate the factorial of the number n. n! = 1 * 2 *… * n-1 * n', () => {

    it('validity', () => {
        expect(inputNumber('10')).to.eql(undefined);
        expect(inputNumber('')).to.eql(undefined);
        expect(inputNumber(0)).to.eql(1);
        expect(inputNumber(-99)).to.eql(undefined);
    })
    it('the factorial of a number', () => {
        expect(inputNumber(5)).to.eql(120);
        expect(inputNumber(5)).not.to.eql(110);
        expect(inputNumber(9)).to.eql(362880);
        expect(inputNumber(3)).to.eql(6);
    })
});

describe('Calculate the sum of digits of a given number', () => {

    it('validity', () => {
        expect(digitSum('10')).to.eql(undefined);
        expect(digitSum('')).to.eql(undefined);
        expect(digitSum(0)).to.eql(0);
    })
    it('sum of numbers', () => {
        expect(digitSum(254)).to.eql(11);
        expect(digitSum(245)).not.to.eql(110);
        expect(digitSum(9)).to.eql(9);
        expect(digitSum(100000)).to.eql(1);
        expect(digitSum(-99)).to.eql(18);
    })
});

describe('Mirroring the digits of a given number', () => {

    it('validity', () => {
        expect(mirrorNum('10')).to.eql(undefined);
        expect(mirrorNum('')).to.eql(undefined);
        expect(mirrorNum(0)).to.eql(0);
    })
    it('a number that is a mirror image of a sequence of digits of a given number', () => {
        expect(mirrorNum(52)).to.eql(25);
        expect(mirrorNum(245)).not.to.eql(110);
        expect(mirrorNum(9)).to.eql(9);
        expect(mirrorNum(1000001)).to.eql(1000001);
        expect(mirrorNum(-45)).to.eql(-54);
    })
});

