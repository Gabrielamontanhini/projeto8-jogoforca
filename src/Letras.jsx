export default function Letras(props){
    return (
            <button key={props.indice} disabled={props.disabled} className={props.classe}> {props.letra}</button>
    )
}