import React from 'react';
// import MadeWithLove from 'react-made-with-love';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        textAlign: 'center',
        marginTop: 20
    }
}
const Footer = ({ classes }) => (
    <div>
        <p className={classes.root}>Made with Love by Kyle Griffin</p>
    </div>
)

export default withStyles(styles)(Footer);