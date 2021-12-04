import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { uuid } from "uuidv4";
import { amber, blue, deepOrange, deepPurple, green, grey, lightBlue, lime, orange, purple, red, yellow } from "@mui/material/colors";
import { Button, Fab, FormControlLabel, Switch, Typography } from "@mui/material";
import { color } from "@mui/system";

export default function BoxHandling() {
  const [arr, setArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [stop, setStop] = useState([
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  ]);
  const [cantWait, setCantWait] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  
 
  const [work, setWork] = useState([0, 0, 0]);
  const [stopHandle1, setStopHandle1] = useState(false);
  const [stopHandle2, setStopHandle2] = useState(false);
  const [loadFKS, setLoadFKS] = useState(false);
  const fksWorkTime = 15;
  const [fksTimer, setFksTimer] = useState(fksWorkTime);
  const [clock, setClock] = useState(0);
  const [separation, setSeparation] = useState(false);
  const [forwardState, setForwardState] = useState(true);
  const [blockLoading, setBlockLoading] = useState(false);
  const [blockUnloading, setBlockUnloading] = useState(false);
  const [blockFKSUnloading, setBlockFKSUnloading] = useState(false);
  const loadPos = 7;
  const unloadPos = 23;
  const maxLoad = 8;
  const clockTime = 5;
  

  function setStopPositions() {
    if (stopHandle1) {
      setStop([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,]);
      setStopHandle1(false);
    } else if (stopHandle2) {
      setStop([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]);
      setStopHandle2(false);
    } else {
      setStop([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,]);
    }
  }

  useEffect(() => {
    const intervalFast = setInterval(() => {
      if (!forwardState) return 
      updateFastProcess();
      if (clock >= clockTime){
        setClock(0);
        updateProcess();
      }
      setClock(prev => {return prev + 1})
    }, 50);
    return () => clearInterval(intervalFast);
  }, [arr, stop, cantWait, work, stopHandle1, stopHandle2, loadFKS, separation, forwardState,blockFKSUnloading]);

  function releaseStopPosition(pos) {
    console.log("releaseStopPosition");
    setStop((prev) => {
      const data = [...prev];
      data[pos] = 5;
      return data;
    });
  }

  function updateProcess(){
    console.log("update");
    loadBuffer();
    unloadBuffer();
    forwardWork();
    fksTimerRun()
  }

  function updateFastProcess() {
    updateBox();
    setStopPositions();
  }


  function forwardBox(pos) {
    console.log("forwardBox");
    setArr((prev) => {
      const data = [...prev];
      data[pos + 1] = data[pos];
      data[pos] = 0;
      return data;
    });
  }

  function loadBuffer() {
    if (arr[loadPos] == 2 && work[0] < maxLoad && !loadFKS && !blockLoading) {
      unLoadBox(loadPos);
      setWork((prev) => {
        const data = [...prev];
        data[0] += 1;
        return data;
      });
    } else if (arr[loadPos] == 1) {
      setStopHandle1(true);
    }
  }

  function fksTimerRun() {
    if (work[1] >= maxLoad && fksTimer >= 1){
      setFksTimer(prev => {return prev - 1})
    }
  }

  function unloadBuffer() {
    if (arr[unloadPos] == 1 && work[2] > 0 && (!separation || work[2] > (maxLoad/2 +1)) && !blockUnloading) {
      LoadBox(unloadPos);
      setWork((prev) => {
        const data = [...prev];
        data[2] -= 1;
        return data;
      });
    } else if (arr[unloadPos] == 2) {
      setStopHandle2(true);
    }
  }

  function forwardWork() {
    if (work[2] == 0 && work[1] >= maxLoad && !loadFKS && fksTimer <= 0 && !blockFKSUnloading) {
      setSeparation(true);
      
    } else if (work[1] == 0 && work[0] >= maxLoad && !separation && !blockFKSUnloading) {
      setLoadFKS(true);
      setFksTimer(fksWorkTime)
    }

    if (loadFKS && work[0] > 0){
      setWork((prev) => {
        const data = [...prev];
        ++data[1];
        --data[0];
        return data;
      });
    } else if (loadFKS) {
      setLoadFKS(false)
  }   
  
  if (separation && work[1] > 0){
    setWork((prev) => {
      const data = [...prev];
      ++data[2];
      --data[1];
      return data;
    });
  } else if (separation) {
    setSeparation(false)
}   

  

  } 

  const LoadBox = (pos) => {
    setArr((prev) => {
      const data = [...prev];
      data[pos] = 2;
      return data;
    });
  };

  const unLoadBox = (pos) => {
    setArr((prev) => {
      const data = [...prev];
      data[pos] = 1;
      return data;
    });
  };

  const setEmpty = (pos) => {
    setArr((prev) => {
      const data = [...prev];
      data[pos] = 0;
      return data;
    });
  };

  const setBoxOnStart = () => {
    setArr((prev) => {
      const data = [...prev];
      data[0] = 2;
      return data;
    });
  };

  const takeFullBoxAway = () => {
    setArr((prev) => {
      const data = [...prev];
      data[31] = 0;
      return data;
    });
  };

  const updateBox = () => {
    let jumpNext = false;
    for (let index = 0; index < 31; index++) {
      if (jumpNext) {
        jumpNext = false;
        continue;
      }
      if (arr[index] == undefined) {
        setEmpty(index);
        continue;
      }
      if (arr[index] == 0) continue;
      if (!arr[index]) continue;
      if (
        (arr[index + 1] === 0 || arr[index + 1] === undefined) &&
        (stop[index] === 0 || stop[index] == undefined) &&
        (cantWait[index] === 0 ||
          arr[index + 2] === 0 ||
          arr[index + 2] === undefined)
      ) {
        console.log("updateBox run");
        forwardBox(index);
        jumpNext = true;
      }
    }
  };

  function BoxOnPlace({ value }) {
    if (value == 2) {
      return <Box key={uuid()}>'box full'</Box>;
    } else if (value == 1) {
      return <Box key={uuid()}>'box'</Box>;
    }
    return <Box key={uuid()}>'leer'</Box>;
  }



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: "3vw", 
  maxHeight: "40px",
  margin: theme.spacing(.1),
  color: theme.palette.text.secondary,
}));



