import {
    deleteTaskList,
    inquirerMenu,
    pause,
    readInput,
    deletedConfirm,
    updateTaskList,
} from './helpers/inquirer.js';

import { readDB, saveDB } from './helpers/saveFile.js';

import Tasks from './models/tasks.js';

const main = async () => {
    let opt = '';
    const tasks = new Tasks();

    const tasksDB = readDB();

    if (tasksDB) {
        tasks.setTasksFromArray(tasksDB);
    }

    do {
        // Imprimir el menú
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Crear tarea
                const response = await readInput('Descripción:');
                tasks.createTask(response);
                break;

            case '2':
                tasks.listTasksPendingComplete();
                break;

            case '3':
                tasks.listTasksPendingComplete('completed')
                break;

            case '4':
                tasks.listTasksPendingComplete('pending')
                break;

            case '5':
                const ids = await updateTaskList(tasks.arrayList);
                tasks.toggleTasks(ids);
                break;

            case '6':
                const id = await deleteTaskList(tasks.arrayList);
                if (id !== '0') {
                    const ok = await deletedConfirm('¿Estás seguro de eliminar esta tarea?');

                    if (ok) {
                        tasks.deleteTask(id);
                    }
                }

                break;
        }

        saveDB(JSON.stringify(tasks.arrayList))

        await pause();
    } while (opt !== '0');
}

main();