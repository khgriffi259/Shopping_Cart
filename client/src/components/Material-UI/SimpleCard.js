import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { formatCurrency } from '../../util'
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: 8,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    position: 'relative',
    width: '100%'
  },
  center: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  delete: {
    '&:hover': {
      color: red[800],

    }
  }
});

export default function SimpleCard(props) {

  const classes = useStyles();

  const { cartItems, removeFromCart } = props;

  const itemsList = cartItems && cartItems.map((item, i) => (
                      <Paper key={item._id} className={classes.paper}>
                        <div style={{listStyleType: 'none'}}>{item.title}</div> 
                        <div >x {item.count} = {item.price * item.count} </div>

                        <DeleteForeverIcon 
                            className={classes.delete} 
                            onClick={(e)=>removeFromCart(e,item)}
                        />
                      </Paper>));

  // const total
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          You have {cartItems.length} items in your cart.
        </Typography>
        <Typography variant="h6" component="h2">
           { itemsList }
        </Typography>
        <Typography variant="h6" component="h2"> 
          Total: {formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}
        </Typography>      
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" size="small">Checkout</Button>
      </CardActions>
    </Card>
  );
}
