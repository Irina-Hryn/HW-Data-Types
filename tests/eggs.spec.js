describe('getCookingTime', () => {

    it('checking the waste of time by the number of eggs', () => {
        expect(getCookingTime(0)).to.equal (0);
        expect(getCookingTime(5)).to.equal (5);
        expect(getCookingTime(9)).to.equal (10);
        expect(getCookingTime(54)).to.equal (55);
    })
});
describe('getNumberEven', () => {

    it('find an even number', () => {
        expect(getNumberEven([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).to.equal (4);
        expect(getNumberEven([1, 5, 112, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).to.equal (112);
    })
});

describe('getNumberOdd', () => {

    it('find an even number', () => {
        expect(getNumberOdd([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).to.equal (13);
        expect(getNumberOdd([0, 2, 8, -4, 0, -122, 59, -4, 28, 12])).to.equal (59);
     })
});

describe('findTitle', () => {

    it('should return array with objects who title includes "js"', () => {
        expect(findTitle(arrayOfObjects, 'js')).to.equal ([ { title: 'I like JS!' }, { title: 'Js - is the best!' } ]);
        expect(findTitle(arrayOfObjects, 'best')).to.equal ([ { title: 'Js - is the best!' ]);
        expect(findTitle([], 'best')).to.equal ([]);
        expect(findTitle(arrayOfObjects, 'title')).to.equal ([ { title: 'Some title' } ]);
    })
});

describe('countCharacters', () => {

        it('object in which keys are string characters, value is the number of repetitions', () => {
            expect(countCharacters('sparrow')).to.equal ({s: 1, p: 1, a: 1, r: 2, o: 1, w: 1} ]);
            expect(countCharacters('aabcddeffge')).to.equal ({a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1});
            expect(countCharacters('a 2ab !d')).to.equal ({a: 2, b:1, d:1, 2:1});
        })
 });

describe('getNextPalindrome', () => {

        it('find the next larger positive palindrome', () => {
            expect(getNextPalindrome(7)).to.equal (11);
            expect(getNextPalindrome(99).to.equal (101);
            expect(getNextPalindrome(132)).to.equal (141);
            expect(getNextPalindrome(888)).to.equal (898);
            expect(getNextPalindrome(999)).to.equal (1001);
        })
    });

