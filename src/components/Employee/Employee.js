import StateComponent from '../State/Statecomponents';
import './Employee.css';

// props are the properties
  function Employee(props){  

    return (
        <div className="wrapper">
            <h2>Employee Details</h2>
            <div> Employee Name  </div>
            <div> {props.name}  </div>
            <hr></hr>
            <div> Age</div>
            <div> {props.age}</div>
            <hr></hr>
            <div> Joining date</div>
            <div>{props.date.toDateString()}</div>
            <hr></hr> 
            <StateComponent title = {props.name} ></StateComponent>
        </div>
    )
}
export default Employee;