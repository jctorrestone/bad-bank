import React from 'react';
import {UserContext, Card} from './context';


function AllData(){
  const [data, setData] = React.useState([]);
  const ctx = React.useContext(UserContext);    

  React.useEffect(() => {
        
      // fetch all accounts from API
      fetch('/account/all')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);                
        });

  }, []);
  
  return (
    <Card
      bgcolor = "info"
      style = {{maxWidth: "45rem"}}
      header = "All data"
      title = {ctx.currentUser? "Current user: " + ctx.currentUser.email : ""}
      body = {
        <table className="table">
          <tbody>
            {data.map((user) => 
              <>
                <h5 className="text-white font-weight-bold">{"User: " + user.email}</h5>
                <tr>
                  <td className="text-white font-weight-bold">Name:</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td className="text-white font-weight-bold">Email:</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td className="text-white font-weight-bold">Password:</td>
                  <td>{user.password}</td>
                </tr>
                <tr>
                  <td className="text-white font-weight-bold">Balance:</td>
                  <td>{user.balance}</td>
                </tr>
                <tr>
                  <td className="text-white font-weight-bold">Transactions:</td>
                  <td>
                    <table className="table">
                      <tbody>
                        {user.transactions.map((transaction) =>
                          <>
                            <h5 className="text-white font-weight-bold">{"Date: " + transaction.date}</h5>
                            <tr>
                              <td className="text-white font-weight-bold">Type:</td>
                              <td>{transaction.type}</td>
                            </tr>
                            <tr>
                              <td className="text-white font-weight-bold">Amount:</td>
                              <td>{transaction.amount}</td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      }
    />
  );
}

export default AllData;
