import React from 'react';
import ReactDOM from 'react-dom';

// const GroceryList = () => (
//     <div>
//         <h1>GroceryList</h1>
//         <ul>
//             <li>Kale</li>
//             <li>cucumbers</li>
//         </ul>
//     </div>
// )

// const TodoList = (props) => (
//     <ul>
//         <li>{ props.todos[0] }</li>
//         <li>{ props.todos[1] }</li>
//         <li>{ props.todos[2] }</li>
//     </ul>
// );

const TodoList = (props) => {
    const onListItemClick = (event) => {
        console.log('I got clicked');
    };

    // arrow function에 중괄호는 return이 요구되기 때문에 아래와 같이
    // return 할 값을 작성한 것을 확인하세요!
    return (
        <ul>
            {/* // onClick 등 JSX는 camelCase 문법을 사용합니다. */}
            <li onClick={onListItemClick}>{props.todos[0]}</li>
            <li>{props.todos[1]}</li>
            <li>{props.todos[2]}</li>
        </ul>
    );
}

const App = () => (
    <div>
        <h2>My Todo List</h2>
        <TodoList
            todos={[
                'Learn React',
                'Crush Recast.ly',
                'Maybe sleep',
            ]} // todos 로 데이터를 넘기면 props 에서도 todos 로 데이터를 받아야함.
        />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
