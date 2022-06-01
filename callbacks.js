


// setTimeout(function(){
//     console.log('Hola mundo');
// }, 1000);



const getUsuarioByID = (id,callback)=>{
    const usuer = {
        id,
        nombre: 'Jorge'
    }
    
    setTimeout(()=>{
        // console.log(usuario)
        callback(usuer)
    },1500)
    
}

getUsuarioByID(10, (usuario)=>{
    console.log('Hola mundo');
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});




