// Write your code here.

import {useState} from 'react'
import './index.css' // Import CSS file

function TaskListApp() {
  // State for tasks and assigned users
  const [tasks, setTasks] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([])

  // Users data
  const users = [
    {id: 'user1', name: 'User 1'},
    {id: 'user2', name: 'User 2'},
    {id: 'user3', name: 'User 3'},
  ]

  // Function to handle task submission
  const handleTaskSubmit = e => {
    e.preventDefault()
    const title = e.target.title.value
    const description = e.target.description.value
    const priority = e.target.priority.value

    if (title.trim() === '') {
      alert('Please enter a title for the task.')
      return
    }

    const newTask = {title, description, priority, assignedUsers: selectedUsers}
    setTasks([...tasks, newTask])
    e.target.reset()
    setSelectedUsers([])
  }

  // Function to handle task assignment
  const handleTaskAssign = () => {
    // Do something with assigned users
    console.log('Assigned Users:', selectedUsers)
  }

  return (
    <div className="task-list-container">
      <h2>Create Task</h2>
      <form onSubmit={handleTaskSubmit}>
        <input type="text" name="title" placeholder="Enter task title" />
        <textarea name="description" placeholder="Enter task description" />
        <select name="priority">
          <option value="">Select priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select
          multiple
          value={selectedUsers}
          onChange={e =>
            setSelectedUsers(
              Array.from(e.target.selectedOptions, option => option.value),
            )
          }
        >
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button type="submit">Add Task</button>
      </form>

      <h2>Assign Task</h2>
      <div>
        <button type="button" onClick={handleTaskAssign}>
          Assign
        </button>
      </div>

      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.title}>
            <div className="task-item">
              <strong>{task.title}</strong>
              <p>{task.description}</p>
              <p>Priority: {task.priority}</p>
              <p>Assigned To: {task.assignedUsers.join(', ')}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskListApp
