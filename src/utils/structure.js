//数据结构常见操作
//删除数组某一下标元素
Array.prototype.remove = function(dx) {
		if(isNaN(dx) || dx > this.length) {
			return false;
		}
		for(var i = 0, n = 0; i < this.length; i++) {
			if(this[i] != this[dx]) {
				this[n++] = this[i]
			}
		}
		this.length -= 1
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