let input = prompt('What would you like to do?'); 
const todos = ['Buy a kitten', 'Buy cat food'];


while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('************************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('************************');
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`Awesome! ${newTodo} has been added to the list.` );
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete that entry.'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Great! ${deleted[0]} has been deleted!`);
        } else {
            console.log('Unknown Index');
        }
    }
    input = prompt("What would you like to do?");
}
console.log('Ok! You have quit the app.');

