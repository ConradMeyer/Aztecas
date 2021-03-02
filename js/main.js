// CREAMOS UNA CLASE GENERAL: GUERRERO
class Warrior {
    constructor(life, power, name){
        this.life = life
        this.power = power
        this.name = name
    }

    getAttack() {
        return this.power
    }

    getDefend(damage){
        return this.life -= damage
    }
}

// CREAMOS UNA NUEVA CLASE, LOS MAYAS, DESCENDIENTE DE GUERRERO
class Maya extends Warrior {
    constructor(life, power, name){
        super(life, power, name)
    }

    drinkColacao(){
        return this.power += 10
    }
}

// CREAMOS UNA NUEVA CLASE, LOS AZTECAS, DESCENDIENTE DE GUERRERO
class Azteca extends Warrior {
    constructor(life, power, name){
        super(life, power, name)
    }

    drinkNesquik(){
        return this.life += 10
    }
}

// CREAMOS UN AZTECA Y UN MAYA CON SUS PARAMETROS
const Jug1 = new Maya(100, 10, "Luis");

const Jug2 = new Azteca(100, 20, "Coni");


// CREAMOS LAS BARRAS DE VIDA Y POWER
let life1 = document.getElementById("life1").style.width = "100%";
let power1 = document.getElementById("power1").style.width = "10%";

let life2 = document.getElementById("life2").style.width = "100%";
let power2 = document.getElementById("power2").style.width = "20%";

// BOTONES DE LUCHAR Y REINICIO
let btn = document.getElementById("btn").addEventListener("click", () => fight())
let btn2 = document.getElementById("btn2").addEventListener("click", () => window.location.reload())

// FUNCION DE LUCHA (con set interval, intentar meter promesas)
function fight () {
    var id = setInterval(
        () => {
            if (Jug1.life > 0 && Jug2.life > 0) {
            let num = Math.round(Math.random()*10)
            let move = document.getElementById("move")

            if (num > 5){
                move.classList.remove("ataque")
                move.classList.remove("defensa")
                Jug1.drinkColacao();
                let power = document.getElementById("power1")
                let width = power.style.width.slice(0, -1)
                let num = parseFloat(width)
                let num2 = num + 10;
                let string = num2.toString()
                power.style.width = string + "%";
                defend()
                winner()
            } else {
                move.classList.remove("defensa")
                move.classList.remove("ataque")
                Jug2.getDefend(Jug1.getAttack());
                let life2 = document.getElementById("life2")
                let width = life2.style.width.slice(0, -1)
                let num = parseFloat(width)
                let num2 = num - Jug1.power;
                let string = num2.toString()
                life2.style.width = string + "%";
                attack()
                winner()
            }
        } else {
            clearInterval(id)

        }}, 2500
    )

    var id2 = setInterval(
        () => {
            if (Jug1.life > 0 && Jug2.life > 0){
            let num = Math.round(Math.random()*10)
            let move = document.getElementById("move2")
            
            if (num > 5){
                move.classList.remove("defensa")
                move.classList.remove("ataque2")
                Jug2.drinkNesquik(); 
                let life2 = document.getElementById("life2")
                let width = life2.style.width.slice(0, -1)
                let num = parseFloat(width)
                let num2 = num + 10;
                let string = num2.toString()
                life2.style.width = string + "%";
                defend2()
                winner()
            } else {
                move.classList.remove("defensa")
                move.classList.remove("ataque2")
                Jug1.getDefend(Jug2.getAttack());
                let life1 = document.getElementById("life1")
                let width = life1.style.width.slice(0, -1)
                let num = parseFloat(width)
                let num2 = num - Jug2.power;
                let string = num2.toString()
                life1.style.width = string + "%";
                attack2()
                winner()
            }
        } else {
            clearInterval(id2)
        }
        console.log(Jug1);
        console.log(Jug2);
        }, 2500
    )
}

// FUNCION PARA SABER EL GANADOR (en vez de meter un alert crear una ventana informando del ganador)
function winner(){
if (Jug1.life <= 0){
    let life1 = document.getElementById("life1")
    life1.style.width = "0%";
    setTimeout ( 
        ()=> window.alert("AZTECA WIN"),
        2000
    )
} else if (Jug2.life <= 0) {
    let life2 = document.getElementById("life2")
    life2.style.width = "0%";
    setTimeout ( 
        ()=> window.alert("MAYA WIN"),
        2000
    )
}}

// FUNCIONES DE ATAQUE
function attack(){
    let move = document.getElementById("move")
    move.classList.add("ataque")
    
}
function attack2(){
    let move = document.getElementById("move2")
    move.classList.add("ataque2")
    
}

// FUNCIONES DE DEFENSA
function defend(){
    let move = document.getElementById("move")
    move.classList.add("defensa")
    
}
function defend2(){
    let move = document.getElementById("move2")
    move.classList.add("defensa")
    
}