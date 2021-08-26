import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';

export const GifGrid = ( { categoria } ) => {

    const { data:imagenes, loading} = useFetchGifs( categoria );

    return (
        <section>
            <h3> {categoria} </h3>

            {loading && <img src="http://www.gifde.com/gif/otros/decoracion/cargando-loading/cargando-loading-026.gif" alt="loading"/>}

            <div className="card-grid">
                {
                    imagenes.map( ( img ) => 
                        <GifGridItem 
                            key={img.id} 
                            { ...img }
                        /> )
                }
            </div>

        </section>
    )
}
