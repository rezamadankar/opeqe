import React from "react";
import { Grid, Button, IconButton } from "@material-ui/core";
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    return (

        <Grid container >
            <Grid item sm={6} >
                <img src={require('../Assets/Images/opeqeLogo.svg')} alt="opeqe" />
            </Grid>
            <Grid item sm={6} style={{ textAlign: "right" }} >
                <Button className="hiddenItem">Reservation</Button>
                <Button className="hiddenItem"> Orders</Button>
                <Button className="hiddenItem">Locations </Button>
                <Button className="login"> Login</Button>
                <Button variant="outlined" className="signup"> SignUp</Button>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <ShoppingBasket />
                </IconButton>
            </Grid>
        </Grid>

    )
}

export default Header;