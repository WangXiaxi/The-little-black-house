window.onload=function(){
	fn_start();
}
function fn_start(){
	fn_month(); //所有月份，并显示当前月份
	fn_year(); //所有年份，并显示当前年份
	var months = document.getElementById("months").value; //获得默认月份 
	var month = Number(months);
	var a = fn_days1(month); //获得当前月份天数
	fn_days(a);	//执行显示当前月的天数，并显示当前日期
}
function fn_month(){
	var nowDate = new Date(); 
	var nowMonth = nowDate.getMonth()+1; //获取当前月份
	var months = document.getElementById("months"); 
	for(i=1;i<=12;i++){
	var option1 = document.createElement("option");	
		option1.setAttribute("value",i);
		option1.innerHTML = i +"月份";
		if(i == nowMonth){
			option1.selected = "true";	//循环遍历所有月，若i与当前月份相同则设置为默认
		}
		months.appendChild(option1);  //添加所有月到下拉框中
	}
}
function fn_year(){	
		var nowDate = new Date();
		var nowYears = nowDate.getFullYear();
		var selectYears = document.getElementById("years");
	for(i = -20;i<=20;i++){
		var option1 = document.createElement("option");
		var years = nowYears + i;
			option1.innerHTML = years;
		var a = i+21;	
			option1.setAttribute("value",a);
			if(i == 0){
				option1.selected = "true";
			}
			selectYears.appendChild(option1);
	}

}
function fn_flagLeap(year){	//判断是否为闰年，是则返回ture,否则返回false
	var a = Number(year) % 4;
	var b = Number(year) % 100;
	var c = Number(year) % 400;
	var result = a==0&&b!=0||c==0 ? true:false;
	return result;	
}
function fn_days1(optNum){	
	var year1 = document.getElementById("years").value; //获得所选年年份value值
	var year2 = Number(year1) + 1995; //根据value值计算出年份
	var year = fn_flagLeap(year2);	//判断是否为闰年并返还true or false
	var a = Number(optNum);	//获取当前所选月
		switch(a){
				case 1:
				case 3:
				case 5:
				case 7:
				case 8:
				case 10:
				case 12:
					var endDays = 31;
					break;
				case 4:
				case 6:
				case 9:
				case 11:
					var endDays = 30;
					break;
				case 2:
					if(year == true){
						var endDays = 29;
					}else{
						var endDays = 28;
					};
					break;	
			}
				return endDays;	//根据月、年，判断所选月天数
		}

