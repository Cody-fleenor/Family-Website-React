import React from "react";
import Profile from "../components/Profile";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
    mainBody:{
        paddingLeft: 10,
        paddingRight: 10
        },
    cardHeader:{
        textAlign: "center",
        padding: 5
    }
})

const Beck = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainBody}>
            <Grid container spacing={1} padding={1}>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardHeader className={classes.cardHeader}
                            title={
                                <Typography variant="h6" component="h1">
                                    Beck
                                </Typography>
                                } />
                        <CardMedia style={{ height: "250px" }} 
                        image="https://www.wakesmiles.org/wp-content/uploads/2018/02/female-placeholder.jpg"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="body2" component="p">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue vestibulum risus, non consequat massa varius consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue vestibulum risus, non consequat massa varius consectetur. 
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Maecenas congue vestibulum risus, non consequat massa varius consectetur.
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue vestibulum risus, non consequat massa varius consectetur.
                                </p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
      </div>
    );
  };
  
  export default Beck;

