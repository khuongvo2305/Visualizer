import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    if(size > 0 && size <= 1000 ){
      setArr(Array.from({length: size}, () => Math.floor(Math.random() * size)))
    } else {
      alert("Please select valid size! ( from 0 to 1000 )")
    }
  }
  const onChange = e => {
    setSize(e.target.value)
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3} style = {{textAlign:"center"}}>
        <Grid item xs={12}>
          {
            arr && arr.map((number, index) => {
              return (
                  <li className="waves-effect" style={{width:"60px",height:number+"0px",fontSize:"20px",color:"white", textAlign:"center",backgroundColor:"grey",border:"2px",borderStyle:"double",float:
                "left", listStyleType:"none"}}
                  key ={index}
                  id= {number}
                  >
                      {number}
                  </li>
              );
          })}
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
                InputProps={{ inputProps: { min: 0, max: 1000 } }}
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
      <Grid item xs={12} style = {{height:"30%"}}>
        <ExpansionPanel style={{width:"30%", marginLeft: 20, marginTop: 20}}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            
            <Typography className={classes.heading}>Pseudocode</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <b>quickSort(arr[], low, high):</b>
                <p>{"\u00a0 \u00a0 if (low < high):"}</p>
                <p>{"\u00a0 \u00a0 \u00a0 pivot = partition(arr, low, high)"}</p>
                <p>{"         \u00a0 \u00a0 \u00a0 quickSort(arr, low, pivot - 1)"}</p>
                <p>{"        \u00a0 \u00a0 \u00a0 quickSort(arr, pivot + 1, high)"}</p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
      </Grid>
    </div>
  );
}
