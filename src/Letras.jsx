export default function Letras(props){
    return (
            <button data-test="letter" key={props.indice} disabled={props.disabled} className={props.classe}> {props.letra}</button>
    )
}