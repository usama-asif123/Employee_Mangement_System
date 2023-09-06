
import './App.css';
import ArrayExamples from './playground/ArrayExamples';
import Employee from './components/Employee/Employee';
import Student from './components/Student/Student';

//ArrayExamples.testArray();

function App() {
  const users = [
    {
      name :"Usama",
      age :30 ,
      joiningDate : new Date(2023, 0, 15)
    },
    {
      name :"Saif",
      age :23 ,
      joiningDate : new Date(2023, 0, 15)
    }
  ];

const stud = [{
  name : "usama",address:"Noida"
}];


  return (
    <div>
      <Employee name={users[0].name} age={users[0].age} date={users[0].joiningDate}></Employee>
      <Student fname ={stud[0].name} addr={stud[0].address}> </Student>
      {/* <Employee name={users[0].name} age={users[0].age} joiningDate={users[0].joiningDate}></Employee> */}

    </div>


  );
}

export default App;
