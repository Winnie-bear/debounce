var count=1;
var container=document.getElementById('container');
// var getUserAction=()=>{
//   container.innerHTML=count++;
//   console.log(this);
// }
function getUserAction(e){
  container.innerHTML=count++;
  console.log(e);
}

var debounce=(func,wait)=>{
    let tId;
    return function(){
      let context=this;//保存container对象，setTimeOut中的this指向window
      let args=arguments;//保存func中传入的参数
      clearTimeout(tId);
      tId=setTimeout(function(){
        func.apply(context,args);
      },wait);
    }   
}
//getUserAction后不能加（）,每次onmousemove需要执行一次函数，而不是把函数结果赋值过去
container.onmousemove=debounce(getUserAction,1000);