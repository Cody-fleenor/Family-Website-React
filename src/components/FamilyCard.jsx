import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core";


// Not applying to cardHeader? Want to change the title style..

const useStyles = makeStyles({
    cardHeader:{
        textAlign: "center",
        padding: 5
    }
})

const FamilyCard = props =>{
    const { title, bio, imageUrl } = props;
    const classes = useStyles();
    return(
        <Card>
            <CardHeader classes={classes.cardHeader}
                title= {title}
             />
            <CardMedia style={{ height: "100px" }} image={imageUrl} />
            <CardContent>
                <Typography variant="body2" component="p">
                    {bio}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FamilyCard;