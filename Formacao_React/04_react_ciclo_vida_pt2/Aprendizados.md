# Revisar

- Por que não pode usar for/forEach no jsx?
- map (item, index)
- stopPropagation
- arrow function super
---

# Novo

- Extensão simple react plugins
  - imrc (importar)
    -- cc (class componente)
- Console.log no meio do return
  <code>
  return ( 
            <ul>
                {console.log("hey")}
				<div>
					<h4>Trabalho</h4>
				</div>
				<li>
					<CardNota />
				</li>
			</ul>
		);
  </code>
- Importando SVG como componente, se usar o create react app => svgr
 <code>
import { ReactComponent as SVG } from "../../assets/svg.svg";

class Exampls extends Component {
  render() {
    return (
          <SVG />
		  );
  }
}
<code>

Ideias:
Filtrar por categoria
Adicionar data
Ordenar por data
Persistencia
