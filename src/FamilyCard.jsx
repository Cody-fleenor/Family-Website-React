import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const FamilyCard = props =>{
    const { title, subtitle, bio, imageUrl } = props;
    return(
        <Card>
            <CardHeader
                title={title}
                subheader={subtitle}
            />
            <CardMedia style={{ height: "150px" }} image={imageUrl} />
            <CardContent>
                <Typography variant="body2" component="p">
                    {bio}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FamilyCard;