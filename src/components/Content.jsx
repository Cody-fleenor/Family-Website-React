import React from "react";
import FamilyCard from "./FamilyCard";
import { Grid } from "@material-ui/core";
import familyList from "./constants";

const Content = () => {
    const getFamilyCard = familyCardObj => {
        return (
            <Grid item xs={12} sm={4}>
                <FamilyCard {...familyCardObj} />
            </Grid>
        );
    };
    return (
        <Grid container spacing={2}>
            {familyList.map(familyCardObj => getFamilyCard(familyCardObj))}
        </Grid>
    );
};

export default Content;