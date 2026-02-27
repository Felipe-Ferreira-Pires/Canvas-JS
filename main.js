const canvas = document.getElementById ("meuCanvas")
const ctx = canvas.getContext("2d")

//const cor = document.getElementById ("corAtual")
const espessura = document.getElementById ("espessura")
const limpar = document.getElementById ("limpar")
const desfazer = document.getElementById ("desfazer")
const salvar = document.getElementById ("salvar")

const lápis = document.getElementById ("livre").onclick = () => modo = "livre"
const x = document.getElementById ("x").onclick = () => modo = "x"
const linha = document.getElementById ("linha").onclick = () => modo = "linha"
const circulo = document.getElementById ("circulo").onclick = () => modo = "circulo"
const borracha = document.getElementById ("borracha").onclick = () => modo = "borracha"
const quadrado = document.getElementById ("quadrado").onclick = () => modo = "quadrado"

let desenhando = false

let modo = "livre"


let xInicio = 0, yInicio =0


canvas.addEventListener("mousedown", (e) =>{
    desenhando = true;
    xInicio = e.offsetX;
    yInicio = e.offsetY;

    
    ctx.beginPath();
    ctx.moveTo(xInicio, yInicio);
    
    if (modo == "livre" || modo == "borracha") {
        ctx.beginPath();
        ctx.moveTo(xInicio, yInicio);
        
    }
    
    console.log (modo)
})


canvas.addEventListener("mousemove", (e) => {
    if (!desenhando)return
        
     const xAtual = e.offsetX 
     const yAtual = e.offsetY

    if (modo === "livre") {
        ctx.strokeStyle = corAtual;
        ctx.lineWidth = espessura.value;
        ctx.lineTo(xAtual,yAtual)
        ctx.stroke()
    }

    if (modo === "borracha") {
        ctx.strokeStyle = "white"
        ctx.lineWidth = espessura.value;
        ctx.lineTo(xAtual,yAtual)
        ctx.stroke()
    }
})




canvas.addEventListener("mouseup", (e) => {
    desenhando=false

    const xFim = e.offsetX;
    const yFim = e.offsetY;

    const largura = xFim - xInicio
    const altura = yFim - yInicio

    ctx.strokeStyle = corAtual;
    ctx.fillStyle = corAtual;
    ctx.lineWidth = espessura.value;

    console.log (modo)
})


function ajustarCanvas () {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height
}

ajustarCanvas()
window.addEventListener("resize",ajustarCanvas)


// COLOR PICKER //

let corAtual = '#000000';

const pickr = Pickr.create({
  el: '#corPicker',
  theme: 'classic', // grande e confortável
  default: '#000000',

  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: true,
      rgba: true,
      input: true,
      save: true
    }
  }
});

pickr.on('change', (color) => {
  corAtual = color.toHEXA().toString();
});


