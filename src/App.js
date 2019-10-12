import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function CustomizedInputs() {
  const classes = useStyles();
  const [size, setSize] = useState(0);
  const [arr, setArr] = useState()
  const handleClick = () => {
    let min = -1000;
    let max = 1000;
    


    if(size > 0){
      setArr(Array.from({length: size}, () => Math.floor((min + Math.random()*(max - min)))))
    } else {
      alert("Please select size!")
    }
  }
  const onChange = e => {
    setSize(e.target.value)
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {
            arr && arr.map(number => number + ' | ')
          }
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form noValidate autoComplete="off">
              <TextField
                id="standard-number"
                label="Size"
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ inputProps: { min: 0 } }}
                margin="normal"
                onChange={onChange}
              />
              <Button variant="contained" onClick={handleClick} color="primary" className={classes.button}>
                Random Array
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Sort
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
      <Button variant="contained" color="primary" className={classes.button} id="example-code-btn">
        Example code
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Grid>
    </div>
  );
}
