

export default function Jogo(props){

    return (
        <main className="flex">
          <div className="forca"> 
            <img data-test="game-image" src={props.img}/>
          </div>
        <div className="direita">
          <button data-test="choose-word" onClick={props.funsao}><p>Escolher Palavra</p></button>
          <div><h2 className={props.classedela} data-test="word"> {props.palavra}</h2></div>
        
        </div>
      </main>
    )
}