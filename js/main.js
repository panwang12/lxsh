//页面0的状态
var page=0;
//页面0的模块
var pages=[getPage1,getPage2,getPage3,getPage4];
$("#my-container").css("height",$(document).height());
//加载页面一
location.hash="0";
getPage0();
//页面加载完的处理函数

//通过状态的改变加载页面
window.onpopstate=function(){
    if(location.hash==="#0"){
        getPage0()
    }
    if(location.hash==="#4"){
        getPage5()
    }
    if(location.hash==="#6"){
        getPage6()
    }
    if(location.hash==="#7"){
        getPage7()
    }
    if(location.hash==="#8"){
        getPage8()
    }
    if(location.hash==="#9"){
        getPage9()
    }
    //修改页面0的状态
}

//滑动事件
$('#my-container').swipe({//滑动事件
    swipe:function(event, direction) {
        if(page<4 && page>=0){
            if (direction == "up"){
                page++;
                if(page<4){
                    pages[page]();
                }else{
                    changeHash(page)
                }
            }
            if (direction == "down") {
                if(page>0){
                    page--
                    pages[page]();
                }
            }
        }
    },
    threshold:1
})

//改变hash
function changeHash(hash){
    location.hash=hash
}


//异步加载第一页的html
function getPage0(){
    var audio=document.getElementById('audio');
    var canvas=document.getElementById('myCanvas');
    var ctx=canvas.getContext('2d');
    ctx.fillStyle='#0f0';
    var v=0
    var timer=setInterval(function(){
        v+=10
        if(v>180){
            clearInterval(timer)
        }
        console.log("ww")
        ctx.fillRect(0,0,v,5);
    },500)
    audio.pause()
    page=0;
    $('#cover').css('display','block');
    $('#main').load('component/page0.html',function(){
        var para=0;
        var video1=document.getElementById('video1');
        var video2=document.getElementById('video2');
        var video3=document.getElementById('video3');
        var video4=document.getElementById('video4');


        video1.addEventListener('canplaythrough',function(){
            para++;
            cb()
        });
        video2.addEventListener('canplaythrough',function(){
            para++;
            cb()
        });
        video3.addEventListener('canplaythrough',function(){
            para++;
            cb()
        });
        video4.addEventListener('canplaythrough',function(){
            para++;
            cb()
        });
        function cb(){
            if(para===4){
                $("#myCanvas").css("display","none")
                $('#cover').click(function(){
                    $('#cover').css('display','none')
                    audio.play()
                    getPage1()
                })
            }
        }
    })


}

function getPage1(){
    $('.page-common').css('display','none');
    $('#page1').css('display','block');
    var video1=document.getElementById('video1');
    video1.currentTime=0;
    video1.play();
    video1.addEventListener("timeupdate",function(){
        if(video1.currentTime>=19){
            video1.pause();
        }
    })
}
function getPage2(){
    $('.page-common').css('display','none');
    $('#page2').css('display','block');
    var video2=document.getElementById('video2');
    video2.currentTime=0;
    video2.play();
    video2.addEventListener("timeupdate",function(){
        if(video2.currentTime>=13){
            video2.pause();
        }
    })
}
function getPage3(){
    $('.page-common').css('display','none');
    $('#page3').css('display','block');
    var video3=document.getElementById('video3');
    video3.currentTime=0;
    video3.play();
    video3.addEventListener("timeupdate",function(){
        if(video3.currentTime>=12){
            video3.pause();
        }
    })
}
function getPage4(){
    $('.page-common').css('display','none');
    $('#page4').css('display','block');
    var video4=document.getElementById('video4');
    video4.currentTime=0;
    video4.play();
    video4.addEventListener("timeupdate",function(){
        if(video4.currentTime>=13){
            video4.pause();
        }
    })
}

function getPage5(){
    $('#main').load('component/page5.html',function(){
        $('#page5 a').click(function(e){
            e.preventDefault();
            var hash=$(this).attr('href');
            changeHash(hash)
        })
    })
}
function getPage6(){
    $('#main').load('component/page6.html',function(){
        linkTo('1')
    })
}
function getPage7(){
    $('#main').load('component/page7.html',function(){
        linkTo('1')
    })
}
function getPage8(){
    $('#main').load('component/page8.html',function(){
        linkTo('1')
    })
}
function getPage9(){
    $('#main').load('component/page9.html',function(){
        linkTo('1')
    })
}

function linkTo(url){
    $('.btn-link').click(function(e){
        e.preventDefault();
        $('#hint1').css('display','block')
        $('#hint1 span').click(function(){
            location.href=url;
        })
    })
}