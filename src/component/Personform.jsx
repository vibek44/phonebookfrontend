const Personform=(props)=> 
                        <form onSubmit={props.addPerson}>
                        <div>
                        Name: <input   value={props.valuename} 
                        onChange={props.handlePersonInput} />
                        </div>
                        <div>
                        Number: <input  type="number" 
                         value={props.valuenumber} 
                         onChange={props.handlePersonNumber} />
                        </div>
                        <div>
                        <button type="submit"  >add</button>
                        </div>
                        </form>

export default Personform