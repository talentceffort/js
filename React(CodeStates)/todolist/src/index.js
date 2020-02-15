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

// const TodoList = (props) => {
//     const onListItemClick = (event) => {
//         console.log('I got clicked');
//     };

//     // arrow function에 중괄호는 return이 요구되기 때문에 아래와 같이
//     // return 할 값을 작성한 것을 확인하세요!
//     return (
//         <ul>
//             {/* // onClick 등 JSX는 camelCase 문법을 사용합니다. */}
//             <li onClick={onListItemClick}>{props.todos[0]}</li>
//             <li>{props.todos[1]}</li>
//             <li>{props.todos[2]}</li>
//         </ul>
//     );
// }
// class ToDoListItem은 React의 Component를 부모로 받습니다.
class TodoList extends React.Component {
    // constructor 메소드는 constructor에 props를 넘기는데,
    constructor(props) { 
      // 부모의 props를 넘기게 됩니다.
      // constructor안에 super는 필수!
        super(props);
      //이로 인해 여기서 this.props는 받은 props가 됩니다.

    }
    // 모든 클레스는 render메소드가 있어야 합니다. 
    // 가장 기본의 형태는 이 render 메소드만 있어도 됩니다.
    render() {
      // 위에 props를 super(props)로 constructor에 props를 넘겨줬으니, this.props로 부모에게 받은 props를 사용할 수 있게 됩니다.
        console.log(this.props)
        return (
            <React.Fragment>
                {/* <li>{this.props.todos[0]}</li>
                <li>{this.props.todos[1]}</li>
                <li>{this.props.todos[2]}</li> */}
                <ul>
                    {this.props.todos.map(v =>
                        <li key= {v} todos={v} />
                    )}
                </ul>
            </React.Fragment>
        );
    }
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
