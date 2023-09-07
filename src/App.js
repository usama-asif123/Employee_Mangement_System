
import './App.css';
import ArrayExamples from './playground/ArrayExamples';
import Employee from './components/Employee/Employee';
// import Student from './components/Student/Student';

ArrayExamples.testArray();

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

  return (
    <div>
      <Employee name={users[0].name} age={users[0].age} date={users[0].joiningDate}></Employee>
      <Employee name={users[1].name} age={users[1].age} date={users[1].joiningDate}></Employee>
    </div>
  );
}

export default App;
