import './App.css';
import Expenses from './components/Expenses/Expenses'
import ExpenseForm from './components/NewExpense/ExpenseForm'

function App() {

  const expenses = [
    { id: 1,
      title: 'Facewash',
      date: new Date(2021, 10, 19),
      amount: 150
    },
    { id: 2,
      title: 'Soap',
      date: new Date(2021, 9, 9),
      amount: 120
    },
    { id: 3,
      title: 'Dishwash',
      date: new Date(2021, 10, 18),
      amount: 20
    },
    { id: 4,
      title: 'iPhone',
      date: new Date(2021, 11, 14),
      amount: 50000
    },
  ]
  
  function formSubmit(e){
    console.log(e);
  }

  return (
    <div className="App">
      <div className="form-card">
        <ExpenseForm onFormSubmit = {formSubmit}/>
      </div>
      <div className="wrapper-card">
        <Expenses expenses = {expenses} />
      </div>
    </div>
  );
}

export default App;
