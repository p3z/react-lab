import './UserInterface.css';

function UserInterface() {
  return (
    <div className="card" >

      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
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
