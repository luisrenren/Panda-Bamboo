//————————遮罩
var front=document.getElementById('front');
var ctx1=front.getContext('2d');

ctx1.moveTo(0,0);
ctx1.lineTo(1500,0);
ctx1.lineTo(1500,600);
ctx1.lineTo(0,600);
ctx1.closePath();

ctx1.moveTo(450,100);
ctx1.lineTo(450,500);
ctx1.lineTo(1050,500);
ctx1.lineTo(1050,100);
ctx1.closePath();

ctx1.fill();

//————————主要背景
var mainbg=document.getElementById('mainbg');
var ctx2=mainbg.getContext('2d');

var img_mainbg=new Image();
img_mainbg.onload=function(){
    bgMove1();
}
img_mainbg.src='./images/mainbg.png';

var x1=0;
function bgMove1(){
    //存
    ctx2.save();
    //清屏
    ctx2.clearRect(0,0,img_mainbg.width,img_mainbg.height);
    //往右走
    ctx2.translate(x1,0);
    ctx2.drawImage(img_mainbg,0,0);
    ctx2.drawImage(img_mainbg,-mainbg.width,0);
    x1=x1+0.3;
    if(x1>img_mainbg.width){
        x1=0;
    }
    ctx2.restore();
    window.requestAnimationFrame(bgMove1);
}

//————————两个主人公
var girlsincar=document.getElementById('girlsincar');
var ctx3=girlsincar.getContext('2d');

var img_girlsincar=new Image();
img_girlsincar.onload=function(){
    ctx3.drawImage(img_girlsincar,0,0);
    setInterval(function(){
        //清屏
        ctx3.clearRect(0,0,img_girlsincar.width,img_girlsincar.height);
        var i = parseInt(Math.random()*4)-2;
        ctx3.drawImage(img_girlsincar,0,i);

    },200);
}
img_girlsincar.src='./images/girlsincar.png';

//————————hill1
var hill1=document.getElementById('hill1');
var ctx4=hill1.getContext('2d');

var img_hill1=new Image();
img_hill1.onload=function(){
    bgMove2();
}
img_hill1.src='./images/hill1.png';

var x2=0;
function bgMove2(){
    //存
    ctx4.save();
    //清屏
    ctx4.clearRect(0,0,img_hill1.width,img_hill1.height);
    //往右边走
    ctx4.translate(x2,0);
    ctx4.drawImage(img_hill1,0,0);
    ctx4.drawImage(img_hill1,-img_hill1.width,0);
    x2=x2+0.15;
    if(x2>img_hill1.width){
        x2=0;
    }
    ctx4.restore();
    window.requestAnimationFrame(bgMove2);
}

//————————hill2
var hill2=document.getElementById('hill2');
var ctx5=hill2.getContext('2d');

var img_hill2=new Image();
img_hill2.onload=function(){
    bgMove3();
}
img_hill2.src='./images/hill2.png';

var x3=0;
function bgMove3(){
    //存
    ctx5.save();
    //清屏
    ctx5.clearRect(0,0,img_hill2.width,img_hill2.height);
    //往右边走
    ctx5.translate(x3,0);
    ctx5.drawImage(img_hill2,0,0);
    ctx5.drawImage(img_hill2,-img_hill2.width,0);
    x3=x3+0.05;
    if(x3>img_hill2.width){
        x3=0;
    }
    ctx5.restore();
    window.requestAnimationFrame(bgMove3);
}

//————————grass1
var grass1=document.getElementById('grass1');
var ctx6=grass1.getContext('2d');

var img_grass1=new Image();
img_grass1.onload=function(){
    bgMove4();
}
img_grass1.src='./images/grass1.png';

var x4=0;
function bgMove4(){
    //存
    ctx6.save();
    //清屏
    ctx6.clearRect(0,0,img_grass1.width,img_grass1.height);
    //往右走
    ctx6.translate(x4,0);
    ctx6.drawImage(img_grass1,0,0);
    ctx6.drawImage(img_grass1,-img_grass1.width,0);
    x4=x4+2.1;
    if(x4>img_grass1.width){
        x4=0;
    }
    ctx6.restore();
    window.requestAnimationFrame(bgMove4);
}

//————————grass2
var grass2=document.getElementById('grass2');
var ctx7=grass2.getContext('2d');

var img_grass2=new Image();
img_grass2.onload=function(){
    bgMove5();
}
img_grass2.src='./images/grass2.png';

var x5=0;
function bgMove5(){
    //存
    ctx7.save();
    //清屏
    ctx7.clearRect(0,0,img_grass2.width,img_grass2.height);
    //往右走
    ctx7.translate(x5,0);
    ctx7.drawImage(img_grass2,0,0);
    ctx7.drawImage(img_grass2,-img_grass2.width,0);
    x5=x5+2.3;
    if(x5>img_grass2.width){
        x5=0;
    }
    ctx7.restore();
    window.requestAnimationFrame(bgMove5);
}

//阴影
var shadow=document.getElementById('shadow');
var ctx8=shadow.getContext('2d');

var img_shadow=new Image();
img_shadow.onload=function(){
    bgMove6();
}
img_shadow.src='./images/shadow.png';

var x6=0;
function bgMove6(){
    //存
    ctx8.save();
    //清屏
    ctx8.clearRect(0,0,img_shadow.width,img_shadow.height);
    //往右走
    ctx8.translate(x6,0);
    ctx8.drawImage(img_shadow,0,0);
    ctx8.drawImage(img_shadow,-mainbg.width,0);
    x6=x6+0.3;
    if(x6>img_shadow.width){
        x6=0;
    }
    ctx8.restore();
    window.requestAnimationFrame(bgMove6);
}

//—————————————————————————————车轮左
var wheel1=document.getElementById('wheel1');
var ctx9=wheel1.getContext('2d');

var img_wheel1=new Image();
img_wheel1.onload=function(){
    
    var angle=0;
    setInterval(function(){
        //存
        ctx9.save();
        //清屏
        ctx9.clearRect(0,0,wheel1.width,wheel1.height);
        //移动
        ctx9.translate(860,420);
        //旋转
        angle+=-Math.PI*2/360;
        ctx9.rotate(angle);
        //绘制
        ctx9.drawImage(img_wheel1,-(img_wheel1.width/2),-(img_wheel1.height/2));

        //出
        ctx9.restore();
    },5);

}
img_wheel1.src='./images/wheel.png';

//—————————————————————————————车轮右
var wheel2=document.getElementById('wheel2');
var ctx10=wheel2.getContext('2d');

var img_wheel2=new Image();
img_wheel2.onload=function(){
    
    var angle=0;
    setInterval(function(){
        //存
        ctx10.save();
        //清屏
        ctx10.clearRect(0,0,wheel2.width,wheel2.height);
        //移动
        ctx10.translate(930,420);
        //旋转
        angle+=-Math.PI*2/360;
        ctx10.rotate(angle);
        //绘制
        ctx10.drawImage(img_wheel2,-(img_wheel2.width/2),-(img_wheel2.height/2));

        //出
        ctx10.restore();
    },5);

}
img_wheel2.src='./images/wheel.png';

//返回按钮
$('#back').click(function(){
    window.location.href='/home.html';
})
