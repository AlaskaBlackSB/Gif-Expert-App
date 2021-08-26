import React from 'react'
import { useState } from 'react/cjs/react.development';
import { AgregarCategoria } from './componentes/AgregarCategoria';
import { GifGrid } from './componentes/GifGrid';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState( ['One Punch'] );

    // const handleAdd = (categoria) => {
    //     //Agrega una nueva categoria
    //     setCategorias( [...categorias, 'categoria'] );
    // };

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AgregarCategoria setCategorias={ setCategorias } />       
            <hr/>
            
            <ol>
                { 
                    categorias.map( (categoria) => 
                        <GifGrid
                            key = {categoria}
                            categoria = {categoria}
                        />
                    ) 
                }
            </ol>
        </div>
    );
}

export default GifExpertApp;
