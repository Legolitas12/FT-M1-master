function Node (data){
    this.data = data
    this.next = null
}

function LinkedList() {
    this.head = null
    this._length = 0
}

var lista1 = new LinkedList()
console.log(lista1)

LinkedList.prototype.add = function (data) {
    var node = new Node(data)
    var current = this.head;
    // la lista esta vacia
    if (!current){
        this.head = node;
        this._length++;
        return node;
    }
    while (current.next) {
        current = current.next;
    }
    current.next = node;
    this._length++;
    return node;
}

var lista = new LinkedList()
lista1.add(lista)
lista.add("1")
console.log(lista);
lista.add([1,2,3])
console.log(lista);

//
var lista2 = new LinkedList()
lista2.add("a")
console.log(lista2)




















function HashTable(count) {
    this.buckets = count
    this.array = []
}

function Buckets (data) {
    this.data = data
}