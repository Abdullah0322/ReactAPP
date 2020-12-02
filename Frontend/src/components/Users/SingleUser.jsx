import React from 'react'
import { Grid, Button } from "@material-ui/core";
import userService from "../../services/UserService";
import { withRouter } from "react-router";
import Admin from "../auth/Admin"


const SingleUser=(props) =>{
    const {user,onDelete,history}=props
    return (
    
        <Grid item xs={3}>
            <h2>{user.name}
         
        
            {userService.issuperAdmin() && (
          <>
             <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                console.log("navigate to update");
                history.push("/users/update/" + user._id);
              }}
            >
              Edit
            </Button>{" "}
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                userService
                  .deleteUser(user._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
          </>
        )}
        </h2>{" "}
          <p>{user.email}</p>
            </Grid>
            
    );
}
export default withRouter(SingleUser);