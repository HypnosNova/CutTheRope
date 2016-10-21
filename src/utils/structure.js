//数据结构常见操作
//删除数组某一下标元素
Array.prototype.remove = function(dx) {
		if(isNaN(dx) || dx > this.length) {
			return false;
		}
		this.splice(dx, 1);
	}

Array.prototype.removeChild = function(obj) {
		var index=this.getIndex(obj);
		if(index>-1){
			this.remove(index);
		}
	}

Array.prototype.deleteChild = function(obj) {
		var index=this.getIndex(obj);
		if(index>-1){
			this[index]=null;
		}
	}
	//将数组按照index分成2个数组
Array.prototype.sperate = function(dx) {
		if(isNaN(dx) || dx > this.length) {
			return false;
		}
		var arr1 = cloneArray(this);
		var arr2 = cloneArray(this);
		arr1.splice(dx+1, this.length - dx);
		arr2.splice(0, dx+1);
		return [arr1, arr2];
	}
	//获取数组元素的下标
Array.prototype.getIndex = function(obj) {
	if(obj == null) {
		return -1;
	}
	for(var i = 0; i < this.length; i++) {
		if(this[i] == obj) {
			return i;
		}
	}
	return -1;
}
Array.prototype.insert = function(index, item) {
	this.splice(index, 0, item);
};

function clone(obj) {
	var o;
	switch(typeof obj) {
		case 'undefined':
			break;
		case 'string':
			o = obj + '';
			break;
		case 'number':
			o = obj - 0;
			break;
		case 'boolean':
			o = obj;
			break;
		case 'object':
			if(obj === null) {
				o = null;
			} else {
				if(obj instanceof Array) {
					o = [];
					for(var i = 0, len = obj.length; i < len; i++) {
						o.push(clone(obj[i]));
					}
				} else {
					o = {};
					for(var k in obj) {
						o[k] = clone(obj[k]);
					}
				}
			}
			break;
		default:
			o = obj;
			break;
	}
	return o;
}

//克隆数组
function cloneArray(array) {
	var arr = [];
	for(var i = 0; i < array.length; i++) {
		arr.push(array[i]);
	}
	return arr;
}