const boxGetter = (pos) => {

  if (pos === undefined){
    return <Item sx={{background: grey[50] }}></Item>
  }
  if (arr[pos] == 2) {
    return <Item sx={{background: orange[700]}}></Item>
  } else if (arr[pos] == 1) {
    return <Item sx={{background: orange[200]}}></Item>
  }
  return <Item sx={{background: blue[50]}}></Item>
}

const e = (pos) => {
return <Grid item xs={1}>
{boxGetter(pos)}
</Grid>}

const l = (pos) => {
  return <Grid item xs={1}>
    <Item sx={{background: deepOrange[500]}}></Item>
  </Grid>}

const b = (pos) => {
  return <Grid item xs={1}>
    <Item sx={{background: yellow[200]}}><Typography variant="h4">{work[pos]}</Typography></Item>
  </Grid>}

const u = (pos) => {
  return <Grid item xs={1}>
    <Item sx={{background: amber[500]}}></Item>
  </Grid>}

const f = (pos) => {
  return <Grid item xs={1}>
    <Item sx={{background: lightBlue[500]}}></Item>
  </Grid>}

const t = (pos) => {
  return <Grid item xs={1}>
    <Item sx={{background: lightBlue[500]}}><Typography variant="body1" >Work: {fksTimer}</Typography></Item>
  </Grid>}

const tx = (text) => {
  return <Grid item xs={1}>
    <Item sx={{background: grey[200]}}><Typography variant="body1" >{text}</Typography></Item>
  </Grid>}

const s = (pos) => {
  return <Grid item xs={1}>
    {separation? <Item sx={{background:  deepPurple[400]}}></Item>: <Item sx={{background:  grey[50]}}></Item>}
  </Grid>}

const c = (pos) => {
  return <Grid item xs={1}>
    {loadFKS? <Item sx={{background:  lime[400]}}></Item>: <Item sx={{background:  grey[50]}}></Item>}
  </Grid>}

