
import React, { useState,useEffect } from 'react'
import Search from './component/Search'
import Contactform from './component/Contactform'
import {Tableinfo} from './component/Tableinfo'
import personService from './services/person'
import Notification from './component/Notification'


const App = () => {
 const [ persons, setPersons ] = useState([]) 

 const [ newName, setNewName ] = useState('')

 const [ newNumber, setNewNumber ] = useState('')

 const [ search, setSearch ] = useState('')

 const [ notification, setNotification ] = useState({message:null,errormessage:null})

 const filteredContact=persons.filter((el)=>el.name.toUpperCase().includes(search.toUpperCase()))

 const handleNameChange=(event)=>setNewName(event.target.value)

 const handleNumberChange=(event)=>setNewNumber(event.target.value)

 const handleFiltered=(event)=>setSearch(event.target.value)

 useEffect(()=>{
   personService
   .getAll()
   .then(initialpersons=>setPersons(initialpersons))
  },[]) 
 
 const addPerson=(event)=>{
  event.preventDefault()
  if(newName&&newNumber) {  // section to edit existing user information
    let person=persons.find((el)=>el.name.toLowerCase()===newName.trim().toLowerCase());
    if(person) {
      alert(`${newName} is already added to phonebook,Replace old number with new`)
      const changedperson={...person,number:newNumber}
      personService
      .update(person.id,changedperson)
      .then(responsedata=>{
        setPersons(persons.map((el)=>person.id!==el.id ? el:responsedata))
        setNewName('')
        setNewNumber('')
        setNotification(
          { ...notification,message:`changed number from ${person.number} to ${responsedata.number}` }
        )
        setTimeout(()=>{
        setNotification({ ...notification,message:null})}, 5000) 
        })
      .catch(error=>{
        setNotification({...notification,errormessage:error.response.data.error}) 
        setTimeout(()=>{
        setNotification({ ...notification,errormessage:null})}, 5000)
      })}else {   //section for adding new user
          const newperson={
            name:newName,
            number:newNumber
        }
         personService
           .create(newperson)
           .then(returnedPerson=>{
              setPersons(persons.concat(returnedPerson))
              setNotification({...notification,message:`${returnedPerson.name} added.`})   
              setNewName('') 
              setNewNumber('')
              setTimeout(()=>{
              setNotification({...notification,message:null})},5000)
            }).catch(error=>{
                setNotification({...notification,errormessage:error.response.data.error})
                setTimeout(()=>{
                  setNotification({ ...notification,errormessage:null})}, 5000)
              })
             
      }
    }else{ 
       setNotification({...notification,errormessage:'name or number is missing'})
        setTimeout(()=>{
        setNotification({...notification,errormessage:null})},5000)
      }
  }

 const removePerson=(id,name)=>{
   window.confirm(`Delete ${name} ?`)
   personService.remove(id)
     setNotification({...notification,message:`Removed ${name}`})
   setTimeout(()=>{
     setNotification({...notification,message:null})},3000)
     setPersons(persons.filter((person)=>id!==person.id))
  }

 return(
   <div className="main-container">
     <h1>Phonebook</h1>
     {(notification.message||notification.errormessage)&& <Notification notification={notification}/>}
     <Search  value={search} handleFiltered={handleFiltered}/>
     <Contactform addPerson={addPerson} 
       valuename={newName}
       valuenumber={newNumber}
       handleNameChange={handleNameChange}
       handleNumberChange={handleNumberChange} />
     {(filteredContact.length>0) ? <Tableinfo 
       filteredContact={filteredContact}  
       handleRemove={removePerson} />:<p className="no_contact">No contacts found.</p>
      }
   </div>
  )
}



export default App;
