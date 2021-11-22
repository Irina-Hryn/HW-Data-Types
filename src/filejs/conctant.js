const inputUserValue =document.getElementsByClassName('value')[0];
const inputPosition =document.getElementsByClassName('position')[0];
const submit =document.getElementsByClassName('js-submit')[0];
const find =document.getElementsByClassName('js-find')[0];
const findIndex =document.getElementsByClassName('findIndex')[0];
const filter =document.getElementsByClassName('filter')[0];
const remove =document.getElementsByClassName('js-delete')[0];
const removeLast =document.getElementsByClassName('js-deleteLast')[0];
const length =document.getElementsByClassName('length')[0];
const nodeList = document.getElementsByClassName('node-list')[0];

const listChanch = new LinkedList();

submit.addEventListener('click',function(){
    listChanch.addToTail(inputUserValue.value);
    renderView();
});

find.addEventListener('click',function(){
    listChanch.findValue(inputUserValue.value);
});

findIndex.addEventListener('click',function(){
    listChanch.getIndexOf(inputUserValue.value);
});

filter.addEventListener('click',function(){
    listChanch.addByValues(inputPosition.value, inputUserValue.value);
    renderView();
});

remove.addEventListener('click',function() {
    listChanch.deleteValue(inputUserValue.value);
    renderView();
});
removeLast.addEventListener('click',function() {
    listChanch.deleteTail();
    renderView();
});
length.addEventListener('click',function() {
    listChanch.size();
});


