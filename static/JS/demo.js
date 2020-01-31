// 图片轮播
window.onload=function()
{

    //图片轮播
    var oPic=document.getElementById('pic');
    var oDot=document.getElementById('dot');
    var oPrev=getByClass(oPic,'prev')[0];
    var oNext=getByClass(oPic,'next')[0];
    //圆点

    var tLi=oDot.getElementsByTagName('li');

    var aLi=oPic.getElementsByTagName('li');

    var arr=[];
    var brr=[];

    for(var i=0;i<aLi.length;i++)
    {
        var oImg=aLi[i].getElementsByTagName('img')[0];
        var odiv=tLi[i].getElementsByTagName('div')[0];

        arr.push([parseInt(getStyle(aLi[i],'left')),parseInt(getStyle(aLi[i],'top')),
            getStyle(aLi[i],'zIndex'),oImg.width,parseFloat(getStyle(aLi[i],'opacity')*100)]);

        brr.push([parseInt(getStyle(tLi[i],'left')),parseInt(getStyle(tLi[i],'top')),
            getStyle(tLi[i],'zIndex'),odiv.width,parseFloat(getStyle(tLi[i],'opacity')*100)]);
    }


    oPrev.onclick=function()
    {
        arr.push(arr[0]);
        arr.shift();

        brr.push(brr[0]);
        brr.shift();

        for(var i=0;i<aLi.length;i++)
        {
            var oImg=aLi[i].getElementsByTagName('img')[0];
            var odiv=tLi[i].getElementsByTagName('div')[0];

            aLi[i].style.zIndex=arr[i][2];
            startMove(aLi[i],{left:arr[i][0],top:arr[i][1],opacity:arr[i][4]});
            startMove(oImg,{width:arr[i][3]});

            tLi[i].style.zIndex=brr[i][2];
            startMove(tLi[i],{left:brr[i][0],top:brr[i][1],opacity:brr[i][4]});
            startMove(odiv,{width:brr[i][3]});

        }

    }

    oNext.onclick=function()
    {
        arr.unshift(arr[arr.length-1]);
        arr.pop();

        brr.unshift(brr[brr.length-1]);
        brr.pop();
        for(var i=0;i<aLi.length;i++)
        {
            var oImg=aLi[i].getElementsByTagName('img')[0];
            var odiv=tLi[i].getElementsByTagName('div')[0];

            aLi[i].style.zIndex=arr[i][2];
            startMove(aLi[i],{left:arr[i][0],top:arr[i][1],opacity:arr[i][4]});
            startMove(oImg,{width:arr[i][3]});

            tLi[i].style.zIndex=brr[i][2];
            startMove(tLi[i],{left:brr[i][0],top:brr[i][1],opacity:brr[i][4]});
            startMove(odiv,{width:brr[i][3]});
        }
    }

    function getStyle(obj,name)
    {
        if(obj.currentStyle){ return obj.currentStyle[name]; }
        else{ return getComputedStyle(obj,false)[name]; }
    }



    function getStyle(obj,name)
    {
        if(obj.currentStyle){ return obj.currentStyle[name]; }
        else{ return getComputedStyle(obj,false)[name]; }
    }


}


function getByClass(oParent,sClass)
{
    var aResult=[];
    var aEle=oParent.getElementsByTagName('*');

    for(var i=0;i<aEle.length;i++)
    {
        if(aEle[i].className==sClass)
        {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}

// // 圆点轮播
// window.onload=function(){
//
//     //圆点轮播
//     var oPic=document.getElementById('pic');
//     var oDot=document.getElementById('dot');
//     var oPrev=getByClass(oPic,'prev')[0];
//     var oNext=getByClass(oPic,'next')[0];
//
//     var tLi=oDot.getElementsByTagName('li');
//
//     var arr=[];
//
//     for(var i=0;i<tLi.length;i++)
//     {
//         var odiv=tLi[i].getElementsByTagName('div')[0];
//
//         arr.push([parseInt(getStyle(tLi[i],'left')),parseInt(getStyle(tLi[i],'top')),
//             getStyle(tLi[i],'zIndex'),odiv.width,parseFloat(getStyle(tLi[i],'opacity')*100)]);
//
//     }
//
//
//     oPrev.onclick=function()
//     {
//         arr.push(arr[0]);
//         arr.shift();
//         for(var i=0;i<tLi.length;i++)
//         {
//             var odiv=tLi[i].getElementsByTagName('div')[0];
//
//             tLi[i].style.zIndex=arr[i][2];
//             startMove(tLi[i],{left:arr[i][0],top:arr[i][1],opacity:arr[i][4]});
//             startMove(odiv,{width:arr[i][3]});
//
//
//         }
//
//     }
//
//     oNext.onclick=function()
//     {
//         arr.unshift(arr[arr.length-1]);
//         arr.pop();
//         for(var i=0;i<tLi.length;i++)
//         {
//             var odiv=tLi[i].getElementsByTagName('div')[0];
//
//             tLi[i].style.zIndex=arr[i][2];
//             startMove(tLi[i],{left:arr[i][0],top:arr[i][1],opacity:arr[i][4]});
//             startMove(odiv,{width:arr[i][3]});
//         }
//     }
//
//     function getStyle(obj,name)
//     {
//         if(obj.currentStyle){ return obj.currentStyle[name]; }
//         else{ return getComputedStyle(obj,false)[name]; }
//     }
// },
// function getByClass(oParent,sClass)
// {
//     var aResult=[];
//     var aEle=oParent.getElementsByTagName('*');
//
//     for(var i=0;i<aEle.length;i++)
//     {
//         if(aEle[i].className==sClass)
//         {
//             aResult.push(aEle[i]);
//         }
//     }
//     return aResult;
// };
