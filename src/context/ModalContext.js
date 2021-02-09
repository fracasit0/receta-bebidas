import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

//Crear el context
export const ModalContext = createContext();

// Crear Provider = Donde se encuentran las funciones y el state
const ModalProvider = (props) => {

    //state del provider
    const [idreceta, guardarIdReceta] = useState(null);
    const [informacion, guardarReceta] = useState({})

    //una vez tenemos la receta hacemos una llamado a la API

    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idreceta) return
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const resultado = await axios.get(url);

            guardarReceta(resultado.data.drinks[0]);
        }
        obtenerReceta()
    }, [idreceta])
    

    return (
        <ModalContext.Provider
            value={{
                guardarIdReceta,
                informacion
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;