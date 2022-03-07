import axios from 'axios';

/*interface Todo {
    id: number;
    title: string;
    completed: boolean;
}*/

class Todo {
    id: number;
    title: string;
    completed: boolean;


    public toString = (): string => {
        return (
            `\tThe id is ${this.id}\n
        The title is ${this.title}\n 
        completed? ${this.completed}\n`);
    }


}


const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url)
    .then(response => {
        const todo = response.data as Todo;
        logTodo(todo)
    });
//function variable
const logTodo : (todo:Todo)  => void =  (todo: Todo) => {
    // const {id, title, completed} = todo;
    console.log(
        todo
    )
}

//typescript will do inference iff the declaration and
//assignment is done on one line, otherwise type annotations
//are not done

const throwError = (message:string): never => {
    throw new Error(message);
}
