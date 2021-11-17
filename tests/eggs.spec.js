describe('egg cooking time', () => {

    it('validation', () => {
        expect(getCookingTime('')).to.equal ();
        expect(getCookingTime(1.2)).to.equal ();
        expect(getCookingTime(-1)).to.equal ();
        expect(getCookingTime('')).to.equal ();
    })
    it('Max cooking time', () => {
        expect(getCookingTime(548)).to.equal (550);
    })
    it('Min cooking time || 0', () => {
        expect(getCookingTime(0)).to.equal (0);
        expect(getCookingTime(1)).to.equal (5);
    })
    it('checking the waste of time by the number of eggs', () => {
        expect(getCookingTime(57)).to.equal (60);
        expect(getCookingTime(5)).to.equal (5);
        expect(getCookingTime(9)).to.equal (10);
        expect(getCookingTime(21)).to.equal (25);
    })
});

describe('find an even number among odd', () => {

    it('validation', () => {
        expect(getNumberEven('')).to.equal ();
        expect(getNumberEven(1.2)).to.equal ();
        expect(getNumberEven({})).to.equal ();
    })
    it('find an even number, min, max', () => {
        expect(getNumberEven([1, 5, 7, 9, 15, 19, 777, -15, -11, 4548, 9, 23, -17])).to.equal (4548);
        expect(getNumberEven([1, 5, -112, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).to.equal (-112);
    })
});

describe('find an odd number among even', () => {

    it('validation', () => {
        expect(getNumberOdd('')).to.equal ();
        expect(getNumberOdd(1.2)).to.equal ();
        expect(getNumberOdd({})).to.equal ();
    })
    it('find an odd number, min, max', () => {
        expect(getNumberOdd([0, 2, 8, -4, 0, -122, 13469, -4, 28, 12])).to.equal (13469);
        expect(getNumberOdd([0, 2, 8, -4, 0, -122, -59, -4, 28, 12])).to.equal (-59);
     })
});

 describe('Filter an array of objects by the presence of a substring in the title property', function () {
        it('validation', function () {
            expect(findTitle([], 'js')).to.eql([]);
            expect(findTitle({}, 'js')).to.eql();
            expect(findTitle('', 'js')).to.eql();
        });
        it('should return array with objects who title includes "js"', function () {
            expect(findTitle(arrayOfObjects, 'js')).to.eql([{title: 'I like JS!'}, {title: 'Js - is the best!'}]);
        });
        it('should return array with objects who title includes "JS"', function () {
            expect(findTitle(arrayOfObjects, 'js')).to.eql([{title: 'I like JS!'}, {title: 'Js - is the best!'}]);
        });
        it('should return array with objects who title includes "Some"', function () {
            expect(findTitle(arrayOfObjects, 'Some')).to.eql([{title: 'Some title'}]);
        });
 });

describe('countCharacters', () => {

         it('validation', function () {
            expect(countCharacters([])).to.eql(undefined);
            expect(countCharacters('')).to.eql({});
         })
         it('should return object with amount of characters for "sparrow"', function () {
            expect(countCharacters('sparrow')).to.eql({ s: 1, p: 1, a: 1, r: 2, o: 1, w: 1 });
         });
         it('should return object with amount of characters for "aabcDd deffge"', function () {
            expect(countCharacters('aabcDd deffge')).to.eql({ a: 2, b: 1, c: 1, D: 1, d: 2, ' ': 1, e: 2, f: 2, g: 1 });
         });
         it('should return object with amount of characters for "aabcDd deffge"', function () {
            expect(countCharacters('a 2ab !d')).to.eql({ '2': 1, a: 2, ' ': 2, b: 1, '!': 1, d: 1 });
         });
});

describe('getNextPalindrome', () => {

        it('validation', function () {
            expect(getNextPalindrome([])).to.eql(undefined);
            expect(getNextPalindrome('')).to.eql(undefined);
            expect(getNextPalindrome('123')).to.eql(undefined);
        })

        it('find the next larger positive palindrome', () => {
            expect(getNextPalindrome(7)).to.equal (11);
            expect(getNextPalindrome(99)).to.equal (101);
            expect(getNextPalindrome(0)).to.equal (11);
            expect(getNextPalindrome(888)).to.equal (898);
            expect(getNextPalindrome(999)).to.equal (1001);
        })
    });

