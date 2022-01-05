import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeiroComponente from './componentes/PrimeiroComponente';
// import CompA, { CompB as B} from './componentes/DoisComponentes';
// import Familia from './componentes/Familia';
// import Membro from './componentes/Membro';
// import MultiElementos from './componentes/MultiElementos';
// import FamiliaSilva from './componentes/FamiliaSilva';
// import ComponenteComFuncao from './componentes/ComponenteComFuncao';
// import Pai from './componentes/Pai';
// import ComponenteClasse from './componentes/ComponenteClasse';
import Hook from './componentes/Hook';
const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Hook />
        {/*<ComponenteComFuncao />
        <ComponenteClasse valor='Sou um componente' />
        <Familia sobrenome="Johnson">
            <Membro  nome='Alberto'/>
            <Membro  nome='Gilberto'/>
        </Familia>
         <FamiliaSilva />
        <CompA value='Jorge'/>
        <B value='Alberto'/>
        <MultiElementos />
        <PrimeiroComponente valor='ALOOOOOOOOOO'/>*/}
    </div>
, elemento);