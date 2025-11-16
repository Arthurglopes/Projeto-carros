var white_car = document.getElementById("white");
var red_car = document.getElementById("red");
var reset = document.getElementById("resetar")
var acel = document.getElementById("acelerar")
var desacel = document.getElementById("desacelerar")
var selecionado = document.getElementById("result")
var btns_view = document.getElementsByClassName("btn"); // pra mudar se os botoes no fim da pagina vao ser exibidos ou ocultos
var circlered = document.getElementById("vermelho")
var circlewhite = document.getElementById("branco")

var carRedRight = parseInt(window.getComputedStyle(red_car).right);
var carRedTop = parseInt(window.getComputedStyle(red_car).top);
var carRedWidth = parseInt(window.getComputedStyle(red_car).width);
var carRedHeight = parseInt(window.getComputedStyle(red_car).height);

var carWhiteLeft = parseInt(window.getComputedStyle(white_car).left);
var carWhiteTop = parseInt(window.getComputedStyle(white_car).top);
var carWhiteWidth = parseInt(window.getComputedStyle(white_car).width);
var carWhiteHeight = parseInt(window.getComputedStyle(white_car).height);


red_car.addEventListener('click', function () {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
    for (i = 0; i <= 2; i++) {
        btns_view[i].style.display = "block";
    }
    selecionado.innerHTML = "Vermelho"
});

circlered.addEventListener('click', function () {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
    for (i = 0; i <= 2; i++) {
        btns_view[i].style.display = "block";
    }
    selecionado.innerHTML = "Vermelho"
});

white_car.addEventListener('click', function () {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    for (i = 0; i <= 2; i++) {
        btns_view[i].style.display = "block";
    }
    selecionado.innerHTML = "Branco"
})

circlewhite.addEventListener('click', function () {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    for (i = 0; i <= 2; i++) {
        btns_view[i].style.display = "block";
    }
    selecionado.innerHTML = "Branco"
})

reset.addEventListener('click', function () {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    for (i = 0; i <= 2; i++) {
        btns_view[i].style.display = "none";
    }
    selecionado.innerHTML = "?"
    carRedHeight=50
    carRedRight=205
    carRedTop=60
    carRedWidth=50
    red_car.style.height = carRedHeight+"px"
    red_car.style.right = carRedRight+"px"
    red_car.style.top = carRedTop+"px"
    red_car.style.width = carRedWidth+"px"
    
    carWhiteHeight=50
    carWhiteLeft=205
    carWhiteTop=60
    carWhiteWidth=50
    white_carwhite_car.style.height = carWhiteHeight+"px"
    white_carhite_car.style.right = carWhiteRight+"px"
    white_car.style.top = carWhiteTop+"px"
    white_car.style.width = carWhiteWidth+"px"
})

acel.addEventListener('click', function(){
    speed()
})
document.addEventListener('keydown', function(event){
    console.log(event.key)
    if(event.key == "ArrowUp"){
        speed()
    } 
})

desacel.addEventListener('click', function(){
    slow()
})
document.addEventListener('keydown', function(event){
    console.log(event.key)
        if(event.key == "ArrowDown"){
        slow()
    } 
})


function speed(){
    if (selecionado.innerHTML == "Vermelho") {
        if(carRedTop>=40){
            carRedHeight=carRedHeight-1
            carRedRight=carRedRight+1
            carRedTop=carRedTop-1
            carRedWidth=carRedWidth-1
            red_car.style.height = carRedHeight+"px"
            red_car.style.right = carRedRight+"px"
            red_car.style.top = carRedTop+"px"
            red_car.style.width = carRedWidth+"px"
        }
    }
    else if (selecionado.innerHTML == "Branco") {
        console.log('branco')
        if(carWhiteTop>=40){
            carWhiteHeight=carWhiteHeight-1
            carWhiteLeft=carWhiteLeft+1
            carWhiteTop=carWhiteTop-1
            carWhiteWidth=carWhiteWidth-1
            white_car.style.height = carWhiteHeight+"px"
            white_car.style.left = carWhiteLeft+"px"
            white_car.style.top = carWhiteTop+"px"
            white_car.style.width = carWhiteWidth+"px"
        }
    }
}

function slow(){
    if (selecionado.innerHTML == "Vermelho") {
        if(carRedTop<=60){
        carRedHeight=carRedHeight+1
        carRedRight=carRedRight-1
        carRedTop=carRedTop+1
        carRedWidth=carRedWidth+1
        red_car.style.height = carRedHeight+"px"
        red_car.style.right = carRedRight+"px"
        red_car.style.top = carRedTop+"px"
        red_car.style.width = carRedWidth+"px"
        }
    }
    else if (selecionado.innerHTML == "Branco") {
            if(carWhiteTop<=60){
            carWhiteHeight=carWhiteHeight+1
            carWhiteLeft=carWhiteLeft-1
            carWhiteTop=carWhiteTop+1
            carWhiteWidth=carWhiteWidth+1
            white_car.style.height = carWhiteHeight+"px"
            white_car.style.left = carWhiteLeft+"px"
            white_car.style.top = carWhiteTop+"px"
            white_car.style.width = carWhiteWidth+"px"
        }
    }
    else{

    }
}
