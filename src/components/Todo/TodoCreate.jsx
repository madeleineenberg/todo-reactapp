import React, {useState, useContext} from 'react'
import {TaskContext} from '../../contexts/TaskContext';

import {Form, Input, Select} from "../../styled/Form";

function pad(num){
    return num < 10 ? '0'+num : num
  }

export default function TodoCreate() {
    const {setTaskList} = useContext(TaskContext)
    const now = new Date()
    const nowString = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
    const timeString = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
    const [textInput, setTextInput] = useState("");
    const [dateInput, setDateInput] = useState(nowString)
   const [timeInput, setTimeInput] = useState(timeString)
   const [priorityInput, setPriorityInput] = useState("1")

    function handleOnDateChange(e){
        const value = e.target.value
        setDateInput(value);
    }

    function handleOnTimeChange(e){
        setTimeInput(e.target.value)
        console.log(timeInput)
    }

    function handleOnSubmit(e){
        e.preventDefault();
       
        const dateArray = dateInput.split("-");
        const timeArray = timeInput.split(":")
        const dueDate = new Date(dateArray[0], --dateArray[1], dateArray[2], timeArray[0], timeArray[1]) 
        
        console.log("submitting");

        const payload = {
            id: Date.now(),
            task: textInput,
            dueDate: dueDate,
            isCompleted: false,
            priority: priorityInput,
        }
        setTaskList(prevState => ([...prevState, payload]))
        setTextInput("")
        setDateInput(nowString)
        setTimeInput(timeString)
        setPriorityInput("1")
    }
    return (
        <Form onSubmit={handleOnSubmit}>
        <Input type="text" placeholder="new todo" 
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}/>

        <Input type="date" placeholder="2020-12-01"
        value={dateInput}
        onChange={handleOnDateChange}/>

        <Input type="time" placeholder="10:00"
        value={timeInput} onChange={ handleOnTimeChange }/>

        <Select value={priorityInput} onChange={e => setPriorityInput(e.target.value)}>
            <option value="1">Select Priority</option>
            <option value="11">High Priority 🟣</option>
            <option value="7">Medium Priority 📣</option>
            <option value="2">Low Priority 🔶</option>
        </Select>

        <Input type="submit" value="Add task"/>
        </Form> 
    )
}
