import Costs from "./Components/Costs/Costs";
import NewCost from "./Components/NewCost/NewCost";
const App = () => {

  const costs = [
    {
      id: "c1",
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      id: "c2",
      date: new Date(2021, 11, 25),
      description: "Ноутбук",
      amount: 1200.39,
    },
    {
      id: "c3",
      date: new Date(2021, 9, 2),
      description: "Трусы",
      amount: 49.99,
    },
  ];

  const addCostHandler = (cost) =>{
    console.log(cost);
    console.log('App comp');
  }


  return (
  <div>
     <NewCost onAddCost = {addCostHandler}/>
     <Costs costs = {costs}/>
   </div>
   );
}

export default App;
