import colors from 'colors';

export const questionsMenu = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.cyan} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.cyan} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.cyan} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.cyan} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.cyan} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.cyan} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.cyan} Salir`
            }
        ]
    }
]

export const questionPause = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${'enter'.blue} para continuar`
    }
]
