describe('Get day from it number', () => {

    it('validity', () => {
        expect(getWeekDay('10')).to.eql(undefined);
        expect(getWeekDay('')).to.eql(undefined);
        expect(getWeekDay(0)).to.eql(undefined);
        expect(getWeekDay(8)).to.eql(undefined);
        expect(getWeekDay(-8)).to.eql(undefined);
    })
    it('should return string with week day', () => {
        expect(getWeekDay(1)).to.eql('Monday');
        expect(getWeekDay(2)).not.to.eql('Monday');
        expect(getWeekDay(3)).to.eql('Wednesday');
        expect(getWeekDay(5)).to.eql('Friday');
        expect(getWeekDay(7)).to.eql('Sunday');
    })
});

describe('Find the distance between two points in 2D cartesian space', () => {

    it('validity', () => {
        expect(findDistance('', 1, 2, 3)).to.eql(undefined);
        expect(findDistance('','', '', '')).to.eql(undefined);
        expect(findDistance(1, '', 2, 3)).to.eql(undefined);
        expect(findDistance(1, 1, '', 3)).to.eql(undefined);
        expect(findDistance(1, 2, 3, '')).to.eql(undefined);
    })
    it('should return number (distance between two points)', () => {
        expect(findDistance(0,2,7,9)).to.eql(3);
        expect(findDistance(0,2,7,9)).not.to.eql(1);
        expect(findDistance(54,-4,-48,5)).to.eql(79);
        expect(findDistance(-54,-4,-48,-55)).to.eql(50);
        expect(findDistance(54,4,48,5)).to.eql(66);
        expect(findDistance(0,0,0,0)).to.equal(0);
    })
});

describe('transform number to number in words', () => {
    it('validity', () => {
        expect(whitNum('')).to.eql(undefined);
        expect(whitNum('10')).to.eql(undefined);
        expect(whitNum(-10)).to.eql(undefined);
        expect(whitNum(0)).to.eql('null');
    })
    it('should return number in words', () => {
        expect(whitNum(22)).to.eql("двадцать два");
        expect(whitNum(3)).not.to.eql("четыре");
        expect(whitNum(534)).to.eql("Пятсот тридцать четыре");
        expect(whitNum(504)).to.eql("Пятсот четыре");
        expect(whitNum(3)).to.eql("три");
    })
});

describe('transform number in words to number', () => {
    it('validity', () => {
        expect(getNumberFromString('')).to.eql(0);
        expect(getNumberFromString(10)).to.eql(undefined);
        expect(getNumberFromString(-10)).to.eql(undefined);
        expect(getNumberFromString(0)).to.eql(undefined);
    })
    it('should return number', () => {
        expect(getNumberFromString('two hundred fifty eight')).to.eql(258);
        expect(getNumberFromString('seven hundred seventy seven')).not.to.eql(707);
        expect(getNumberFromString('fifty nine')).to.eql(59);
        expect(getNumberFromString('eleven')).to.eql(11);
        expect(getNumberFromString('seven hundred seven')).to.eql(707);
        expect(getNumberFromString('seven')).to.eql(7);
    })
});

