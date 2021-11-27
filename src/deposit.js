import React from "react";
import { UserContext, Card } from "./context";

function Deposit(){
  const ctx = React.useContext(UserContext);
  const currentUser =  ctx.currentUser;
  const [balance, setBalance] = React.useState(currentUser? currentUser.balance : null);
  const [amount, setAmount] = React.useState('');
  const [status, setStatus]     = React.useState('');

  function validate(amount){
    if(!Number(amount)) {
      setStatus('Error: The amount must be a number.');
      setTimeout(() => setStatus(''),3000);
      return false;
    }

    if (amount <= 0) {
      setStatus('Error: The amount must be positive.');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function clearForm(){
    setAmount('');
  }

  function handleDeposit(){
    if(!validate(amount)) return;
    currentUser.balance += Number(amount);
    setBalance(currentUser.balance);
    //currentUser.transactions.push({date: Date(), type: "deposit", amount: Number(amount)});
    

    fetch(`/account/update/${currentUser.email}/${amount}`)
      .then(response => console.log(response));

    alert('Deposit was received successfully');
    clearForm();
  }

  return (
    <Card
      bgcolor = "success"
      header = "Deposit"
      title = {"Your Balance: "+ (balance? balance : "?")}
      status = {status}
      body = {(
        <> 
          Amount<br/>
          <input type="text" className="form-control" placeholder="Enter the amount" value={amount} onChange={(e)=>{setAmount(e.currentTarget.value)}}/><br/>
          <button type="submit" disabled={!currentUser || !amount} className="btn btn-light" onClick={handleDeposit}>Deposit amount</button>
        </>
      )}
    />
  )
}

export default Deposit;