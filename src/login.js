import React from 'react'
import {UserContext, Card} from './context'

function Login(){
  const ctx = React.useContext(UserContext);
  let currentUser =  ctx.currentUser;
  const [show, setShow]         = React.useState(currentUser? false : true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleLogin(){
    console.log(email,password);
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;

    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            console.log('JSON:', data);
            currentUser = data;
            ctx.currentUser = currentUser;
            setShow(false);
        } catch(err) {
            alert(text);
            console.log('err:', text);
        }
    });
  } 

  function clearForm(){
    ctx.currentUser = null;
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="warning"
      header="Login"
      status={status}
      body={show ? (  
        <>
        Email address<br/>
        <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
        Password<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
        </>
      ):(
        <>
        <h5>Success</h5>
        <p>Hello {currentUser.email}!</p>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Log out</button>
        </>
      )}
    />
  )  
}

export default Login;