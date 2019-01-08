//获取添加数据按钮
var add = document.getElementById('add');
//获取蒙版
var meng = document.getElementById('meng');
//获取对话框
var dui = document.getElementById('dui');
//获取关闭按钮
var close = document.getElementById('close');
//获取完成按钮
var finishBtn = document.getElementById('finishBtn');
//获取第一个输入框内容
var txt1 = document.getElementById('txt1');
//获取第二个输入框内容
var txt2 = document.getElementById('txt2');

//tMain.children 获取所有的tr
for(var i = 0; i < tMain.children.length; i++) {
	var tr = tMain.children[i];
	//获取每一行的后代 a
	var a = tr.getElementsByTagName('a')[0];
	a.onclick = function() {
		//站在父元素的角度删除子元素
		tMain.removeChild(this.parentElement.parentElement);
	}
}
//点击添加数据，显示出蒙版和对话框
add.onclick = function() {
	meng.style.display = 'block';
	dui.style.display = 'block';
}

finishBtn.onclick = function() {
	//得到两个输入框的值
	var input1 = txt1.value.trim();
	var input2 = txt2.value.trim();
	if(input1 != '' && input2 != '') {
		//点击完成，让蒙版和对话框隐藏
		meng.style.display = 'none';
		dui.style.display = 'none';
		//创建tr
		var tr = document.createElement('tr');
		//将tr添加到列表中
		tMain.appendChild(tr);

		//循环创建3个td
		for(var i = 0; i < 3; i++) {
			//没行创建一个td
			var td = document.createElement('td');
			//添加tr到
			tr.appendChild(td);
			//第一个td
			if(i == 0) {
				td.innerText = txt1.value;
			}
			//第二个td
			if(i == 1) {
				td.innerText = txt2.value;
			}
			//第三个td
			if(i == 2) {
				var a = document.createElement('a');
				td.appendChild(a);
				a.innerText = '看过';
				a.setAttribute('href', '##');
				//给新添加的a绑定时间
				a.onclick = function() {
					//站在父元素的角度删除子元素
					tMain.removeChild(this.parentElement.parentElement);
				}

			}
		}
		//添加完数据后清空输入框
		txt1.value = '';
		txt2.value = '周润发';
	} else {
		alert('电影名称和主演名称不能为空！');
	}
}
close.onclick = function() {
	meng.style.display = 'none';
	dui.style.display = 'none';
}