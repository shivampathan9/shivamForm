import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //  const [firstName, setFirstName] = useState("");
  //  const [lastName, setLastName] =useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstHandler(event) {
  //   // console.log("printing first name")
  //   //   console.log(event.target.value);
  //   setFirstName(event.target.value)
  // }
  // function changeLastHandler(event) {
  //   // console.log("printing last name")
  //   // console.log(event.target.value);
  //   setLastName(event.target.value)

  // }



  const [formData, setFormData] = useState({firstName: "", lastName: "", email:"",
    comments:"", isVisible:true, mode:"", favCar:""});
  
  function changeHandler(event) {
    const {name, value, checked, type}  = event.target
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name]: type==="checkbox" ? checked: value
      }
    });
  }
  function submitHandler(event){
    event.preventDefault();
    // print
    console.log("Finally the entireform ka data....")
    console.log(formData);
  }
  
  return (
    <div className="App">
     <form onSubmit={submitHandler}>
      <input 
      type ="text"
      placeholder="first name"
      onChange ={changeHandler}
      name='firstName'
      value={formData.firstName}
      />
      <br/>
      <br>
      </br>


       <input 
      type ="text"
      placeholder="Last name"
      onChange ={changeHandler}
      name='lastName'
      value={formData.lastName}
      />

      <br/>
      <br></br>



      <input
      type='email'
      placeholder='Email'
      onChange ={changeHandler}
      name='email'
      value={formData.email }
      />

<br/>
<br></br>

     <textarea 
     placeholder='enter your comment'
     onChange={changeHandler}
     name='comments'
     value={formData.Comment}
     />

<br/>
<br></br>

     <input 
     type='checkbox'
     onChange={changeHandler}
     name='isVisible'
     id='isVisible'
     checked={formData.isVisible}
     />
     <lable htmlFor='isVisible'>AM i visvile</lable>

     <br/>
     <br></br>

     <fieldset>
      <legend>Mode:</legend>
      <input
     type='radio'
     onChange={changeHandler}
     name='mode'
     value="Online-Mode"
     id='Online-Mode'
     checked={formData.mode === "Online-Mode"}
     
     />
     <label htmlFor='Online-Mode'>Online Mode</label>

     <input
     type='radio'
     onChange={changeHandler}
     name='mode'
     value="Offline-Mode"
     id='Offline-Mode'
     checked={formData.mode === "Offline-Mode"}
     />
     <label htmlFor='Offline-Mode'>Online Mode</label>
     </fieldset>

     
     <br/>
     <br></br>

     <label htmlFor='favCar'>Tell me your fav. car</label>
     <select
     onChange={changeHandler}
      name="favCar"
      id='favCar'
      value={(formData.favCar)}
     >
      <option value="scorpio">Scorpio</option>
      <option value="fartunar">fartunar</option>
      <option value="thar">thar</option>
      <option value="legender">legender</option>
      <option value="defendar">defendar</option>
     </select>

     <br/>
     <br></br>

     <button>Summit</button>
     

    



     <br/>
     <br></br>


     
     </form>
    </div>
  );
}

export default App;
