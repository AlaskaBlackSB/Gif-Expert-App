import { useEffect, useState } from "react/cjs/react.development"
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = ( categoria ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    //Ejecuta solo la primera vez que renderiza el hook
    useEffect( ()=>{

        //Obtenemos los gifs
        getGif( categoria )
            .then( imgs => {

                //Actualizamos el estado con los gifs obtenidos
                setState({
                    data: imgs,
                    loading: false,
                });

            });

    }, [categoria]);



    return state;
}