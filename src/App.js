import './App.css';

//this code will use when we wanna use redux code.
// import Input from './Todoapp_redux/Components/Input';
// import Table from './Todoapp_redux/Components/Table';

//for context api code.
import Input from './Todoapp_contextapi/components/Input';
import Table from './Todoapp_contextapi/components/Table';

function App() {
  return (
    //code for react redux to app.
    // <div className="App container mt-5" style={{'maxWidth':'700px'}}>
    //   <Input />
    //   <Table />
    // </div>

    //code for context api todo app.
    <div className="App container mt-5" style={{'maxWidth':'700px'}}>
      <Input />
      <Table />
  </div>
  );
}

export default App;
