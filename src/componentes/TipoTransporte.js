import React from "react";
import PreciosTransporte from "./PreciosTransporte";

const TipoTransporte=()=>(
    <div className="tipotransporte">
        <div>
            <h2>tipos de transporte</h2>
        </div>
        <div>
           
        </div>
        <div>
            <PreciosTransporte nombre="Terrestre">/></PreciosTransporte>
            <PreciosTransporte nombre="Aereo" ></PreciosTransporte>
            <PreciosTransporte nombre="Maritimo" ></PreciosTransporte>
     
        </div>
    
    </div>
    
);
export default TipoTransporte; 