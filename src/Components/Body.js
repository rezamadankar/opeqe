import React from "react";
import { Link, Container, Typography, Button, Chip, Divider, Grid, ButtonGroup, TextField, Select, MenuItem } from "@material-ui/core";
// import Autocomplete from '@material-ui/lab/Autocomplete';
import Seacrh from '@material-ui/icons/Search';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Foods from "./Foods";


const Body = () => {

    return (
        <div className="body">
            <div className="slider">
                <Container maxWidth="lg">
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        items={1}
                        margin={10}
                        autoplay={true}
                        autoplayTimeout={5000}
                    >
                        <div class="item">
                            <Typography variant="h3" component="h2">
                                Chief Special
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Get $10 off when you order $20 or more T-Bone Steak & Eggs
                            </Typography>

                            <Button size="small" variant="contained" href="#">
                                <span className="btnTitle">Use</span>  <Chip label="Chief Special" />
                            </Button>
                        </div>
                        <div class="item">
                            <Typography variant="h3" component="h2">
                                Breakfast Special
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Get 15% off when you order 3 or more Blueberry Pancake Breakfast
                            </Typography>

                            <Button size="small" variant="contained" href="#" >
                                <span className="btnTitle">Use</span>  <Chip label="Breakfast Special" />
                            </Button>
                        </div>
                    </OwlCarousel>
                </Container>
            </div>
            <div className="search">
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}  className="hiddenItem titlesearch">
                            <Typography variant="button" display="block" align="center" gutterBottom>
                                ASAP Pickup
                        </Typography>
                            <Typography variant="caption" display="block" align="center" gutterBottom className="searchDesc">
                                Beverly Hills - 1008 Elden Way
                        </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}  className="hiddenItem">

                        <Link href="#" className="changeBtn">Change</Link>

                            <Link href="#"  className="delivertBtn">Delivery</Link> <span className="seperator">or</span>  <Link href="#"  className="delivertBtn mark">PickUp</Link>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                                <Select className="leftCtr" >
                                    <MenuItem value="ALL" >ALL</MenuItem>
                                    <MenuItem value="A+">A +ve</MenuItem>
                                    <MenuItem value="A-">A -ve</MenuItem>
                                    <MenuItem value="B+">B +ve</MenuItem>
                                    <MenuItem value="B-">B -ve</MenuItem>
                                    <MenuItem value="AB+">AB +ve</MenuItem>
                                    <MenuItem value="AB-">AB -ve</MenuItem>
                                    <MenuItem value="O+">O +ve</MenuItem>
                                    <MenuItem value="O-">O -ve</MenuItem>
                                </Select>
                                <TextField className="middleCtr" label="Looking for something?" />
                                <Button className="rightCtr">
                                    <Seacrh />
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Divider boxShadow={3} />

            <Foods />
            <Foods />
            <Foods />
            <Divider boxShadow={3} />
            <div className="crossPlatform">
                <Container maxWidth="lg">
                    <Grid container spacing={3}>

                        <Grid item xs={12} sm={4} align="right" className="alignCenter">
                            <img src={require('../Assets/Images/android.jpg')} alt="opeqe" />
                        </Grid>
                        <Grid item xs={12} sm={4} align="center" className="center">
                            <div><span class="cross">Cross Platform</span></div>
                            <div><span class="small">native</span>&nbsp;<span class="mobile">Mobile Application</span></div>
                            <div><span class="android">Android</span><span class="small bold">,</span>&nbsp;<span class="ios">iOS</span></div>
                            <div><span class="Hybrid">Hybrid Design</span>&nbsp;<span class="small color-MediumGray">Mobile first</span></div>
                            <img src={require('../Assets/Images/opeqeLogo.svg')} alt="opeqe" />
                            <div><span class="small bold upper color-Main">Installable</span>&nbsp;<span class="small upper">Web Application</span></div>
                            <div><span class="large upper color-MediumGray">For Any Size Restaurant</span></div>


                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  <Button>Text Me Demo App</Button>

</ButtonGroup>

                        </Grid>
                        <Grid item xs={12} sm={4} align="left" className="alignCenter">
                            <img src={require('../Assets/Images/ios.jpg')} alt="opeqe" />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Foods />
            <Divider boxShadow={3} />

            <div className="gift">
                <Container maxWidth="lg">
                    <Grid container spacing={12}>

                        <Grid item xs={12} sm={6} align="center" className="alignCenter">
                            <img src={require('../Assets/Images/gift.jpg')} alt="opeqe" />
                        </Grid>
                        <Grid item xs={12} sm={6} align="center">
                            <div><span class="brand">Branded</span>&nbsp;<span class="giftcard">Gift Card</span></div>
                            <img src={require('../Assets/Images/opeqeLogo.svg')} alt="opeqe" className="logo" />
                            <p>
                                Opeqe provides a wide range of customizable products for reward and incentive programs that can meet your restaurant’s goals.
                                Whether you are looking to drive the addition of new customers, increase the loyalty of existing ones we have a customized solution for you.
                           </p>
                            <Button variant="contained">Default</Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Divider boxShadow={3} />
            <div className="order">
                <Container maxWidth="lg" align="center">
                   
                        <Typography variant="h6" gutterBottom>Ready to order?  </Typography>
                        <Typography variant="h6" className="desc">
                            Browse our menu for dine-in, delivery or pickup and catering
                        </Typography>

                        <div className="divcontainer">
                            <a href="#">
                                <div class="mode">ASAP Pickup</div>
                                <div class="sub">Beverly Hills - 1008 Elden Way</div>
                            </a>
                            <div class="btnchange">
                                <a class="MuiButtonBase-root MuiButton-root MuiButton-text jss140 jss167 change" tabindex="0" role="button" aria-disabled="false" href="/order-options" >
                                    <span class="MuiButton-label">Change</span>
                                    <span class="MuiTouchRipple-root"></span>
                                </a>
                            </div>
                            <div className="delivery">
                            
                                <div class="item">Delivery</div>
                                <span class="seperator">or</span>
                                <div class="item">Pickup</div>
                            </div>
                        </div>

              
                </Container>
            </div>
        </div>


    )
}


const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];



export default Body;