import React from "react";
//componente de tipo clase
class CardClass extends React.Component{
    //utiliza metodo render para mostrar en pantalla
    render(){
        return(
            <div className="CardItem">
                <div>
                    <img src=""/>
                </div>
                <p>TITULO</p>
                <span>$ 1500</span>
                <button>Detalles</button>
            </div>
        )
    }
}

export default CardClass