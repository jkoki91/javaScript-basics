


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


const getEmpleado = ( id ) => {

    const empleado = empleados.find ( (e)=> e.id === id)
    if(empleado){
        return empleado
    }else{
        return `Empleado con id ${ id } no existe`
    }

}

console.log(getEmpleado(5))