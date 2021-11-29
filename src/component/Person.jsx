
import React from 'react'

export const Person=({person,handleRemove})=> <tr>
     <td>
        {person.name} 
     </td>
     <td>
        {person.number}  <button onClick={handleRemove }>delete</button>
     </td>
</tr>

