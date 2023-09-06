
const ArrayExamples = {

    testArray() {
        console.log("hello");

        const employeeArr = [{ name: "Ashsih", address: "Noida" },
                             { name: "Ravi", address: "Noida" },
                             { name: "Vivek", address: "New Delhi" }];

        const emp = employeeArr.filter((x) => x.address == "Noida");
        console.log(emp);

        var mapArray = employeeArr.map((user)=>{
            user.name = user.name + "!!";
            return user;
        });
        console.log(mapArray);

    // destructuring
    const [a,b] = ["Asish","Vivek"];
    console.log(a);
    console.log(b);

    const {name :mName,age} = {name :"Usama", age :30};
    console.log(mName);
    console.log(age);

    // destructuring end
    

    },
};
export default ArrayExamples;   