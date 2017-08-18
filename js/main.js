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
        console.log("ww")
        ctx.fillRect(0,0,v,5);
    },500)
    audio.pause()
    page=0;
    $('#cover').css('display','block');
    $('#main').load('component/page0.html',function(){
        $("#myCanvas").css("display","none")
        $('#cover').click(function(){
            $('#cover').css('display','none')
            audio.play()
            getPage1()
        })
    })

}

function getPage1(){
    //$("#videoCover").css("display","block")
    $('.page-common').css('display','none');
    $('#page1').css('display','block');
    $('video').remove();
    var ele=' <video id="video1" muted src="assets/videos/1-1.mp4" preload="auto" playsinline="true" webkit-playsinline="true"></video>'
    $("#page1").append(ele)
    var video=document.getElementById('video1');
    var firstImg=$('#page1 img:first-child');
    var lastImg=$('#page1 img:nth-child(2)');
    video_play(video,firstImg,lastImg,18)
}
function getPage2(){
    //$("#videoCover").css("display","block")
    $('.page-common').css('display','none');
    $('video').remove();
    $('#page2').css('display','block');
    var ele=' <video id="video2" muted src="assets/videos/2-1.mp4" preload="auto" playsinline="true" webkit-playsinline="true"></video>'
    $("#page2").append(ele)
    var video=document.getElementById('video2');
    var firstImg=$('#page2 img:first-child');
    var lastImg=$('#page2 img:nth-child(2)');
    video_play(video,firstImg,lastImg,12)
}
function getPage3(){
    //$("#videoCover").css("display","block")
    $('.page-common').css('display','none');
    $('video').remove();
    $('#page3').css('display','block');
    var ele='<video id="video3" muted src="assets/videos/3-1.mp4" preload="auto" playsinline="true" webkit-playsinline="true"></video>';
    $("#page3").append(ele)
    var video=document.getElementById('video3');
    var firstImg=$('#page3 img:first-child');
    var lastImg=$('#page3 img:nth-child(2)');
    video_play(video,firstImg,lastImg,9)
}
function getPage4(){
    //$("#videoCover").css("display","block")
    $('.page-common').css('display','none');
    $('video').remove();
    $('#page4').css('display','block');
    var ele=' <video id="video4" muted src="assets/videos/4-1.mp4" preload="auto" playsinline="true" webkit-playsinline="true"></video>'
    $("#page4").append(ele)
    var video=document.getElementById('video4');
    var firstImg=$('#page4 img:first-child');
    var lastImg=$('#page4 img:nth-child(2)');
    video_play(video,firstImg,lastImg,11)
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

function video_play(video,firstImg,lastImg,topTime){
    video.style.width="1px";
    firstImg.css('display','block');
    lastImg.css('display','none');
    $(".page-common").children("img:odd").css('display','none');
    video.currentTime=0;
    video.play();
    video.addEventListener("timeupdate",function(){
        console.log(video.currentTime);
        if(video.currentTime>0.5) {
            firstImg.css('display','none');
            video.style.width="120%";
        }
        if(video.currentTime>=topTime){
            lastImg.css('display','block');
            video.remove();
            //$("#videoCover").css("display","none")
            //video.style.width="1px";
            //video.pause();
        }
    })
}

