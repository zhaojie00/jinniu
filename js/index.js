/*轮播图效果*/
window.onload = function(){
	var aBanner = document.getElementById('banner');
	var oBan = aBanner.getElementsByClassName('ban-t');
	var aLi = aBanner.getElementsByTagName('li');
	var num=0;

	var oUl1 = document.getElementById('lunbo');
	var aAa = document.getElementById('aa');
	var aLib = aAa.getElementsByTagName('li');
	var ok;
	var delay = 2000;
	var long = aLib.length;
	// console.log(long);
	myLunbo(oUl1,aLib,ok,long,delay);

	/*初始化第一张默认图片*/
		oBan[0].style.opacity = '1';

	/*自动切换图片效果*/
	var timer = setInterval(function(){
		num<2?num++:num=0;
			for(var j=0; j<aLi.length;j++){
				aLi[j].className = '';
				oBan[j].style.opacity = '0';
			}
			aLi[num].className = 'on';
			oBan[num].style.opacity = '1';
	},2000);

	/*点击圆圈切换图片*/
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = i;
		aLi[i].onclick = function(){
			var num = this.index;
			for(var j=0; j<aLi.length;j++){
				aLi[j].className = '';
				oBan[j].style.opacity = '0';
			}
			this.className = 'on';
			oBan[num].style.opacity = '1';
		}
	}

















}