import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AgregarCategoria = ( { setCategorias } ) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChance = ( e ) => {
        setInputValue(e.target.value );
    }

    const handleSubmit = ( e ) => {
        //Detiene el evento submit del formulario
        e.preventDefault();



        if ( inputValue.trim().length > 2) {
            setCategorias( categorias => [ inputValue, ...categorias] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit } >

            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChance }
                placeholder="Agregar una nueva categoría"
            />

        </form>
    )
}

/* Propiedades del componente */

AgregarCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired,
}