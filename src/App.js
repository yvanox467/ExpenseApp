// import logo from "./logo.svg";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "Car insurance", amount: 293.67, date: new Date(2021, 1, 28) },
    { title: "Toilet paper", amount: 3.67, date: new Date(2021, 2, 28) },
    { title: "Groceries", amount: 500.67, date: new Date(2020, 3, 28) },
    { title: "New Tv", amount: 793.67, date: new Date(2021, 11, 20) },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
