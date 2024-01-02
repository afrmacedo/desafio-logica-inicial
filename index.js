let playerName = "Fabio"
let playerXp = 6031
let playerLevel

switch (true) {
  case playerXp > 0 && playerXp < 1000:
    playerLevel = "Ferro"
    break;

  case playerXp > 1001 && playerXp < 2000:
    playerLevel = "Bronze"
    break
  
  case playerXp > 2001 && playerXp < 5000:
    playerLevel = "Prata"
    break
  
  case playerXp > 5001 && playerXp < 7000:
    playerLevel = "Ouro"
    break
    
  case playerXp > 7001 && playerXp < 8000:
    playerLevel = "Platina"
    break  
 
  case playerXp > 8001 && playerXp < 9000:
    playerLevel = "Ascendente"
    break
    
  case playerXp > 9001 && playerXp < 10000:
    playerLevel = "Imortal"
    break
  
  case playerXp >= 1001:
    playerLevel = "Radiante"
    break

  default:
    playerLevel = "Indefinido"
}

console.log(`O herói de nome ${playerName} está no nível de ${playerLevel}`) 