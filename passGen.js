  let words="asdfghjklşizxcvbnmöçqwertyuıopğü"
  let nums="0987654321"

function getPassword(length,hasNums){
    let base=words;
    
    let password = "";

    hasNums ? base+=nums :"";

    for (let i=0;i<length;i++){
        password += base.charAt(Math.floor(Math.random()*base.length))
    }

    console.log(password)
}


getPassword(12,true)