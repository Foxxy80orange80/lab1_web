// Валидация данных
// https://monsterlessons.com/project/lessons/validaciya-formy-v-javascript  ---- вдохновлялся этим
//////////////////////////////////////////////////////работает

// function validate(){
//     const R=document.getElementById("R");
//     const y=document.getElementById("y");

    
//     if(R.value>=2 && R.value<=5 &&  !isNaN(R.value) ){
//         R.style.border ="2px solid green";
//     }
//     else{
//         R.style.border ="2px solid red";
//         if(y.value>=-5 && y.value<=5 &&  !isNaN(y.value)){
//             y.style.border ="2px solid green";
//         }
//         else{
//             y.style.border ="2px solid red";
//             return false;
//         }
//         return false;
//     }

//     if(y.value>=-5 && y.value<=5 &&  !isNaN(y.value)){
//         y.style.border ="2px solid green";
//     }
//     else{
//         y.style.border ="2px solid red";
//         return false;
//     }

//     return true;
// }


var form= document.querySelector('.validate_form');
var validatedButton = document.querySelector('.validate_button');
var yCoordinate = document.querySelector(".y");
var rCoordinate = document.querySelector(".R");
var fields = document.querySelectorAll('.field');



//функция для генерации ошибок
var generateTip = function (text, color) { 
    var tip = document.createElement('div');
    tip.className = 'tip';
    tip.style.color = color;
    tip.innerHTML = text;
    return tip;
}

//функция для очистки ошибок при повторной валидации 
var removeValidation = function () {
    var tips = form.querySelectorAll('.tip')
    
    for (var i = 0; i < tips.length; i++) {
        tips[i].remove()
    }
  }

//функция для проверки наличия значений в полях
var checkFieldsPresence = function () {
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        console.log('field is blank', fields[i])
        var error = generateTip('Поле не может быть пустым','red')
        fields[i].parentElement.insertBefore(error, fields[i])
      }
    }
  }

// var checkYRange = function(coordinate){
//     if((coordinate.value<-5 || coordinate.value>5 || isNaN(coordinate.value))&&coordinate.value ){
//         var error = generateError('Не удовлетворяет условию')
//         coordinate.parentElement.insertBefore(error, coordinate)
//     }
// }

// var checkRRange = function(coordinate){
//     if((coordinate.value<2 || coordinate.value>5 || isNaN(coordinate.value))&&coordinate.value){
//         var error = generateError('Не удовлетворяет условию')
//         coordinate.parentElement.insertBefore(error, coordinate)
//     }
// }

var validateField = function(coordinate,min,max){
    if(coordinate.value){

        if((coordinate.value<min || coordinate.value>max || isNaN(coordinate.value))){
            var error = generateTip('Неверные данные ','red')
            coordinate.parentElement.insertBefore(error, coordinate)
        }
        else{
            var correct = generateTip('Все верно','green');
            coordinate.parentElement.insertBefore(correct, coordinate)
        }
    }

}


form.addEventListener("submit", function(event) {

    event.preventDefault(); 

    // console.log("Циферки упали на проверочку =)" );

    // console.log('y: ', yCoordinate.value);
    // console.log('R: ', rCoordinate.value);

    removeValidation();

    checkFieldsPresence();

    validateField(yCoordinate,-5,5);
    validateField(rCoordinate,2,5);

    // checkYRange(yCoordinate);
    // checkRRange(rCoordinate);

})



