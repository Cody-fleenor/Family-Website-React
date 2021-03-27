import React from "react";
import Profile from "../components/Profile";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";



const Cody = () => {
    return (
        // <div>
        //   <Profile />
        // </div>
        <div>
        <Grid container spacing={1} padding={1}>
          <Grid item xs={12} sm={4}>
              <Card>
                  <CardHeader style={{height: "15px"}}
                      title= "Cody" />
                  <CardMedia style={{ height: "250px" }} 
                  image="https://www.wakesmiles.org/wp-content/uploads/2018/02/female-placeholder.jpg"
                  />
              </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
              <Card>
                  <CardContent>
                      <Typography variant="body2" component="p">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore labore laborum sint ipsum illum quod alias. Atque molestias placeat iusto, vel quisquam nisi eos, delectus culpa natus nostrum cum.</p>
                      </Typography>
                  </CardContent>
              </Card>
          </Grid>
        </Grid>
      </div>
    );
  };
  
  export default Cody;