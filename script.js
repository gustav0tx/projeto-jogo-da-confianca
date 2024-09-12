let p1 = prompt('Qual o nome do jogador 1?')
let p2 = prompt('Qual o nome do jogador 2?')
alert(`Bem-vindo ao jogo da confiança: O jogo funciona da seguinte forma
Os jogadores teram duas opções , dividir ou roubar , se os dois dividirem ganham 10 pontos se os dois roubarem perdem 30 pontos ,
se somente um roubar o ladrão ganha 20 pontos`)
alert('aperte 1 para roubar e 0 para dividir\nGANHA QUEM TIVER MAIS PONTOS')
let game = confirm('vamos começar')
while (game == true) {
let jgP1 = parseInt(prompt('Faça sua jogada Player1'))
let jgP2 = parseInt(prompt('Faça sua jogada Player2'))
switch(jgP1) {
  case 0:
    alert('dividiu')
  case 1:
    alert('roubou')
  default:
    alert('ERRO')    
}
switch(jgP2) {
  case 0:
    alert('dividiu')
  case 1:
    alert('roubou')
  default:
    alert('ERRO')    
}
if ()
break}

