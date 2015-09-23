function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype = {
    minimum() {

    },
    maximum() {

    },
    successor() {

    },
    predecessor() {

    },
    insert(node){
	    var tmp;
		var root = this.root;

	    while(root !== undefined) {
		    tmp = root;
			if (node.key < root.key) {
				root = root.left;
			}
		    else {
				root = root.right;
			}
	    }
	    node.parent = tmp;
	    if (tmp === undefined) {
		    this.root = node;
	    }
	    else if (node.key < tmp.key) {
		    tmp.left = node;
	    }
	    else {
		    tmp.right = node;
	    }
    },
    remove(value){

    },
    search(value){

    },
    size(){
		return this.toArray().length;
    },

    toArray(root){
	    root = root || this.root;
	    if (root === undefined) {
		    return [];
	    }
	    return this.toArray(root.left).concat(root, this.toArray(root.right));
    },

    toString(){
		return this.toArray().join('');
    }
};
