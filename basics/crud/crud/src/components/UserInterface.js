import './UserInterface.css';
import CrudForm from './CrudForm';

function UserInterface() {
  return (
    <div className="card " >

      <CrudForm></CrudForm>

      

      <ul className="list-group list-group-flush">
      

        {/* Generated these from the db file when working */}
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-footer">
        Card footer
      </div>
    </div>

    
  );
}

export default UserInterface;
