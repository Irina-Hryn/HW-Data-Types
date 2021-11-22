const Node = function(value){
    this.data = value;
    this.next = null;
 };

const LinkedList = function(){
    this.tail = null; // создает ссылку на хвост (последний узел) в связанном списке
    this.head = null; // создает ссылку на заголовок (первый узел) в связанном списке
    this.next = null;
    this.length = 0;
};

LinkedList.prototype.addToTail = function(value){
    if (!value) {
        return;
    }
    const node = new Node(value); //создание узла с использованием класса Node
        if (this.tail) {
        this.tail.next = node; // если есть значение в хвосте, то переменная узла будет последней
        }
        if (!this.head) { // // если нет значение в голове, то переменная узла будет первая
        this.head = node;
        }
    this.tail = node;
    this.tail.next = null;
    this.length++;
    console.log(node);
    alert('added: ' + value + ', next = null')
};

LinkedList.prototype.addByValues = function(after, value){
    const array = value.split(',');
    for (let i = 0; i < array.length; i++) {
       this.addToTail(array[i]);
    } alert('added: ' + value + ', next = null')
};

LinkedList.prototype.findValue = function(value) {
    if (!this.head) {
        return;
    }
    let current = this.head;
    while (current) {
        if (current.data === value) {
            alert('finded: ' + value);
        }
        current = current.next;
    }
};
LinkedList.prototype.getIndexOf = function(value) {
    if (!this.head) {
        return;
    }
    let current = this.head;
    let index = 1;
    while(current) {
        current = current.next;
        index++;
        if (current.data === value) {
            alert('findIndex: ' + index);
        }
    } return -1;
};

LinkedList.prototype.deleteValue = function(value) {
    if (!this.head) {
        return
    }
    while (this.head && this.head.data === value) {
        this.head = this.head.next
    }
    let current = this.head
    while (current.next) {
        if (current.next.data === value) {
            current.next = current.next.next
        } else {
            current = current.next;
        }
    }
    this.length--;
    alert('delete:' + value)
};

LinkedList.prototype.deleteTail = function() { //удаление последнего элемента
    if (!this.head) {
        return;
    }
    let current = this.head;
    while (!current.next || current.next.next !== null) {
        current = current.next;
    } current.next = null;
    if (this.tail) {
        this.tail = current;
    }
     this.length--;
};

LinkedList.prototype.size = function() {
    return this.length;
};

function renderView(){
   let current  = listChanch.head, counter = 0;
    nodeList.innerHTML = '';
    do { nodeList.appendChild(createNode(current.data,counter));
        counter++;
        current = current.next;
    }
    while(current !== null)

    function createNode(value,counter){
        const container = document.createElement('div'),
            dataElement = document.createElement('span');

        container.className="node-list";
        dataElement.innerHTML = (value);

        dataElement.style.background = getColor(value,counter);
        container.appendChild(dataElement);
        dataElement.className=value;
        return container;
    }

    function getColor(value){
        value = 255 - Number(value)%255;
        switch (value%3){
            case 0:
                return 'rgb('+value+','+value+',0)';
            case 1:
                return 'rgb('+value+',0,'+value+')';
            default:
                return 'rgb(0,'+value+','+value+')';
        }
    }
}
