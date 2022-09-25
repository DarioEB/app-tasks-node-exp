import Task from './task.js';

class Tasks {

    _list = {};

    get arrayList() {
        const listTasks = [];

        Object.keys( this._list ).forEach( key => {
            listTasks.push( this._list[key] );
        })

        return listTasks;
    }

    constructor() {
        this._list = {};
    }

    setTasksFromArray( tasks = [] ) {
        for (const task of tasks) {
            this._list[task.id] = task;
        }
    }

    createTask( desc = '' ) {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    listTasksPendingComplete( type = '' ) {
        let tasksArray = []
        if(type) {
            Object.keys( this._list ).forEach( (key, index) => {
                if( type === 'completed' && this._list[key].completed ) {
                    tasksArray.push( this._list[key]  )
                } else if( type === 'pending' && !this._list[key].completed ) {
                    tasksArray.push( this._list[key] );
                }
            });
            return this.printList( tasksArray );
        }
        Object.keys( this._list ).forEach( (key) => {
            tasksArray.push( this._list[key] );
        })
        this.printList( tasksArray );
    }

    deleteTask( id = '' ) {
        if(this._list[id]) {
            delete this._list[id];
        }
    }

    toggleTasks( ids = []) {
        ids.forEach( id => {
            const task = this._list[id];

            if( !task.completed ) {
                task.completed = new Date().toISOString();
            }
        })

        this.arrayList.forEach( task => {
            if (!ids.includes(task.id)) {
                this._list[task.id].completed = null;
            }
        })
    }

    printList( tasks ) {
        tasks.forEach( (task, index) => {
            console.log(`${((index+1).toString()+'.'.blue)} ${task.desc} :: ${task.completed ? 'Completada'.green : 'Pendiente'.red }`)
        })
    }
}

export default Tasks;