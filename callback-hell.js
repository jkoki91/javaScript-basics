


const empleados = [
    {
        id:1,
        nombre: 'Jorge'
    },
    {
        id:2,
        nombre: 'Jorgelina'
    },
    {
        id:3,
        nombre: 'Maca'
    }
];

const salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 1500
    }
];


const getEmpleado = ( id, callback ) => {

    const empleado = empleados.find ( (e)=> e.id === id)
    if(empleado){
        // return empleado
        callback(null, empleado)
    }else{
        callback(`Empleado con id ${ id } no existe`)
        // return `Empleado con id ${ id } no existe`
    }

}

getEmpleado(12, (err,empleado)=>{  
    if(err){
        console.log('Error!!!')
        return console.log(err)
    }
    console.log('Empleado existe')
    console.log(empleado)

})