import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';

const ClassListCardsPresentation = props => {
  return (
    <Grid container>
      {props.classes.map(element => {
        <Grid item>
          <Card />
        </Grid>;
      })}
    </Grid>
  );
};

export default ClassListCardsPresentation;
