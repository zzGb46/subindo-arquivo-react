
import './App.css';
import PrimeiroComponente from './componentes/PrimeiroComponente';
// 3 Importando
import TemplateExpressions from './componentes/TemplateExpressions';

//6 Importando hierarquia de componentes
import HierarquiaComponente from './componentes/HierarquiaComponente';

//6 Importando Evento de click
import EventoClick from './componentes/EventoClick';
function App() {
 
// 2 Exibindo componente impotado na tela
  return (
    <div><h2>PrimeiroComponente</h2>
    <PrimeiroComponente/>
    <TemplateExpressions/>
    <HierarquiaComponente/>
    <EventoClick/>
    </div>
  )
}

export default App;
