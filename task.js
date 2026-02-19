let req = process.argv
let task = req[3]
let status = req[4]
let taskList = [{
    "name" : "NodeJs",
    "status" : "active"
  }]
switch (req[2]) {
  case "add":
    console.log(`Task added\nName : ${task}\nStatus : Active`)
    break;
  case "update":
    console.log(`Task updated\nName : ${task}\nStatus : ${status}`)
    break;
    case "remove":
      console.log(`Task removed\nName : ${task}\nStatus : Removed`)
      break;
    case "list" :
      console.log(`Here are the available tasks`)
      console.log(taskList)
      break;
    case "help" :
        console.log(`Use 'add' to add a task\n  Use 'update' to update a task\n  Use 'remove' to remove a task\n  Use 'list' to list available tasks`)
        break;
  default:
    console.log(`Unkown command.\n  Use 'add' to add a task\n  Use 'update' to update a task\n  Use 'remove' to remove a task\n  Use 'list' to list available tasks`)
    break;
}