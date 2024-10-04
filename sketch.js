 let xBolinha = 360;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
https://github.com/vitoria4545/p5js.git
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOponente();
  movimentaRaqueteOponente();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete (x, y) {
  rect( x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete () {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete (){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete ) {
      velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente () {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento/2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

function verificaColisaoRaqueteOponente (){
  if (xBolinha + raio > xRaqueteOponente + raqueteComprimento -10  ) {
      velocidadeXBolinha *= -1;
  }
}
