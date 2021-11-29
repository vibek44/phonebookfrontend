import {Person} from "./Person"

export const Tableinfo=({filteredContact, handleRemove})=><table>
                                   <tbody>
                                        <tr>
                                             <th> Name</th>
                                             <th>Phone no</th>
                                        </tr>
                                        {filteredContact.map((person)=><Person
                                             key={person.id}
                                             person={person} 
                                             handleRemove={()=>handleRemove(person.id,person.name)}/>
                                        )}
                                   </tbody>
                              </table>

  