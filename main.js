//HTMLのresult情報を変数に代入
var result = document.getElementById("result");

//計算式の表示
function number(n) {
  //ACが入力されたらクリア、異なるならvalueに文字を追加
  if( n.value === "AC"){
    result.value = ""; 
   }else{
    result.value += n.value;
  }
}

//計算と結果表示
function calc(){
  //計算できる文字に置換
  result.value = result.value.replace("×","*").replace("÷","/");
  //Functionによりvalue内を計算
  result.value = new Function("return " + result.value)();
}
