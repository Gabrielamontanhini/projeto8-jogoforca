

export default function Jogo(props){

    return (
        <main className="flex">
          <div className="forca"> 
            <img src={props.img}/>
          </div>
        <div className="direita">
          <button onClick={props.funsao}><p>Escolher Palavra</p></button>
          <div><h2 className={props.classedela}> {props.palavra}</h2></div>
        
        </div>
      </main>
    )
}