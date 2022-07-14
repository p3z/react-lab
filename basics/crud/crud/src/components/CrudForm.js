import { useState } from 'react';
import './CrudForm.css';


function CrudForm() {

  const [test_value, set_test_value] = useState("nahhh bruhhh");


  return (
    
    <form  >

      <div className="form-group">
        <label for="input-field-1">Test input field</label>
        <input type="text" className="form-control" id="input-field-1" placeholder="Enter something bruh..." value = { test_value}/>
      </div>
      <br/>
      
      
      <button onClick = { (e) => { e.preventDefault(); console.log("Clicked"); set_test_value("Yahhh bruhhhh") }} type="submit" className="btn btn-primary">Submit</button>
    </form>

    
  );
}

export default CrudForm;
