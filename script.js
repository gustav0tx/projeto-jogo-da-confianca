let p1 = prompt('Qual o nome do jogador 1?')
let p2 = prompt('Qual o nome do jogador 2?')
let pontP1 = 0
let pontP2 = 0
alert(`Bem-vindo ao jogo da confiança: O jogo funciona da seguinte forma
Os jogadores teram duas opções , dividir ou roubar , se os dois dividirem ganham 10 pontos se os dois roubarem perdem 30 pontos ,
se somente um roubar o ladrão ganha 20 pontos se os dois roubarem serão tirados 20 pontos`)
alert('aperte 1 para roubar e 0 para dividir\nGANHA QUEM TIVER MAIS PONTOS')
let game = confirm('vamos começar')
for(let count = 0 ; game !== false ; count++) {
  let jgP1 = parseInt(prompt(`Faça sua jogada ${p1}`))
  let jgP2 = parseInt(prompt(`Faça sua jogada ${p2}`))
  if (jgP1 + jgP2 == 0 ) {
    switch(jgP1) {
      case 0:
        alert('dividiu')
        break
      case 1:
        alert('roubou')
        break
      default:
        alert('ERRO')
        break    
    }
    switch(jgP2) {
      case 0:
        alert('dividiu')
        break
      case 1:
        alert('roubou')
        break
      default:
        alert('ERRO')
        break    
    }
    alert('Os dois dividiram 10 pontos para cada!')
    pontP1 += 10
    pontP2 += 10
  } else if (jgP1 + jgP2 == 1 && jgP1 == 1) {
    switch(jgP1) {
      case 0:
        alert('dividiu')
        break
      case 1:
        alert('roubou')
        break
      default:
        alert('ERRO')
        break    
    }
    switch(jgP2) {
      case 0:
        alert('dividiu')
        break
      case 1:
        alert('roubou')
        break
      default:
        alert('ERRO')
        break    
    }
    alert(`O ${p1} roubou o ${p2} 20 pontos ao ${p1}`)
    pontP1 += 20
  } else if (jgP2 + jgP1 == 1 && jgP2 == 1) {
    switch(jgP1) {
      case 0:
        alert('dividiu')
        break
      case 1:
        alert('roubou')
        break
      default:
        alert('ERRO')
        break    
    }
    switch(jgP2) {
      case 0:
        alert('dividiu')
        break
      case 1:
        alert('roubou')
        break
      default:
        alert('ERRO')
        break    
    }
    alert(`O ${p2} roubou o ${p1} 20 pontos ao ${p2}`)
    pontP2 += 20
  } else if (jgP1 + jgP2 == 2 && jgP1 == 1 && jgP2 == 1) {
    switch(jgP1) {
      case 0:
        alert('dividiu')
        break
      case 1:
        alert('roubou')
        break
      default:
        alert('ERRO')
        break    
    }
    switch(jgP2) {
      case 0:
        alert('dividiu')
        break
      case 1:
        alert('roubou')
        break
      default:
        alert('ERRO')
        break    
    }
    alert('Os dois roubaram -20 pontos a cada')
    pontP1 -=20
    pontP2 -=20
  }
    if (count == 5) {
      game = confirm('Quer continuar jogando?')
      count -= 5
  }
}
let score = confirm('Quer ver o placar?')
while (score == true) {
  alert(`O ${p1} tem ${pontP1} pontos\nO ${p2} tem ${pontP2} pontos`)
  score = confirm('Quer ver de novo?')
}
let victory = false
do {
  if (pontP1 > pontP2) {
    alert(`O ${p1} GANHOU!!!!!`)  
  } else if (pontP2 > pontP1) {
    alert(`O ${p2} GANHOU!!!!! `)
  } else {
    alert('EMPATE')
  }
} while (victory == true)
