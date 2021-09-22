$(document).ready(function(){
  //targeting text area
var txtbox = document.getElementById('txtArea');
 //adding event to the targeted textarea
txtbox.addEventListener('input',function(){
  var str=this.value;                //storing input text
  var len= str.length;              //calculating length of string
  str = str.replace(/(^\s*)|(\s*$)/gi,"");   //exclude  start and end white-space
  str = str.replace(/[ ]{2,}/gi," ");        //2 or more space to 1
  str = str.replace(/\n /,"\n");             //exclude newline with a start spacing
  var count= str.split(/[\s]+/).length;     //calculating no. of word
  if(len==0)
  var newStr=  "0 word  "+len+" character";
  else if(count ==1 )
  {
    if(len==1)
      var newStr= count + " word  "+len+" character";
    else
    var newStr= count + " word  "+len+" characters";
  }
  else
  var newStr= count + " words  "+len+" characters";
 // console.log(len);
  $('#first-child p').text( newStr);        // displaying to the target
})
})