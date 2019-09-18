import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import SimpleSelect from './Material-UI/SimpleSelect';

const styles = {
    filterBar: {
        alignItems: 'center'
    }
}

class Filter extends Component {
   
  state = {
    age: '',
  }

  render() {
    const { classes, count, sort, gameConsole, changeGameConsole, changeSort } = this.props;

    return (
      <Grid container className={classes.filterBar}>
        <Grid item xs={4}>{count} products found.</Grid>

        <Grid item xs={4}>
            <SimpleSelect 
                filterType={sort} 
                changeFilterType={changeSort}
                label="Price"
                options={['ascending', 'descending']}
            />
        </Grid>

        <Grid item xs={4}>
            <SimpleSelect 
                filterType={gameConsole} 
                changeFilterType={changeGameConsole}
                label="Console"
                options={['All','Xbox One', 'PS4']}
            />
        </Grid>

      </Grid>
    );
  }
}

export default withStyles(styles)(Filter);