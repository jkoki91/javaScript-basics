const empleados = [
    {
        id: 1,
        nombre: 'Jorge'
    },
    {
        id: 2,
        nombre: 'Jorgelina'
    },
    {
        id: 3,
        nombre: 'Maca'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


const getEmpleado = ( id ) => {

    return new Promise( ( resolve, reject ) => {

        const empleado = empleados.find((e) => e.id === id)?.nombre;

        empleado ? resolve( empleado ) : reject(`No existe el empleado con id ${id}`);
    
    });
};

const getSalario = ( id ) => {

    return new Promise( ( resolve, reject ) => {

        const salario = salarios.find( s => s.id === id)?.salario;

        salario ? resolve( salario ) : reject(`No existe el empleado con id ${id}`);
    
    });
};

const id = 11;

const getInfoUsuario = async ( id ) => {

    try {
        const empleado = await getEmpleado( id )
        const salario = await getSalario( id )
        return `El salario del empleado ${empleado} es de ${salario}`;
    } catch (error) {
        // return error // return es por si sale bien, dispararia el .then no el catch
        throw error
    }

};

getInfoUsuario( id )
    .then( msg => {
        console.log('Todo bien!!');
        console.log(msg);
    } )
    .catch( error =>{
        console.log('Todo mal!!');
        console.log(error);
    })








