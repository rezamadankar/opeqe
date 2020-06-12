import React, { Fragment } from "react";
import { Grid, Link, Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { YouTube, Facebook, Instagram, Twitter } from "@material-ui/icons";


const Footer = () => {
    return (
        <Fragment>
            <Grid container className="row top">
                <Grid item sm={6} xs={12}>
                    <img src={require('../Assets/Images/appstore.png')} alt="opeqe" />
                    <img src={require('../Assets/Images/dld_andorid.png')} alt="opeqe" />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Typography>
                        <Link href="#" >About</Link>
                        <Link href="#" >Services</Link>
                        <Link href="#" >Support</Link>
                        <Link href="#" >Gallery</Link>
                        <Link href="#" >Terms</Link>
                        <Link href="#" >Locations</Link>
                    </Typography>
                </Grid>

            </Grid>
            <Grid container className="row" >
                <Grid item xs={6} sm={3}>
                    <img src={require('../Assets/Images/footerlogo.png')} alt="opeqe" />
                </Grid>
                <Grid item xs={6} sm={3}>

                    <List dense={true}>
                        <ListItem>
                            <ListItemText primary="Main Menu" />
                        </ListItem>
                        <ListItem component="a" href="#" >
                            <ListItemText primary="PickUp" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <List dense={false}>
                        <ListItem>
                            <ListItemText primary="Orders" />
                        </ListItem>
                        <ListItem component="a" href="#" >
                            <ListItemText primary="Upcoming Orders" />
                        </ListItem>
                        <ListItem component="a" href="#" >
                            <ListItemText primary="Recent Orders" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <List dense={false}>
                        <ListItem>
                            <ListItemText primary="Reservation" />
                        </ListItem>
                        <ListItem component="a" href="#" >
                            <ListItemText primary="Recent Reservation" />
                        </ListItem>
                        <ListItem component="a" href="#" >
                            <ListItemText primary="Wait To Be Seated" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <List dense={false}>
                        <ListItem>
                            <ListItemText primary="Profile" />
                        </ListItem>
                        <ListItem component="a" href="#" >
                            <ListItemText primary="Promos & Credits" />
                        </ListItem>
                        <ListItem component="a" href="#" >
                            <ListItemText primary="Rewards" />
                        </ListItem>

                    </List>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <List dense={false}>
                        <ListItem>
                            <ListItemText primary="Special Offers" />
                        </ListItem>
                        <ListItem component="a" href="#" >
                            <ListItemText primary="Chief Special" />
                        </ListItem>
                        <ListItem component="a" href="#" >
                            <ListItemText primary="Breakfast Special" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <List dense={false}>
                        <ListItem>
                            <ListItemText primary="Support" />
                        </ListItem>
                        <ListItem component="a" href="#" >
                            <ListItemText primary="Contact Us" />
                        </ListItem>
                        <ListItem component="a" href="#" >
                            <ListItemText primary="Live Chat" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Grid container>
                <Typography variant="subtitle2" gutterBottom>
                    Delight customers everywhere with a branded custom-built native iOS, native Android and Installable Website Application.
            </Typography>
                <Typography variant="body2" gutterBottom>
                    Opeqe is reliable, fast and commission free all-in-one ordering solutions for multi-location or single location restaurants.
                </Typography>
            </Grid>
            <Grid container >
                <Grid item sm={6} xs={12}>
                    <Typography>
                        <span class="copy-right">©2019 OPEQE INC</span>
                         |
                        <Link href="#" >Terms &amp; Conditions</Link>
                        |
                        <Link href="#" >Privacy Policy</Link>
                    </Typography>
                </Grid>
                <Grid item sm={6} xs={12} className="social">
                    <Instagram />
                    <Facebook />
                    <Twitter />
                    <YouTube />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Footer;