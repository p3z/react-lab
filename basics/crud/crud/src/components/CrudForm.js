import './CrudForm.css';


function CrudForm() {


  return (
    
    <form /* onclick = { } */>

      <div className="form-group">
        <label for="input-field-1">Test input field</label>
        <input type="text" className="form-control" id="input-field-1" placeholder="Enter something bruh..." />
      </div>
      <br/>
      
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    
  );
}

export default CrudForm;
