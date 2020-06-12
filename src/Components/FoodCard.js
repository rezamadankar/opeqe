import React from "react";
import { Radio, FormControlLabel, RadioGroup, Typography, Button, Dialog, DialogActions, DialogContent, Grid } from '@material-ui/core';
import Close from '@material-ui/icons/Close';

const FoodCard = (props) => {
    const [value, setValue] = React.useState('');
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(true);
    };


    return (
        <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent className="modalCard">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <img src={require('../Assets/Images/14.jpg')} alt="opeqe" />
                    </Grid>
                    <Grid item xs={12} className="itemField itemHead">
                        <Typography variant="subtitle1" gutterBottom>
                            Choice of Egg Style
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            Choose One
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="itemField">
                        <RadioGroup aria-label="quiz" name="quiz" value={value} >
                            <FormControlLabel value="best" control={<Radio />} label="Scrambled Eggs with Cheese" />
                            <FormControlLabel value="worst" control={<Radio />} label="Scrambled Eggs" />
                            <FormControlLabel value="best" control={<Radio />} label="Sunny Side Up Eggs" />
                            <FormControlLabel value="worst" control={<Radio />} label="Over Easy Eggs" />
                            <FormControlLabel value="best" control={<Radio />} label="Over Medium Eggs" />
                        </RadioGroup>
                    </Grid>
              
              
                  
                    <Grid item xs={12} className="itemField itemHead">
                        <Typography variant="subtitle1" gutterBottom>
                            Choice of Egg Style
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            Choose One
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="itemField">
                        <RadioGroup aria-label="quiz" name="quiz" value={value} >
                            <FormControlLabel value="best" control={<Radio />} label="Scrambled Eggs with Cheese" />
                            <FormControlLabel value="worst" control={<Radio />} label="Scrambled Eggs" />
                        </RadioGroup>
                    </Grid>
                    </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Disagree
          </Button>
                <Button onClick={handleClose} color="primary">
                    Agree
          </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FoodCard;