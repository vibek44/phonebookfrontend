import axios from 'axios'
const baseurl='http://localhost:3001/api/persons'

const getAll=()=>{
    const request=axios.get(baseurl)
    return request.then((response)=>response.data)
}

const create=(newObject)=>{
    const request=(axios.post(baseurl,newObject))
    return request.then((response)=>response.data)
    }

const update=(id,changedperson)=>{
    const request=(axios.put(`${baseurl}/${id}`,changedperson))
    return request.then((response)=>response.data)
}

const remove=(id)=>{
   const request= axios.delete(`${baseurl}/${id}`)
   return request.then((response)=>response.data) 
}

const personService={ getAll,create,remove,update }

export default personService
