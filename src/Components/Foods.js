import React, { useState } from "react";
import { connect } from "react-redux";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography, Container } from '@material-ui/core';
import AccessTime from '@material-ui/icons/Timer';
import FoodCard from "./FoodCard";
// import * as actions from "../actions/food";


const Foods = () => {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (value) => {
        setOpen(false);
    };

    const options = {
        loop: false,
        margin: 10,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    };

    return (
        <div className="horzintalList">
            <Container maxWidth="lg">
                <Typography variant="h5" gutterBottom>
                    Special Offers
            </Typography>

                <FoodCard open={open} onClose={handleClose} />
                <OwlCarousel
                    className="owl-theme"
                    {...options}
                >
                    <Card onClick={handleClickOpen}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={require('../Assets/Images/3.jpg')}
                                title="Contemplative Reptile"
                            />
                            <span className="lablel">chief speial</span>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2"  className="alignCenter">
                                    Lizard
            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <span className="category categoryTitle">A'la Carte</span><span className="category">American</span><span className="category">Main Course</span>
                                    <br />
                                    <span className="time">
                                        <AccessTime /> 23:00 Min
                                    </span>
                                    <span className="price"> $ 16.99 </span>
                                    <span className="pickup">Free Pickup</span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                    <Card onClick={handleClickOpen}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={require('../Assets/Images/15.jpg')}
                                title="Contemplative Reptile"
                            />
                            <span className="lablel">chief speial</span>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <span className="category categoryTitle">A'la Carte</span><span className="category">American</span><span className="category">Main Course</span>
                                    <br />
                                    <span className="time">
                                        <AccessTime /> 23:00 Min
                                    </span>
                                    <span className="price"> $ 16.99 </span>
                                    <span className="pickup">Free Pickup</span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                    <Card onClick={handleClickOpen}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={require('../Assets/Images/14.jpg')}
                                title="Contemplative Reptile"
                            />
                            <span className="lablel">chief speial</span>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <span className="category categoryTitle">A'la Carte</span><span className="category">American</span><span className="category">Main Course</span>
                                    <br />
                                    <span className="time">
                                        <AccessTime /> 23:00 Min
                                    </span>
                                    <span className="price"> $ 16.99 </span>
                                    <span className="pickup">Free Pickup</span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </OwlCarousel>
            </Container>
        </div>



    )
}

const mapStateToProps = state => ({
    toggleopen: state.food.toggleOpen
})


export default connect(mapStateToProps)(Foods);