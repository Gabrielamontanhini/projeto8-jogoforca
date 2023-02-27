import Letras from "./Letras";
import "./styles/style.css"
import { useState } from "react";
import palavras from "./palavras";
import Jogo from "./Jogo";
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"


function App() {



  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const [letrasClicadas, setLetrasClicadas] = useState([]) //aqui sao todas as letras clicadas
  const [palavraEscolhida, setPalavraEscolhida] = useState("")//aqui é a palavra que foi escolhida
  const [palavraEscondida, setPalavraEscondida] = useState([])//aqui é a palavra mas com underlines
  let [erros, setErros] = useState(0)//aqui é a contagem de erros
  const [resultado, setResultado]=useState("")

  const [disabled, setDisabled]=useState(true)
  
  const forcas = [forca0,forca1,forca2,forca3,forca4,forca5,forca6]
  const [imagemDeErro, setImagemDeErro]=useState(forcas[0])


  function pegarPalavra() {
    setDisabled(false)
    setLetrasClicadas([])
    setErros(0)
    setResultado("")
    setImagemDeErro(forcas[0])
    let palavraPickada = palavras[Math.round(Math.random() * palavras.length)]
    var palavraIncognita = palavraPickada.split('')
    setPalavraEscolhida(palavraIncognita)

    console.log(palavraIncognita)
    let comUnderline = palavraIncognita.map((c) => "_ ")
    setPalavraEscondida(comUnderline)
    console.log(comUnderline)
  }


  /*function verificar(){
    console.log("escolhida",palavraEscolhida.toString());
    console.log("escondida",palavraEscondida.toString())
    if (palavraEscolhida === palavraEscondida){
      alert("deu")
    }
  }*/

  function clicou(letra) {

    const novaArray = [...letrasClicadas, letra]

    setLetrasClicadas(novaArray)


    
    console.log(palavraEscolhida)

    let acertou = 0

    if (palavraEscolhida.includes(letra) == true) {

      for (let i = 0; i < palavraEscolhida.length; i++) {
        if (palavraEscolhida[i] === letra) {
          let nova = palavraEscondida.splice(i, 1, palavraEscolhida[i])
          let acerto = [...palavraEscondida, nova]
          acerto.pop()
          console.log(acerto)
          setPalavraEscondida(acerto)
        for (let i=0; i<palavraEscolhida.length; i++){
          if (palavraEscolhida[i]===palavraEscondida[i]){
            
            acertou = acertou + 1
            console.log(acertou)
            if (acertou === palavraEscolhida.length){
              setResultado("acertada")
            }
          }
        }
        }
      }
    } else {
      let aumentaErro = erros + 1;
    setErros(aumentaErro)
    console.log(aumentaErro);
    setImagemDeErro(forcas[aumentaErro])
    if (aumentaErro === 6){
      
      setPalavraEscondida(palavraEscolhida)
      setResultado("errada")
    }
    }
  }


  return (
    <div className="App">
      < Jogo
        funsao={pegarPalavra}
        palavra={palavraEscondida}
        classedela={resultado}
        img={imagemDeErro}
      />




      <footer>
        <div className="painel">




          {alfabeto.map((l, i) =>
            <div className={`letra `} 
              onClick={() => clicou(l)}>
              < Letras disabled= {(letrasClicadas.includes(l)) ? true : disabled} letra={l} indice={i} />
            </div>
          )}



        </div>
      </footer>
    </div>
  );
}

export default App;
