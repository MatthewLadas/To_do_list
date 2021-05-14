let input = prompt('What would you like to do?'); 
const todos = ['Add a Todo', 'List All Todos', 'Remove Specific Todo', 'Quit App']


while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('************************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('************************');
    }
    input = prompt("What would you like to do?");
}
console.log('Ok! You have quit the app.');

