describe('adding an element', function () {
    it('adding one number to the end', function () {
       expect(LinkedList.prototype.addToTail(1)).to.be.equal();
    });
 });

describe('find an element', function () {
    it('find linklist value', function () {
        expect(LinkedList.prototype.findValue(1)).to.be.equal();
    });
});




