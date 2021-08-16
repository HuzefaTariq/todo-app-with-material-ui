import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import './css/mycss.css';








const useStyles = makeStyles((theme) => ({
  root: {

  },
  paper: {
    margin: 'auto',
    width: '50%',
    marginTop: '10px',
    textAlign: "center",
    marginBottom: '10px',
    
    

  },
  input: {
    width: '60%',
    marginBottom: '10px'
  }
}));

export default function SimplePaper() {

  //state for input
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([]);

  function addtask() {
    todo.push({description:input ,iscomplete:false});
    setTodo(todo);
    setInput("")
  }

 

  function deletetask(index){
    const filtertodo=todo.filter((obj,i)=>i!==index)
    setTodo(filtertodo)
  }

  

  function updateTask(index){
    const updatearray=[...todo];
    updatearray[index].iscomplete=true;
    setTodo(updatearray);
  }






  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Paper elevation={3} className={classes.paper} >
        <h1>To Do List </h1>

        {/* input field and button  start*/}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField value={input} onChange={(event) => {
            setInput(event.target.value)
          }} id="standard-basic" label="Write Tasks Here" className={classes.input} />
          <Button onClick={addtask} variant="contained" color="primary"  >
            Add Task</Button>
        </form>
        {/* input field and button  start*/}



        {/* showing tasks */}
        {todo.length !== 0 ? todo.map((obj, index) => <TaskList value={obj} index={index} deletetask={deletetask} updateTask={updateTask} ></TaskList>) : <p>No Task Added</p>}


      </Paper>
    </div>
  );
}


function TaskList(props) {



  return (
    <div  >
      <h1 className={props.value.iscomplete?"complete":""}
       >{props.value.description}</h1>

      <Button onClick={()=>{
        props.updateTask(props.index)
      }} variant="contained" color="default">
        complete
      </Button>


      <Button onClick={()=>{
        props.deletetask(props.index)
      }} variant="contained" color="secondary">
        Delete
      </Button>
      <hr></hr>

    </div>
  );

}
