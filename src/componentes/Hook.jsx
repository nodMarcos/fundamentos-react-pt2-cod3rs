import { useEffect, useState } from "react";

export default props => {
    let [contador, setContador] = useState(100);
    const [status, setParOuImpar] = useState('Par');

    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar')
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h3>{status}</h3>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
            <button onClick={() => setContador(contador - 1)}>Inc</button>

        </div>
    )


}
