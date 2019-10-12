import React, { useState } from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import { quickSort } from "./quickSort";

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
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


export default function CustomizedInputs() {
  const classes = useStyles();
  const [size, setSize] = useState(0);
  const [arr, setArr] = useState()
  const [resulf, setResulf] = useState()
  const handleClick = () => {
    let min = -1000;
    let max = 1000;
    if(size > 0){
      setArr(Array.from({length: size}, () => Math.floor((min + Math.random()*(max - min)))))
    } else {
      alert("Please select valid size! ( from 0 to 1000 )")
    }
  }
  const onChange = e => {
    setSize(e.target.value)
  }
  const handleSort = () => {
    if(arr && arr.length > 0){
      let arrNumber = [...arr];
      setResulf(quickSort(arrNumber, 0, arr.length - 1))
    }
  }

  /**
   * Handel modal Example Code
   */
  const [openModalExampleCode, setOpenModalExampleCode] = React.useState(false);
  const handleOpenModalExampleCode = () => {
    setOpenModalExampleCode(true);
  };

  const handleCloseModalExampleCode = () => {
    setOpenModalExampleCode(false);
  };
  const [valueTabExampleCode, setValueTabExampleCode] = React.useState(0);

  const handleChangeTabExampleCode = (event, newValue) => {
    setValueTabExampleCode(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style = {{textAlign:"center"}}>
        <Grid item xs={12}>
          {
            arr &&
            <React.Fragment>
              <label>Array:</label><br/>
              {arr.map(number => number + ' | ')}
            </React.Fragment>
          }
        </Grid>
        <Grid item xs={12}>
          {

            resulf &&
              <React.Fragment>
                <label>Resulf:</label><br/>
                {resulf.map(number => number + ' | ')}
              </React.Fragment>
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
                InputProps={{ inputProps: { min: 0, max: 1000 } }}
                margin="normal"
                onChange={onChange}
              />
              <Button variant="contained" onClick={handleClick} color="primary" className={classes.button}>
                Random Array
              </Button>
              <Button variant="contained" onClick={handleSort} color="primary" className={classes.button}>
                Sort
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} style = {{height:"30%"}}>
        <ExpansionPanel style={{width:"50%", marginLeft: 20, marginTop: 20}}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >

            <Typography className={classes.heading}>Pseudocode</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <b>quickSort(arr[], low, high):</b>
                <p>{"\u00a0 \u00a0 if (low < high):"}</p>
                <p>{"\u00a0 \u00a0 \u00a0 pivot = partition(arr, low, high)"}</p>
                <p>{"         \u00a0 \u00a0 \u00a0 quickSort(arr, low, pivot - 1)"}</p>
                <p>{"        \u00a0 \u00a0 \u00a0 quickSort(arr, pivot + 1, high)"}</p>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
      <Grid container>

        <Button variant="contained" color="primary" className={classes.button} onClick={handleOpenModalExampleCode} id="example-code-btn">
          Example code
        </Button>
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={openModalExampleCode}
            onClose={handleCloseModalExampleCode}
          >
            <div>
              <h2 id="simple-modal-title">Text in a modal</h2>
              <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </div>
          </Modal>


      <Button variant="contained" color="primary" className={classes.button} onClick={handleOpenModalExampleCode} id="example-code-btn">
        Example code
      </Button>
      <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={openModalExampleCode}
          onClose={handleCloseModalExampleCode}
        >
          <div className="contentModalExampleCode">
            <div className={classes.root}>
              <AppBar position="static">
                <Tabs value={valueTabExampleCode} onChange={handleChangeTabExampleCode} aria-label="simple tabs example">
                  <Tab label="Quick Sort" {...a11yProps(0)} />
                  <Tab label="Example Code C++" {...a11yProps(1)} />
                  <Tab label="Example Code C#" {...a11yProps(2)} />
                  <Tab label="Example Code Python" {...a11yProps(3)} />
                  <Tab label="Example Code Java" {...a11yProps(4)} />
                  <Tab label="Practice" {...a11yProps(5)} />
                </Tabs>
              </AppBar>
              <TabPanel value={valueTabExampleCode} index={0}>
                Quick Sort
              </TabPanel>
              <TabPanel value={valueTabExampleCode} index={1}>
              Example Code C++
              </TabPanel>
              <TabPanel value={valueTabExampleCode} index={2}>
              Example Code C#
              </TabPanel>
              <TabPanel value={valueTabExampleCode} index={3}>
              Example Code Python
              </TabPanel>
              <TabPanel value={valueTabExampleCode} index={4}>
              Example Code Java
              </TabPanel>
              <TabPanel value={valueTabExampleCode} index={5}>
              Practice
              </TabPanel>
            </div>
          </div>
        </Modal>
      </Grid>

    </div>
  );
}
