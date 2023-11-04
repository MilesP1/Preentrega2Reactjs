import { useState } from "react";
import "./ItemCount.css";


const ItemCount = (item)=>{
    
        const [cantidad, setCantidad] = useState(0);
        
        const handleResta = () => {
            cantidad > 0 && setCantidad(cantidad -1)
        }
        const handleSuma = () => {
           cantidad < item.stock &&  setCantidad(cantidad + 1)
        }
        const handleAgregar = () => {
            console.log({...item, cantidad})
        }

    return (

        <div className="Counter">
            <div className="Controls">
                <button className="Button " onClick={ handleResta }>-</button>
                <h4 className="Number">{cantidad}</h4>
                <button className="Button " onClick={handleSuma}>+</button>
            </div>
            <div>
                <button className="Button" onClick={handleAgregar}>Agregar al carrito!</button>
            </div>
        </div>
    )
    }

export default ItemCount;