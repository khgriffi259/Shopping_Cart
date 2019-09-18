import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';


const Main = ({ children }) => (
    <div>
        <Header />
        <Grid container justify="center">
            
                {children}
            
        </Grid>
        <Footer />
    </div>
)

export default Main