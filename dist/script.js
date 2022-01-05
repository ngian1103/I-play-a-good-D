let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click",news);
function news(){
  list.innerHTML = list.innerHTML + `
  <div class="news">
    <h2>${title.value}</h2>
    <p>${content.value}</p><hr>
  </div>
 `;
}

let i =0, imgArr=new Array(); //宣告使用變數 i 及 陣列 imgArr
imgArr[0] = "https://i1.sndcdn.com/artworks-000353971593-i8o60t-t500x500.jpg"
imgArr[1] =  "https://i.pinimg.com/550x/f2/e3/34/f2e3342d8e13e6e9177778d60683061a.jpg"
imgArr[2] ="https://i.pinimg.com/originals/c8/fe/03/c8fe0395b1eecbc3439eaad9cd44433a.jpg"
imgArr[3] ="https://64.media.tumblr.com/050401d89fb90df2910b1b86d4957872/tumblr_piexz31J7l1ufzrtb_540.jpg"
  
function showImg(){
  document.getElementById('ico').src = imgArr[i]; //指定 img 的 src
  i = (i+1) % 4; //把i加1之後,除以3(因有三張圖輪播),將餘數再放到函數 i 裡
 }

function show() {
  setInterval(showImg,2000); //每隔2秒呼叫一次showImg函數
}