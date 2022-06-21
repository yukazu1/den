
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
        update( f().toString() )
        } catch( _error ){}
          
    } 
       function mmm ( _v)//計算させるっす
    {
       document. querySelector( 'input' ).value = 'Math.round(' + rihobox.value + '*10000 )/10000'
        const v = document. querySelector( 'input' ).value
      try{
        const f = new Function( 'return ' + v )
        update( f().toString() )
        } catch( _error ){}
          
      document. querySelector( 'input' ). value += _v
    
    } 

    function  calc() // 「＝」が押されたので計算する
    {
        document. querySelector( 'input' ).value = 'Math.round(' + rihobox.value + '*10000 )/10000'
      const v = document. querySelector( 'input' ).value
      try{
        const f = new Function( 'return ' + v )
        update( f().toString() )
        } catch( _error ){}
          
        
    }
let rihobox = document.getElementById('rihobox');

function riri()
{
 
    document. querySelector( 'input' ).value = 'Math.round(' + rihobox.value + ')/100'

}
