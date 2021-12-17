import React from "react";
import {Card} from './context'

function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label + ' is empty.');
        setTimeout(() => setStatus(''),3000);
        return false;
      }

      if(label === 'password' && field.length < 8) {
        setStatus('Password must be at least 8 characters long.');
        setTimeout(() => setStatus(''),3000);
        return false;
      }

      return true;
  } 

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow} validate={validate}/>:
        <CreateMsg setShow={setShow}/>}
    />
  )
}

function CreateMsg(props){
  return (
    <>
    <h5>Success</h5>
    <button type="submit" className="btn btn-light" onClick={() => props.setShow(true)}>Add another account</button>
    </>
  )
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!props.validate(name,     'name'))     {/*alert('Name is empty.');                              */ return;}
    if (!props.validate(email,    'email'))    {/*alert('Email is empty.');                             */ return;}
    if (!props.validate(password, 'password')) {/*alert('Password must be at least 8 characters long.');*/ return;}

    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
        var res  = await fetch(url);
        var data = await res.json();    
        console.log(data);        
    })();
    
    props.setShow(false);
    clearForm();
  }   

  return (  
    <>
    Name<br/>
    <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
    Email address<br/>
    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
    Password<br/>
    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
    <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={(!name && !email && !password)}>Create Account</button>
    </>
  )
}

export default CreateAccount;