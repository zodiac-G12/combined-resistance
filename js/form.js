function comR(array, len){
  var sum = array[0];
  var i = 1;

  while(i < len){
    sum = sum*(array[i])/(sum+(array[i]));
    i = (i+1)|0;
  }

  return sum;
}

function comL(array, len){
  var sum = 0;
  var i = 0;

  while(i < len){
    sum = sum+array[i];
    i = (i+1)|0;
  }

  return sum;
}

function cali(){
  var str = document.getElementById("cal").value;
  var answer = "";

  if((/[^+\.\s0-9,]|\.{2,}|,{2,}|\+{2,}/).test(str)){
    answer = "input error.";
  }else{
    var array = str.replace(/\s/g, "").split(",");
    console.log(array);
    var len = array.length;
    var i = 0;
    while(i < len){
      if(!isFinite(array[i])){
        answer = "input error.";
        break;
   	  }else{
        if(array[i] != String(Number(array[i]))){
          answer = "input error.";
          break;
        }else{
          array[i] = Number(array[i]);
          i = (i+1)|0;
        }
   	  }
    }
    if(i == len){
      if(document.getElementById("switch").value) answer = String(comR(array, array.length)) + "[Ω]";
      else answer = String(comL(array, array.length)) + "[Ω]";
    }
  }

  document.getElementById("answer").innerHTML = answer;
}

