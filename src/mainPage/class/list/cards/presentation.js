import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';


const ClassListCardsPresentation = props => {
  return (
    <GridList 
      style={{marginRight: 40, marginTop: 20, marginLeft: 40}}
      cols={4}
      spacing={10}
      cellHeight={200}
    >
      {props.classes.map(element => 
        <GridListTile style={{margin:'auto'}}>
          <Card 
            style={{
              height: 200,
              width: 200
            }}
          >
            <Typography>
              {element}
            </Typography>
          </Card>
        </GridListTile>
      )}
    </GridList>
  );
};

export default ClassListCardsPresentation;
