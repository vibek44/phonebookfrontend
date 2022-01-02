
import React from 'react'

export const Person=({person,handleRemove})=> <tr>
     <td>
        {person.name} 
     </td>
     <td>
        {person.number} 
     </td>
     <td>
     <button onClick={handleRemove }>delete</button>
     </td>
</tr>

