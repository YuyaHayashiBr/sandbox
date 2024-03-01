// マークを付けたいホスト名とポート番号を指定する
// ・ホスト名はIPアドレスでも可
// ・ポート番号が 80 or 443 の場合は指定不要
//
// [サンプル]
// http://localhost:1080/aaa/* => [Mark A]
// http://localhost:1080/bbb/* => [Mark B]
// http://localhost:1080/ccc/* => [Mark C]
// http://localhost:1080/[上記以外] => [Mark other]
if( location.host === "localhost:1080" )
{
  var elm = document.getElementById('mark');
  elm.style.display = null;
  // マークを付けたい(先頭からの)パスを指定する
  // 例) localhost:1080/aaa/  =>  /aaa/
  if( location.pathname.indexOf("/aaa/") === 0 )
  {
    elm.style.background = "#FF00FF";
    elm.style.color = "#FFFFFF";
    elm.textContent = "Mark A";
  }
  else if( location.pathname.indexOf("/bbb/") === 0 )
  {
    elm.style.background = "#00FFFF";
    elm.style.color = "#000000";
    elm.textContent = "Mark B";
  }
  else if( location.pathname.indexOf("/ccc/") === 0 )
  {
    elm.style.background = "#00FF00";
    elm.style.color = "#000000";
    elm.textContent = "Mark C";
  }
  else
  {
    // 指定のパス以外のパスにマークを付けたい場合
    elm.style.background = "#696969";
    elm.style.color = "#FFFFFF";
    elm.textContent = "Mark other";
  }
}