import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
<<<<<<< HEAD
import Card, { CardContent } from 'material-ui/Card';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';

=======
import Button from 'material-ui/Button';
>>>>>>> c00034bde0928338fdf3ce76dce06e1770b63967

const ClassListCardsPresentation = props => {
  console.log('card props', props);
  return (
<<<<<<< HEAD
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
=======
    <div>
      <Typography variant="display3" color="primary">
        Current Classes
      </Typography>
      <Grid container>
        <Grid item />
        {props.classes.map(element => (
          <Grid item>
            <Button>
              <Typography variant="display4">{element}</Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
>>>>>>> c00034bde0928338fdf3ce76dce06e1770b63967
  );
};

export default ClassListCardsPresentation;
