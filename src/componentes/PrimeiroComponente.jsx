let isLegal = true

export default (props) => 
    <div>
        <h1>{props.valor}</h1>
        <h2>{1 + 1}</h2>
        <p>Legal? {isLegal ? 'sim': 'não'}</p>
        <p>{Math.random()}</p>
    </div>

// export default function () {
//     return(
//         <h1>
//             Primeiro Componente
//         </h1>
//     )
// }