const z = (pos) => {
    return <Grid item xs={1}>
     <Fab sx={{ width:"95%", height:"95%"}} variant='extended' 
        onClick={() => {
          takeFullBoxAway();
        }}
      >
        Take Box
      </Fab>
  </Grid>}

const x = (pos) => {
  return <Grid item xs={1}>
 <Fab sx={{ width:"95%", height:"95%"}} variant='extended' 
      onClick={() => {
        setBoxOnStart();
      }}
    >
      Load Box
    </Fab>
</Grid>}


  const createGrid = <Box sx={{ flexGrow: 1, maxWidth: "1400px", m:"auto" }}>
  <Grid container columns={20}>
  {e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}
  {e()}{e()}{e()}{u()}{u()}{u()}{e()}{e()}{e()}{e()}{e()}{e()}{s()}{s()}{f()}{t()}{f()}{e()}{e()}{e()}
  {e()}{e()}{e()}{u()}{b(2)}{u()}{e()}{s()}{e()}{s()}{s()}{s()}{s()}{s()}{f()}{b(1)}{f()}{e()}{e()}{e()}
  {e()}{e()}{e()}{u()}{u()}{u()}{e()}{e()}{e()}{e()}{e()}{e()}{s()}{s()}{f()}{f()}{f()}{e()}{e()}{e()}
  {e()}{e()}{e(25)}{e(24)}{e(23)}{e(22)}{e(21)}{e(20)}{e(19)}{e(18)}{e(17)}{e(16)}{e(15)}{e(14)}{e(13)}{e(12)}{e(11)}{e(10)}{e()}{e()}
  {e()}{e()}{e(26)}{e()}{tx("Unload Pos")}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{c()}{c()}{c()}{e(9)}{e()}{e()}
  {e()}{e()}{e(27)}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{l()}{l()}{l()}{e(8)}{e()}{e()}
  {e()}{e()}{e(28)}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{l()}{b(0)}{l()}{e(7)}{tx("load Pos")}{e()}
  {e()}{e()}{e(29)}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{l()}{l()}{l()}{e(6)}{e()}{e()}
  {e()}{e()}{e(30)}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e(5)}{e()}{e()}
  {e()}{z()}{e(31)}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e(4)}{e()}{e()}
  {e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e(3)}{e()}{e()}
  {e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e(2)}{e()}{e()}
  {e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e(1)}{e()}{e()}
  {e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{x()}{e(0)}{e()}{e()}
  {e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}{e()}

  </Grid>
</Box>

const handleChange = event => {
  setForwardState(event.target.checked);
  //handleSwitch(event.target.checked);
};

  return (
    <div>
      {createGrid}
      {/*arr.map((b) => (
        <BoxOnPlace value={b} />
      ))*/}
      <Button
        onClick={() => {
          setBoxOnStart();
        }}
      >
        setStart
      </Button>
      <Button
        onClick={() => {
          updateProcess();
        }}
      >
        forward
      </Button>
      <Button
        onClick={() => {
          takeFullBoxAway();
        }}
      >
        take full box
      </Button>
      <FormControlLabel
        control={
          <Switch
            checked={forwardState}
            onChange={(event) => {
              setForwardState(event.target.checked)}}
            value={forwardState}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label={"Auto Forward"}
        labelPlacement="start"
      />
      <FormControlLabel
        control={
          <Switch
            checked={blockLoading}
            onChange={(event) => {
              setBlockLoading(event.target.checked)}}
            value={blockLoading}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label={"Block Loading Buffer"}
        labelPlacement="start"
      />
      <FormControlLabel
        control={
          <Switch
            checked={blockUnloading}
            onChange={(event) => {
              setBlockUnloading(event.target.checked)}}
            value={blockUnloading}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label={"Block unloading Separation"}
        labelPlacement="start"
      />
       <FormControlLabel
        control={
          <Switch
            checked={blockFKSUnloading}
            onChange={(event) => {
              setBlockFKSUnloading(event.target.checked)}}
            value={blockFKSUnloading}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label={"Block FKS Handling"}
        labelPlacement="start"
      />
    </div>
  );
}
