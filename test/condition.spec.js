describe('sumNum', () => {

    it('if the number is even multiplication', () => {
        expect(sumNum(2,3)).to.equal(6);
        expect(sumNum(22,55)).to.equal(1210);
    })

    it('if the number is odd sum', () => {
        expect(sumNum(3,2)).to.equal(5);
        expect(sumNum(11,20)).to.equal(31);
    })
});

describe('guarterNum', () => {

    it('first Quarter if numbers are Positive', () => {
        expect(guarterNum(2, 3)).to.equal('first Quarter');
        expect(guarterNum(45, 354)).to.equal('first Quarter');
    })
    it('second Quarter if the first is negative and the second is positive', () => {
        expect(guarterNum(-3,2)).to.equal('second Quarter');
        expect(guarterNum(-33,458)).to.equal('second Quarter');
    })

    it('third Quarter if numbers are negative', () => {
        expect(guarterNum(-3,-2)).to.equal('third Quarter');
        expect(guarterNum(-45,-45)).to.equal('third Quarter');
    })
    it('fourth Quarter if is positive and the second is negative', () => {
        expect(guarterNum(3,-2)).to.equal('fourth Quarter');
        expect(guarterNum(314,-24)).to.equal('fourth Quarter');
    })
});

describe('sumPositive', () => {

    it('suma Positive three numbers', () => {
        expect(sumPositive(3, 2, 3)).to.equal(8);
    })

    it('suma Positive two numbers', () => {
        expect(sumPositive(3, 2, -3)).to.equal(5);
        expect(sumPositive(-3, 2, 30)).to.equal(32);
        expect(sumPositive(3,-2, 3)).to.equal(6);
    })
    it('one is Positive', () => {
        expect(sumPositive(-3,2, -3)).to.equal(2);
        expect(sumPositive(3,-2, -3)).to.equal(3);
        expect(sumPositive(-3,-2, 3)).to.equal(3);
    })
});


describe('maxValue', () => {

    it('multiplicationNum>sumNum', () => {
        expect(maxValue(2,3, 5)).to.equal(33);
        expect(maxValue(1,-2, -3)).to.equal(9);
    })

    it('multiplicationNum<sumNum', () => {
        expect(maxValue(0.2,3, 5)).to.equal(11.2);
        expect(maxValue(-3,3, 5)).to.equal(8);
    })
});

describe('gradingStud', () => {

    it('Rating for F', () => {
        expect(gradingStud(19)).to.equal('grade F');
        expect(gradingStud(10)).to.equal('grade F');
        expect(gradingStud(1)).to.equal('grade F');
    })

    it('Rating for E', () => {
        expect(gradingStud(39)).to.equal('grade E');
        expect(gradingStud(30)).to.equal('grade E');
        expect(gradingStud(20)).to.equal('grade E');

    })
    it('Rating for D', () => {
        expect(gradingStud(59)).to.equal('grade D');
        expect(gradingStud(50)).to.equal('grade D');
        expect(gradingStud(40)).to.equal('grade D');
    })
    it('Rating for C', () => {
            expect(gradingStud(74)).to.equal('grade C');
            expect(gradingStud(63)).to.equal('grade C');
            expect(gradingStud(60)).to.equal('grade C');
    })
    it('Rating for B', () => {
        expect(gradingStud(89)).to.equal('grade B');
        expect(gradingStud(80)).to.equal('grade B');
        expect(gradingStud(75)).to.equal('grade B');
    })
    it('Rating for A', () => {
        expect(gradingStud(100)).to.equal('grade A');
        expect(gradingStud(95)).to.equal('grade A');
        expect(gradingStud(90)).to.equal('grade A');
    })
});
