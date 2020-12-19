import React, {useState} from 'react'
import {Ul, ListItem} from '../../styled/List';

export default function TodoItem({todoItem}) {
    const [isCompleted, setIsCompleted] = useState(todoItem.isCompleted)

    function getEmoji(priority){
        if(priority > 10){
          return "🟣"
        }
        else if(10 >= priority && priority > 5){
          return "📣"
        }
        else {
          return "🔶"
        }
      }

      function handleToggleIsComplete(){
          setIsCompleted(!isCompleted);
      }

      function isLate(dueDate){
          const now = new Date();
          return now > dueDate
      }

      function getLateEmoji(dueDate){
          const late = isLate(dueDate)
          return late ? "🔺" : ""
      }

    return (
        <div className="todo-container">
        <Ul>
      <ListItem onClick={handleToggleIsComplete}>
         {getEmoji(todoItem.priority)}  {todoItem.task} <br/>
          {getLateEmoji(todoItem.dueDate)}
          {todoItem.dueDate.toLocaleString()}
          {isCompleted ?  "✔" : "☹︎"}
      </ListItem>
      </Ul>
       </div>
    )
}
