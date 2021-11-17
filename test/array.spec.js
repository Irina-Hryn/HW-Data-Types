describe('search min value in array', () => {
    it('check if all positive, 0', () => {
        expect(minimumElement([20, 34, 2, 155, 485])).to.equal(2);
        expect(minimumElement([5, 7, 60, 73, 5, 7, 45687, 1])).to.equal(1);
        expect(minimumElement([5, 7, 60, 73, 0, 5, 7, 45687, 1])).to.equal(0);
        expect(minimumElement([])).to.equal(null);
    })
    it('check if all negative', () => {
        expect(minimumElement([-20, -34, -2, -15, -485])).to.equal(-485);
        expect(minimumElement([-1, -758, -2, -75, -4156])).to.equal(-4156);
    })
    it('check if positive and negative', () => {
        expect(minimumElement([20, 7594, -2, -15, -485])).to.equal(-485);
        expect(minimumElement([-20, -34, 2, 15, 485])).to.equal(-34);
    })
});

describe('search max value in array', () => {
    it('check if all positive, 0, []', () => {
        expect(maximumElement([20, 34, 2, 155, 485])).to.equal(485);
        expect(maximumElement([5, 7, 60, 73, 5, 7, 45687, 1])).to.equal(45687);
        expect(maximumElement([5, 7, 60, 73, 5, 0, 7, 45687, 1])).to.equal(45687);
        expect(maximumElement([])).to.equal(null);
    })
    it('check if all negative', () => {
        expect(maximumElement([-20, -34, -2, -15, -485])).to.equal(-2);
        expect(maximumElement([-1, -758, -2, 0, -75, -4156])).to.equal(0);
    })
    it('check if positive and negative', () => {
        expect(maximumElement([20, 7594, -2, -15, -485])).to.equal(7594);
        expect(maximumElement([-20, -34, 2, 15, 485])).to.equal(485);
    })
});

describe('search min index in array', () => {
    it('check if all positive, []', () => {
        expect(indexMinElement([4,24,3,2,20,19])).to.equal(3);
        expect(indexMinElement([5, 7, 60, 73, 7, 45687, 1])).to.equal(6);
        expect(indexMinElement([5, 7, 60, 73, 0, 7, 45687, 1])).to.equal(4);
        expect(indexMinElement([])).to.equal(null);
    })
    it('check if all negative', () => {
        expect(indexMinElement([-20, -34, -2, -15, -485])).to.equal(4);
        expect(indexMinElement([-1, -758, -2, 0, -75, -4156])).to.equal(5);
    })
    it('check if positive and negative', () => {
        expect(indexMinElement([20, 7594, -2, -15, -485])).to.equal(4);
        expect(indexMinElement([-20, -34, 2, 15, 485])).to.equal(1);
    })
});

describe('search max index in array', () => {
    it('check if all positive, []', () => {
        expect(indexMaxElement([4,24,3,2,20,19])).to.equal(1);
        expect(indexMaxElement([5, 7, 60, 73, 7, 45687, 1])).to.equal(5);
        expect(indexMaxElement([5, 7, 60, 73, 0, 7, 45687, 1])).to.equal(6);
        expect(indexMaxElement([5, 7, 157960, 73, 0, 7, 45687, 1])).not.to.equal(5);
        expect(indexMaxElement([])).to.equal(null);
        expect(indexMaxElement([2])).to.equal(0);
    })
    it('check if all negative', () => {
        expect(indexMaxElement([-20, -34, -2, -15, -485])).to.equal(2);
        expect(indexMaxElement([20, 7594, -2, -15, -485])).to.equal(1);
    })
    it('check if positive and negative', () => {
        expect(indexMaxElement([20, 7594, -2, -15, -485])).to.equal(1);
        expect(indexMaxElement([-20, -34, 2, 15, 485])).to.equal(4);
    })
});
//
describe('sum elements of array with uneven endex', () => {
    it('should return elements sum with uneven index', () => {
        expect(sumEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 11])).to.equal(31);
        expect(sumEvens([20, 7594, -2, -15, -485])).not.to.equal(2);
        expect(sumEvens([20, 7594, -2, -15, -485])).to.equal(7579);
        expect(sumEvens([5])).to.equal(0);
        expect(sumEvens([])).to.equal(0);
    })
});
describe('Reverse an array', () => {
    it('backward array', () => {
        expect(reverse([1,2,3,4,5,6,7,8,9])).to.eql([9,8,7,6,5,4,3,2,1]);
        expect(reverse([-45,-2,-7,-1,9,5,4,77,44,85])).not.to.eql([45,2,7,1,9,5,-44,77,88]);
        expect(reverse([5])).to.eql([5]);
        expect(reverse([])).to.eql([]);
    })
});

describe('number of odd elements', () => {
    it('Count the number of odd elements in an array', () => {
        expect(counEvens([1, 2, 32, 4, 5, 66, 7, 8, 9])).to.equal(4);
        expect(counEvens([20, 7594, -2, -15, -485])).not.to.equal(1);
        expect(counEvens([20, 7594, -2, -15, -485])).to.equal(2);
        expect(counEvens([-20, -7593, -2, -15, -485])).to.equal(3);
        expect(counEvens([5])).to.equal(1);
        expect(counEvens([])).to.equal(0);
    })
});

describe('number of odd elements', () => {
    it('should be type array', () => {
        expect(changeSides([1, 2, 3, 4])).to.be.an('array');
    })
    it('should be swap 2 part of the array', () => {
        expect(changeSides([45,2,7,1,9,5,-44,77,44,85])).to.eql([5,-44,77,44,85,45,2,7,1,9]);
        expect(changeSides([45,2,7,1,9,5,-44,77,44,85])).not.to.eql([45,2,7,1,9,5,-44,77,44,85]);
        expect(changeSides([45,2])).to.eql([2,45]);
        expect(changeSides([45])).to.eql([45]);
        expect(changeSides([])).to.eql([]);
    })
});

describe('Sort the array', () => {
    it('Sort the array (Bubble)', () => {
        expect(bubbleSort([45,2,7,1,9,5,-44,77,44,85])).to.eql([-44,1,2,5,7,9,44,45,77,85]);
        expect(bubbleSort([45,2,7,1,9,5,-44,77,44,85])).not.to.eql([-44,1,2,5,7,9,85,45,77,44]);
        expect(bubbleSort([45,2])).to.eql([2,45]);
        expect(bubbleSort([45])).to.eql([45]);
        expect(bubbleSort([])).to.eql([]);
    })
    it('Sort the array (Select)', () => {
        expect(selectionSort([45,2,7,1,9,5,-44,77,44,85])).to.eql([-44,1,2,5,7,9,44,45,77,85]);
        expect(selectionSort([45,2,7,1,9,5,-44,77,44,85])).not.to.eql([-44,1,2,5,7,9,85,45,77,44]);
        expect(selectionSort([45])).to.eql([45]);
        expect(selectionSort([])).to.eql([]);
    })
    it('Sort the array (Insert)', () => {
        expect(insertionSort([45,2,7,1,9,5,-44,77,44,85])).to.eql([-44,1,2,5,7,9,44,45,77,85]);
        expect(insertionSort([45,2,7,1,9,5,-44,77,44,85])).not.to.eql([-44,1,2,5,7,9,85,45,77,44]);
        expect(insertionSort([45,2])).to.eql([2,45]);
        expect(insertionSort([45])).to.eql([45]);
        expect(insertionSort([])).to.eql([]);
    })
});

