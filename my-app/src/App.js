import Costs from "./Components/Costs/Costs";
import NewCost from "./Components/NewCost/NewCost";
const App = () => {

  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2021, 11, 25),
      description: "Ноутбук",
      amount: 1200.39,
    },
    {
      date: new Date(2021, 9, 2),
      description: "Трусы х3",
      amount: 49.99,
    }
  ];


  return (
  <div>
     <NewCost />
     <Costs costs = {costs}/>
   </div>
   );
}

export default App;
