import {Person} from "./Person"

export const Tableinfo=({filteredContact, handleRemove})=><table>
                                   <caption>Contact list</caption>
                                   <tbody>
                                        <tr>
                                             <th> Name</th>
                                             <th>Phone no</th>
                                             <th>Action</th>
                                        </tr>
                                        {filteredContact.map((person)=><Person
                                             key={person.id}
                                             person={person} 
                                             handleRemove={()=>handleRemove(person.id,person.name)}/>
                                        )}
                                   </tbody>
                              </table>

  