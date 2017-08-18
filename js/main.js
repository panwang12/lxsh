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
        v+=20
        if(v>160){
            clearInterval(timer)
        }
        ctx.fillRect(0,0,v,5);
    },200)
    audio.pause()
    page=0;
    $('#cover').css('display','block');
    $('#main').load('component/page0.html',function(){
        $("#myCanvas").css("display","none")
        var page1=document.getElementById("page1");
        var c=document.createElement("canvas");
        c.id="mCanvas";
        c.width=window.innerWidth;
        c.height=window.innerHeight;
        page1.appendChild(c);
        $('#cover').click(function(){
            $('#cover').css('display','none')
            audio.play()
            getPage1()
        })
    })

}

function getPage1(){
    var video=document.getElementById('video1');
    video_play(video,18,0)
    drawVideo(video)
}
function getPage2(){
    var video=document.getElementById('video2');
    video_play(video,12,1)
    drawVideo(video)
}
function getPage3(){
    var video=document.getElementById('video3');
    video_play(video,9,2)
    drawVideo(video)
}
function getPage4(){
    var video=document.getElementById('video4');
    video_play(video,11,3)
    drawVideo(video)
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

function video_play(video,topTime,num){
    var videos=document.querySelectorAll("video");
    for(var i=0;i<videos.length;i++){
        if(i!==num){
            videos[i].pause()
        }
    }
    video.currentTime=0;
    video.play();
    video.addEventListener("timeupdate",function(){
        if(video.currentTime>=topTime){
            video.pause();
        }
    })
}

function drawVideo(v){
    var c=document.getElementById("mCanvas");
    ctx=c.getContext('2d');
    var cw=window.innerWidth;
    var ch=window.innerHeight;
    var timer=null;
    v.addEventListener('play', function() {
        timer=window.setInterval(function() {
            ctx.drawImage(v,0,0,cw,ch)
        },20);
    },false);
    v.addEventListener('pause',function() {
        window.clearInterval(timer);
    },false);
    v.addEventListener('ended',function() {
        clearInterval(timer);
    },false);
}

