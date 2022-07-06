// Валидация данных

//////////////////////////////////////////////////////работает

function validate(){
    const R=document.getElementById("R");
    const y=document.getElementById("y");

    
    if(R.value>=2 && R.value<=5 &&  !isNaN(R.value) ){
        R.style.border ="2px solid green";
    }
    else{
        R.style.border ="2px solid red";
        if(y.value>=-5 && y.value<=5 &&  !isNaN(y.value)){
            y.style.border ="2px solid green";
        }
        else{
            y.style.border ="2px solid red";
            return false;
        }
        return false;
    }

    if(y.value>=-5 && y.value<=5 &&  !isNaN(y.value)){
        y.style.border ="2px solid green";
    }
    else{
        y.style.border ="2px solid red";
        return false;
    }

    return true;
}

