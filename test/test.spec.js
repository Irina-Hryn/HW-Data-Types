describe('will the cashier be able to attend all the visitors of the cinema', () => {

    it('validation', () => {
        expect(tikets('')).to.equal ('No');
        expect(tikets([])).to.equal ('No');
    })
    it('Valid data', () => {
        expect(tikets([25,25,50])).to.equal ('Yes');
        expect(tikets([25,25,50,100])).to.equal ('Yes');
        expect(tikets([25,25,50,50,100,25])).to.equal ('Yes');
    })
    it('insufficient funds at the cash desk', () => {
        expect(tikets([100,100])).to.equal ('No');
        expect(tikets([100])).to.equal ('No');
        expect(tikets([50,100])).to.equal ('No');
        expect(tikets([50,50])).to.equal ('No');
    })
 });

describe('sum of numbers in a line', () => {

    it('validation', () => {
        expect(getSum(1, 5)).to.equal ();
        expect(getSum([], 1)).to.equal ();
        expect(getSum(0, {})).to.equal ();
    })
    it('Valid data, max, min,0', () => {
        expect(getSum('123', '321')).to.equal ('444');
        expect(getSum('1222222', '2333333333')).to.equal ('2334555555');
        expect(getSum('578952222222', '15555')).to.equal ('578952237777');
        expect(getSum('1000000000000000000001', '999999')).to.equal ('1000000000000001000000');
        expect(getSum('0', '999999')).to.equal ('999999');
    })
 });
describe('return the number and comments of posts with the author', () => {

    it('validation', () => {
        expect(getSumAuthorAndPosts(1, 5)).to.equal ();
        expect(getSumAuthorAndPosts([], 1)).to.equal ();
        expect(getSumAuthorAndPosts(0, {})).to.equal ();
    })
    it('result object with the number of posts and comments from Rimus author', () => {
        expect(getSumAuthorAndPosts(listOfPosts2, 'Rimus')).to.eql ({post: 1, comment: 3});
    });
    it('result object with the number of posts and comments from Ivanov author', () => {
        expect(getSumAuthorAndPosts(listOfPosts2, 'Ivanov')).to.eql ({post: 2, comment: 0});
    });
    it('result object with the number of posts and comments from Uncle author', () => {
        expect(getSumAuthorAndPosts(listOfPosts2, 'Uncle')).to.eql ({post: 1, comment: 2});
    });
    it('result object with the number of posts and comments from empty array', () => {
        expect(getSumAuthorAndPosts([], 'Ivanov')).to.eql ({post: 0, comment: 0});
    });
});

describe('Write a function cache', () => {

    it('validation', () => {
       expect(cachedFunc(0, 0)).to.equal (0);
    })
    it('Valid data, max, min,0', () => {
        expect(cachedFunc('foo', 'bar')).to.equal ('foobar');
        expect(cachedFunc('1', '2')).to.equal ('12');
   })
});

