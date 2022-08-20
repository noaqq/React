import CostForm from "./CostForm";
import "./NewCost.css"

const NewCost = (props) =>{

    const onSaveCostDataHandler = (inputCostData) => 
    {
        const  costDate = {
            ...inputCostData,
            id: Math.random().toString()
        };

        props.onAddCost(costDate);
    };

    return <div className="new-cost">
        <CostForm onSaveCostData =
         {onSaveCostDataHandler}/>
    </div>
}

export default NewCost;