    //Funcion para obtener los gifs
export const getGif = async ( categoria ) => {
    // const q = categoria.replace(/ /g, "+"); //Reemplaza el espacio por +
    const api_key = 'Z8WgsA7q2nC8orx9x7V8b0V7EJZztbxD';
    const limit = 10;
    const base = 'https://api.giphy.com/v1/gifs';
    const url = `${base}/search?q=${ encodeURI( categoria ) }&limit=${limit}&api_key=${api_key}`;
    const resp = await fetch( url ); //Hacemos la peticion
    const { data } = await resp.json(); //Tranformamos la respuesta a json
    // console.log(data);

    const gifs = data.map( (img) => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });
    
    return gifs;
        
}