function fn_yearOnclick(){	//根据所选年刷新天数
		var optNum = document.getElementById("months").value;
		var endDays = fn_days1(optNum);
		fn_days(endDays);
}

	function fn_days(endDays){ //根据获得天数，打印至下拉框中并显示当前日期
	var days = document.getElementById("days");
	var options = days.getElementsByTagName("option");
	while(options.length > 1){
					days.removeChild(days.lastChild);
				}
	var nowDate = new Date();
	var nowDay = nowDate.getDate();
	for(i = 1;i <=endDays;i++){
	var option1 = document.createElement("option");
		option1.setAttribute("value",i);
		option1.innerHTML = i;
		if(i==nowDay){
			option1.selected = "true";
		}
		days.appendChild(option1);			
	}						
}
function fu_shuXiang(){ //判断属性并添加
	var years1 = document.getElementById("years").value;
	var years = Number(years1);
	var year = years%12;
	if (year == 0){
		year = 12;
	}
	var a = ["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
	var star1 = document.getElementsByClassName("star1")[0];
		star1.innerHTML = a[(year-1)];
}
function star1(){	//本段函数判断图片，解释内容并添加。可以分解成多个
		fu_shuXiang();
		var months = document.getElementById("months").value;
		var days = document.getElementById("days").value;
		var star = document.getElementsByClassName("star")[0];
		var needimg = document.getElementsByClassName("needimg")[0]; //获得需要添加星座图片的Div
		var needMain = document.getElementsByClassName("needMain")[0]; //获得需要添加内容图片的Div
		 if(days == "-1"){	//未选中日期则显示"请选择日期"
				needMain.innerHTML="请选择日期"	
			}else if(months==3&&days>=21||months==4&&days<=19){
			star.innerText = "白羊座"; //判断星座并添加内容
			needimg.style.backgroundImage = "url(../img/capricorn.jpg)";	
			needMain.innerHTML="白羊座的人冲动、爱冒险、慷慨、天不怕地不怕，而且一旦下定决心，不到黄河心不死，排除万难的要达到目的。大部分属于白羊座的人的脾气都很差，不过只是炮仗颈，绝对不会放在心上，很快便会没有事"
			}else if(months==4&&days>=20||months==5&&days<=20){
				star.innerText = "金牛座";
				needimg.style.backgroundImage = "url(img/shooter.jpg)";	
				needMain.innerHTML="金星是金牛座的守护星，所以金牛座是保守型的星座，他不喜欢变动，安稳是他的生活态度。金牛座的人不会急躁冲动，只有忍耐，“吃得苦中苦，方为人上人”，正是他们的写照，而且还是非常顽固，一旦决定了的事他不喜欢去改变。"
			}else if(months==5&&days>=21||months==6&&days<=21){
				star.innerText = "双子座";
				needimg.style.backgroundImage = "url(img/t01eaaa8fec9a50fd99.jpg)";	
				needMain.innerHTML="双子座的守护星水星是使者之神，会刺激智慧，但也会令人产生挑剔、紧张的情绪；不过双之座掌握沟通，所以双子座的人善于和人相处。双子座的人可以不停说话，和他们谈情最好的方法就是聊天。"	
			}else if(months==6&&days>=22||months==7&&days<=22){
				star.innerText = "巨蟹座";
				needimg.style.backgroundImage = "url(img/t016f7515b5806aa93c.jpg)";	
				needMain.innerHTML="一谈到巨蟹座，必然会提及他们爱家的母性本质，不过别忘记充满爱心是巨蟹座的特性；恰似他们标记的蟹一样，有坚硬的外壳，却有柔软的内心，所以巨蟹座的人很懂得保护自己。巨蟹座属水象星座不过对他们所爱的人非常体贴及亲切。"	
			}else if(months==7&&days>=23||months==8&&days<=22){
				star.innerText = "狮子座";
				needimg.style.backgroundImage = "url(img/t01ee125ac29663cd89.jpg)";	
				needMain.innerHTML="狮子座是由太阳神阿波罗所管理，所以本他身上处处显露阳光、热情、自信、大方都是他的特质。而且天仕的领导才能令他喜欢指挥别人和有强大的组织能力，不过过份自信变成自大，加上固执的性格，反应夸张，有时令人不知如何与他相处。"	
			}else if(months==8&&days>=23||months==9&&days<=22){
				star.innerText = "处女座";
				needimg.style.backgroundImage = "url(img/t010f2203cb8cfac435.png)";	
				needMain.innerHTML="因为水星是处女座的守护星，影响到处女座的人追求完美，挑剔和神经紧张，吹毛求疵正是他们的特性。"	
			}else if(months==9&&days>=23||months==10&&days<=23){
				star.innerText = "天秤座";
				needimg.style.backgroundImage = "url(img/t01ffaa1414ac4075d5.jpg)";	
				needMain.innerHTML="天秤座常常追求和平和谐的感觉，他们善于交谈，沟通能力极强是他们最大的优点。但他们最大的缺点，往往是犹..."	
			}else if(months==10&&days>=24||months==11&&days<=22){
				star.innerText = "天蝎座";
				needimg.style.backgroundImage = "url(img/t0176ac2726192ce24b.jpg)";	
				needMain.innerHTML="冥王星是天蝎座的守护星，他是掌管幽冥世界，所以天蝎座有神秘的特质，令人变得残酷、阴险。天蝎座的人给人一种精力旺盛、热情、善妒、占有欲强的特质。"	
			}else if(months==11&&days>=23||months==12&&days<=21){
				star.innerText = "射手座";
				needimg.style.backgroundImage = "url(img/t01299d912b7c04b068.png)";	
				needMain.innerHTML="　射手座的守护星是木星，守护神是宙斯，所以射手座的人乐观、诚实、热情、喜欢挑战，不过很容易浮躁不安，鲁莽行事。"	
			}else if(months==12&&days>=22||months==1&&days<=19){
				star.innerText = "摩羯座";
				needimg.style.backgroundImage = "url(img/t0131fff9df9681a01a.jpg)";	
				needMain.innerHTML="其实摩羯座是十二星座中最有耐心，小心的星座，凡事都脚踏实地，固执可以说是他们最大的特质，无论对事情的看法、态度、一旦坚持己见，不达到目的，他们是不会放手的。"	
			}else if(months==1&&days>=20||months==2&&days<=18){
				star.innerText = "水瓶座";
				needimg.style.backgroundImage = "url(img/t0190a229d8310f7091.jpg)";	
				needMain.innerHTML="水瓶座的人很聪明，他们最大的特点是创新，追求独一无二的生活，个人主义色彩很浓重的星座。他们对人友善又..."	
			}else if(months==2&&days>=19||months==3&&days<=20){
				star.innerText = "双鱼座";
				needimg.style.backgroundImage = "url(img/t01102c8601a9f9749d.jpg)";	
				needMain.innerHTML="双鱼座是十二宫最后一个星座，他集合了所有星座的优缺点于一身，同时受水象星座的情绪化影响，使他们原来复..."	
			}
}
