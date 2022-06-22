
    function update( _v ) // input tag　を更新する関数
    {
      document. querySelector( 'input' ).value = _v
    }
    
    
    function append ( _v)//数字ボタンが押されたので数字を後ろに追加する
    {
      document. querySelector( 'input' ). value += _v
    }

    
   function sss ( _v)//ルートだから計算させるっす
    {
      document. querySelector( 'input' ). value += _v
     
      const v = document. querySelector( 'input' ).value
      try{
        const f = new Function( 'return ' + v )
        update( f().torihoching() )
        } catch( _error ){}
          
    } 
       function mmm ( _v)//計算させるっす
    {
calc();
document. querySelector( 'input' ). value += _v;
 
    
    } 

    function  calc() // 「＝」が押されたので計算する
    {
      riri();
        document. querySelector( 'input' ).value = 'Math.round( (' + rihobox.value + ' )  * 1000) /1000'
      const v = document. querySelector( 'input' ).value
      try{
        const f = new Function( 'return ' + v )
        update( f().toString() )
        } catch( _error ){}
     
             
    }

function riri() //文字の置き換えをするっす。
{
var rihoch = rihobox.value;
var result = rihoch.replace('×', '*');
  
 
//「rihoch」と「result」が同じ文字列になるまで繰り返す
while(result !== rihoch) {
 
    rihoch = rihoch.replace('×', '*');
    result = result.replace('×', '*');
 
}

   var result = rihoch.replace('÷', '/');
//「rihoch」と「result」が同じ文字列になるまで繰り返す
while(result !== rihoch) {
 
    rihoch = rihoch.replace('÷', '/');
    result = result.replace('÷', '/');
 
}  
  var result = rihoch.replace('^', '**');
//「rihoch」と「result」が同じ文字列になるまで繰り返す
while(result !== rihoch) {
 
    rihoch = rihoch.replace('^', '**');
    result = result.replace('^', '**');
 
}
document. querySelector( 'input' ).value = result;

}


