import readline from 'readline';

const menu = () => {

    return new Promise( resolve => {
        console.clear();
        console.log('==========================')
        console.log('  Seleccione una opción   ')
        console.log('==========================\n')
    
        console.log(`${ '1.' } Crear la tarea`);
        console.log(`${ '2.' } Listar tareas`);
        console.log(`${ '3.' } Listar tareas completadas`);
        console.log(`${ '4.' } Listar tareas pendientes`);
        console.log(`${ '5.' } Completar tarea(s)`);
        console.log(`${ '6.' } Borrar tarea`);
        console.log(`${ '0.' } Salir \n`);
    
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question('Seleccione una opción: ', (opt) => {
            rl.close();

            resolve(opt);
        });
    });

    

}

const pause = () => {
    return new Promise( resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question(`\nPresione ${'ENTER'}\n`, (opt) => {
            
            rl.close();
            resolve( );
        });
    })
}

module.exports = {
    menu,
    pause
}