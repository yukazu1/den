
    function update( _v ) // input tag　を更新する関数
    {
      document. querySelector( 'input' ).value = _v
    }
    
    
    function append ( _v)//数字ボタンが押されたので数字を後ろに追加する
    {
      document. querySelector( 'input' ). value += _v
    }

    
   function sss( _v)//ルートだから計算させるっす
    {
      document. querySelector( 'input' ). value += _v
   const v = document. querySelector( 'input' ).value
      try{
        const f = new Function( 'return ' + v )
        update( f().toString() )
        } catch( _error ){}
     
             
    } 
       function mmm ( _v)//計算させるっす
    {
calc();
document. querySelector( 'input' ). value += _v;
 
    
    } 

    function  calc() // 「＝」が押されたので計算する
    {
      rihoreplace();
        document. querySelector( 'input' ).value = 'Math.round( (' + rihobox.value + ' )  * 1000) /1000'
      const v = document. querySelector( 'input' ).value
      try{
        const f = new Function( 'return ' + v )
        update( f().toString() )
        } catch( _error ){}
     
             
    }

function rihobs()//一文字消す
{
var rihobetext = rihobox.value;
var rihoshort = rihobetext.slice( 0, -1 ) ;
  document. querySelector( 'input' ).value = rihoshort;
}

function rihoreplace() //文字の置き換えをするっす。
{
var rihobe = rihobox.value;
var rihoaf = rihobe.replace('×', '*');
  
 while(rihoaf !== rihobe) {
 
    rihobe = rihobe.replace('×', '*');
    rihoaf = rihoaf.replace('×', '*');
 
}

var rihoaf = rihobe.replace('÷', '/');
while(rihoaf !== rihobe) {
 
    rihobe = rihobe.replace('÷', '/');
    rihoaf = rihoaf.replace('÷', '/');
 
}  
  var rihoaf = rihobe.replace('^', '**');
while(rihoaf !== rihobe) {
 
    rihobe = rihobe.replace('^', '**');
    rihoaf = rihoaf.replace('^', '**');
 
}
document. querySelector( 'input' ).value = rihoaf;

}

document.onkeydown = function(e) { //ショートカットキーだぜ　デュフフ

  switch( e.keyCode )
    {
      case 49://1
        append( '1' );
        break;
      case 50://2
        append( '2' );
        break;
      case 51://3
        append( '3' );
        break;
      case 52://4
        append( '4' );
        break;
      case 53://5
        append( '5' );       
        break;
      case 54://6
        append( '6' );       
        break;
      case 55://7
        append( '7' );       
        break;
      case 56://8
        append( '8' );      
        break; 
      case 57://9
        append( '9' );
        break;
      case 48://0
        append( '0' );     
        break;  
      case 190://.
        append( '.' );    
        break;    
      case 80://足し算
        mmm( '+' );    
        break;         
      case 77://引き算
        mmm( '-' );    
        break;      
      case 84://掛け算
        mmm( '×' );    
        break;      
      case 68://割り算
        mmm( '÷' );    
        break;        
      case 69://累乗
        append( '^' );    
        break;          
      case 82://平方根
        sss( '**0.5' );    
        break;    
      case 13://計算　Enter
        calc( '' );    
        break;           
      case 67://クリア　Ｃ
        update( '' );    
        break;           
      case 8://バックスペース
        rihobs( '' );    
        break;    
    }

}
