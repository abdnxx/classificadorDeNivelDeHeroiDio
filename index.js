let heroi = ""
let xp = 1000


switch(true){
    case xp <= 1000:
        heroi = ("Zeus")
        xp = ("ferro")
    break

    case xp >= 1001 && xp <= 2000:
        xp = ("Bronze")
        heroi =("Hera")
    break

    case xp >= 2001 && xp <= 5000:
        xp = ("Prata")
        heroi =("Poseidon")
    break

    case xp >= 5001 && xp <= 7000:
        xp = ("Ouro")
        heroi =("Atena")
    break

    case xp >= 7001 && xp <= 8000:
        xp = ("Platina")
        heroi =("Ares")
    break

    case xp >= 8001 && xp <= 9000:
        xp = ("Ascendente")
        heroi =("Hermes")
    break

    case xp >= 9001 && xp <= 10000:
        xp = ("Imortal")
        heroi =("Hefesto")
    break

    case xp >= 10001:
        xp = ("Raridade")
        heroi =("Apolo")
    break
}


console.log("O Herói de nome " + heroi +  " está no nível de " + xp)