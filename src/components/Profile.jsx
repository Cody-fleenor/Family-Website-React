import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Profile = props => {
  const classes = useStyles();
  const { title, bio, imageUrl } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
            <Card>
                <CardHeader
                    title= {title}/>
                <CardMedia style={{ height: "100px" }} image={imageUrl} />
            </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
            <Card>
                <CardContent>
                    <Typography variant="body2" component="p">
                        {bio}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
