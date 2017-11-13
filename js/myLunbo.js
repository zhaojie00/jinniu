/**********轮播效果实现函数**************/
				//移动对象，圆圈选择，右侧按钮切图，左侧按钮，圆圈class，图片数组长度，控制对象，延时
				//oUl1,aLib,oRig,oLef,ok,long,obox,delay
function myLunbo(oUl1,aLib,ok,long,delay){
	  var num =0;
	  var timer;		
	//自动轮播效果实现
	Play();
	console.log(oUl1);
	function autoPlay(){//自动轮播效果实现
		if(num<long-1){
			num++;
			var tag = 1;
		}else{
			num=0;
			tag=0;
		}
		for(var i=0;i<long-1;i++){
			for(var j=0;j<long;j++){//选择圆圈效果
				aLib[j].className = '';
			}
				aLib[num].className = 'ok';
			if(tag){
				oUl1.style.left = -num*281 +"px";
			}else{
				oUl1.style.left = 0 +"px";
			}
		}
	}//function autoPlay
	
	//点击圆圈播放对应图片*/
	for(var k=0;k<long;k++){//点击圆圈播放对应图片
		aLib[k].index = k;
		aLib[k].onclick = function(){
			//clearInterval(timer);
			i=this.index;//获取当前对象的index并赋值给i
			oUl1.style.left = -i*281 +"px";
			for(var j=0;j<long;j++){
				aLib[j].className = '';
				}
				aLib[i].className = 'ok';
		}
	}//for
	function Stop(){
		clearInterval(timer);
	}
	function Play(){
		timer = setInterval(autoPlay,delay);
	}

}//myLunbo