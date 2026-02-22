//Declaring veriables
//search.js
/*
let phoneMatch = data[i].phones && data[i].phones.some(phone => phone.includes(input))


*/
let readline = require("readline");
let fs = require("fs");
let rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout,
        prompt : '> '
      });
let data =[]
let results = []
try {
  let file = fs.readFileSync("json/contacts.json", "utf-8")
  data = JSON.parse(file)
} 
catch (err) {
  console.log("Error loading data")
  process.exit()
}
let l = data.length



//input setup
console.log("Search by name or number")
rl.prompt()

rl.on("line", (input) => {
  input = input.trim()
  if(input.toLowerCase() === "exit"){
    console.log("Good bye...")
    rl.close()
  }
  else if(input.toLowerCase().includes("add")){
    // add a contact
    let parts = input.split(" ")
    let newContact = {}
    if(parts.length === 1){
      
      rl.question("Enter Name :", (name2)=>{ newContact.name = name2
        rl.question("Enter Phone :", (num)=>{ newContact.phones = [num]
          rl.question("Enter email (optional):", (email)=>{ 
          newContact.email = email
          data.push(newContact)
          l = data.length
          fs.writeFileSync("json/contacts.json", JSON.stringify(data, null, 2), "utf-8")
          console.log("saved!")
          rl.prompt()
        })
        })
      })
      
    }
    else{
      let nIndex = parts.indexOf("--n")
      let pIndex = parts.indexOf("--p")
      let eIndex = parts.indexOf("--e")

      let name = nIndex !== -1 ? parts[nIndex + 1] : null
      let phone = pIndex !== -1 ? parts[pIndex + 1] : null
      let email = eIndex !== -1 ? parts[eIndex + 1] : null
      newContact.name = name
      newContact.phones = [phone]
      newContact.email = email
      
      data.push(newContact)
      l = data.length
      fs.writeFileSync("json/contacts.json", JSON.stringify(data, null, 2), "utf-8")
      rl.prompt()
      console.log("saved!")
    }
  }
  else{
    for(let i =0; i < l; i++){
      
      let phoneMatch = data[i].phones && data[i].phones.some(phones => phones.includes(input))
      
      let nameMatch = data[i].name && data[i].name.toLowerCase().includes(input.toLowerCase()) 
      
      if(phoneMatch || nameMatch){
        results.push(data[i])
      }
    }
    if(results.length === 0){
      console.log("No contact Found!")
    }
    else{
      console.log(`\x1b[34mTotal: ${results.length} result(s) found\x1b[0m`)
      results.forEach(entry => console.log(entry))
    }
    results = []
    rl.prompt()
  }
})