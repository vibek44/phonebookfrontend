const Contactform=(props)=> <form  className="contactform-container" onSubmit={props.addPerson}>
                              <fieldset> 
                                <legend>Add contact</legend>
                                <div>
                                    Name: 
                                    <input   value={props.valuename} 
                                    onChange={props.handleNameChange} />
                                </div>
                                <div>
                                Number: 
                                <input  type="number" 
                                    value={props.valuenumber} 
                                    onChange={props.handleNumberChange} />
                                </div>
                              
                                <button type="submit"  >add</button>
                               
                              </fieldset>
                          </form>

export default Contactform;