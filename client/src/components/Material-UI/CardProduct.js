import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Icon from '@material-ui/core/Icon';
import Icons from './Icons'
import { formatCurrency } from '../../util';

const useStyles = makeStyles(theme => ({
  card: {
    width: 300,
    marginBottom: 20,
    height: 375
  },
  media: {
    width: '100%',
    paddingTop: '56.25%',
    backgroundSize: 'contain' // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  addToCart: {
    color: "secondary",
    fontSize: "large"
  },
  actions: {
    justifyContent: 'space-around'
  },
  iconHover: {
    '&:hover': {
      color: red[800],
    }
  }
}));

export default function CardProduct({ product, addToCart }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
       
        title={product.title}
        subheader={product.description}
      />
      <CardMedia
        className={classes.media}
        image={`/products/${product.sku}_2.jpg`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {formatCurrency(product.price)}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Icon 
          className={classes.iconHover} 
          color="secondary" 
          fontSize="large" 
          onClick={(e) => addToCart(e, product)}
        >
          add_circle
        </Icon>
      </CardActions>
    </Card>
  );
}
