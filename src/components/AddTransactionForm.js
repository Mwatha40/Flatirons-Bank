import React,{useState} from "react";

function AddTransactionForm({onSubmission}) {
  const[formData, setFormData]= useState({
    date:"",
    description:"",
    category:"",
    amount:"",
    

  })

  function handleSubmit(event){
    event.preventDefault()
    onSubmission(formData)
    setFormData({
      date:"",
      description:"",
      category:"",
      amount:"",
      
    })
  }

  function handleChange(event){
    setFormData({...formData,[event.target.name]:event.target.value})
  }
  
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} />
          <input type="text" name="description" placeholder="Description" value={formData.description}/>
          <input type="text" name="category" placeholder="Category" value={formData.category}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
