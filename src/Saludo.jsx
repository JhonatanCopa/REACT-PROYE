import './App.css';
function Hola(props){
    return (
        <div className="caja1">
            <div className="texto">
                <h1>Hola soy {props.nombre} </h1>
                <p>Soy de {props.pais}, trabajo y estudio en la {props.uni}</p>
                
            </div>
            <div>
                 <img src={props.img} />
            </div>
        </div> 
      
    );
}
export default Hola;