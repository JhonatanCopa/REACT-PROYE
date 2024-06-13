import './App.css';
function Dos(propss){
    return (
        <div className="caja2">
            <div className="text">
                <h1> {propss.tema} </h1>
                <ul>
                    <li>{propss.uno}</li>
                    <li>{propss.dos}</li>
                    <li>{propss.tres}</li>
                    <li>{propss.cuatro}</li>
                </ul>
            </div>
        </div> 
      
    );
}
export default Dos;