import React from 'react'
import userService from "../../services/UserService";
import SingleUser from './SingleUser'
import Admin from '../auth/Admin';
import { Grid, Button } from "@material-ui/core";




const Users=(props)=> {
    const [users,setUsers]= React.useState([]);
    

    const page = props.match.params.page ? props.match.params.page : 1;
    const [total, setTotal] = React.useState(0);
    const [perPage, setPerPage] = React.useState(10);

    const getData = () => {
        userService
          .getUsers()
          .then((data) => {
            setUsers(data.users);
            setTotal(data.total)
          })
          .catch((err) => {
            console.log(err);
          });
      };
      // getData();
      React.useEffect(getData,[page, perPage]);
      
    return (
     
        <div>

{userService.isAdmin()|| userService.issuperAdmin() ? (
          <>
          <h1>Users</h1>
           <Grid container spacing={3}>
           {users.map((user,index)=>(
          
<SingleUser key={index} user={user}/>
          ))}
           </Grid>
             
          
            </>
             ) 
             
             : (
              <Button
                
                
                
              >
               
              </Button>
            )}
        
         
        

          
          
      
        </div>
       
       
    )
}

export default Users
