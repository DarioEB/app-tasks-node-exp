import inquirer from 'inquirer';

import * as q from './questions.js';

const inquirerMenu = async () => {

    console.clear();
    console.log('=========================='.blue)
    console.log('  Seleccione una opción   '.blue)
    console.log('==========================\n'.blue)

    const { option } = await inquirer.prompt(q.questionsMenu);

    return option;
}

const pause = async () => {
    console.log('\n');
    await inquirer.prompt(q.questionPause)
}

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'response',
            message,
            validate(value) {
                if (value.length === 0) {
                    return '¡Por favor ingrese un valor!'
                }
                return true;
            }
        }
    ]

    const { response } = await inquirer.prompt(question);

    return response;
}

const deleteTaskList = async (tasks) => {
    const choices = tasks.map((task, i) => {

        const idx = `${i + 1}.`.blue;

        return {
            value: task.id,
            name: `${idx} ${task.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.blue + ' Cancelar',
    })

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Eliminar',
            choices
        }
    ]
    const { id } = await inquirer.prompt(questions)
    return id;
}

const updateTaskList = async (tasks) => {
    const choices = tasks.map((task, i) => {

        const idx = `${i + 1}.`.blue;

        return {
            value: task.id,
            name: `${idx} ${task.desc}`,
            checked: task.completed ? true : false,
        }
    });

    const questions = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(questions)
    return ids;
}

const deletedConfirm = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question);
    return ok;
}

export {
    deletedConfirm,
    deleteTaskList,
    inquirerMenu,
    pause,
    readInput,
    updateTaskList
}