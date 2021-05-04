// Todo Store using MobX

/*

MobX treats our app like a spreadsheet.

State - Single source of truth (data cells of app)
Derivations - Values that can be computed automatically from the state of the app (formulas and charts of app)
Reactions - Run automatically to perform some task
Actions - Alter the state (Changes to state caused by actions are automatically processed by all derivations and reactions)

*/

import { makeObservable, autorun, observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'

class ObservableTodoStore {
    todos = []
    pendingRequests = 0

    constructor() {
        makeObservable(this, {
            todos: observable,
            pendingRequests: observable,
            completedTodosCount: computed,
            report: computed,
            addTodo: action
        })
        autorun(() => console.log(this.report))
    }

    get report() {
        if(this.todos.length === 0) {
            return "<none>"
        }
        const nextTodo = this.todos.find(todo => todo.completed === false)
        return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
        `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }

    get completedTodosCount() {
        return this.todos.filter(todo => todo.completed === true).length
    }

    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        })
    }
}

const observableTodoStore = new ObservableTodoStore()

observableTodoStore.addTodo("read MobX tutorial");
observableTodoStore.addTodo("try MobX");
observableTodoStore.todos[0].completed = true;
observableTodoStore.todos[1].task = "try MobX in own project";
observableTodoStore.todos[0].task = "grok MobX tutorial";

const TodoList = observer(({store}) => {
    const onNewTodo = () => {
      store.addTodo(prompt('Enter a new todo:','coffee plz'));
    }
  
    return (
      <div>
        { store.report }
        <ul>
          { store.todos.map(
            (todo, idx) => <TodoView todo={ todo } key={ idx } />
          ) }
        </ul>
        { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
        <button onClick={ onNewTodo }>New Todo</button>
        <small> (double-click a todo to edit)</small>
      </div>
    );
  })
  
  const TodoView = observer(({todo}) => {
    const onToggleCompleted = () => {
      todo.completed = !todo.completed;
    }
  
    const onRename = () => {
      todo.task = prompt('Task name', todo.task) || todo.task;
    }
  
    return (
      <li onDoubleClick={ onRename }>
        <input
          type='checkbox'
          checked={ todo.completed }
          onChange={ onToggleCompleted }
        />
        { todo.task }
        { todo.assignee
          ? <small>{ todo.assignee.name }</small>
          : null
        }
      </li>
    );
  })
  
const Todo = () => {
    return (
        <TodoList store = { observableTodoStore } />
    )
}

export default Todo