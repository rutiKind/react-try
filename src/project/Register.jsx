import React, { useState } from "react";
import { useRef } from 'react'
// import { swal } from "sweetalert/typings/core";
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { setPerson,AddP } from "./Redux/Action";
debugger
export const Regiester = () => {
  const Dispatch=useDispatch()
  const Nav=useNavigate()
  debugger
  //const users = useSelector(x => x.Customers)
  

  const checkEmailIntegrity = (email) => {
    // Basic email integrity check
    if (email.includes("@") && email.includes(".")) {
      return true;
    }
    return false;
  };

  const registerCustomer = (Customer) => {
    // Check if the customer with the same email already exists
    // const existingCustomer = Customer.filter(
    //   (C) => C.password === password
    // );
//     if (existingCustomer) {
//       setAlertMessage("Customer with this email already exists.");
//       return false;
//     }
//     else
//         return true;
// }
  }
const [alertMessage,setAlertMessage]=useState()
const send =(event)=>{
  event.preventDefault()
    
      const Customer = {
          name: event.target[0].value,
          password: event.target[1].value,
          email: event.target[2].value
          
      }
      Dispatch(AddP(Customer))
    //   add to state
      if(checkEmailIntegrity(Customer.email)&&registerCustomer(Customer))
      {
          Dispatch(AddP(Customer))
          Dispatch(setPerson(Customer))
          Nav(`/Home/`)
      }
      if(checkEmailIntegrity(Customer.email)==false){
          setAlertMessage("Invalid email. Redirecting to registration...");
      }
      if(registerCustomer(Customer)==false){
          setAlertMessage("Customer with this email already exists."); 
      }
}


  return (
    <div>
      <nav>
        {/* Navigation | Connected Client: {connectedClientName} */}
      </nav>
      <h1>Home Page</h1>
      Display advertisements, logos, photos, etc.
      {/* //onSubmit={(e) => send(e)} */}
      <h2>Registration</h2>
      <form onSubmit={(e) => send(e)} >
//             <label htmlFor={'name'}>name:</label><br></br>
//             <input id={'name'} placeholder={'input name'}></input>
//             <br></br>
//        <label/>
//        <label htmlFor={'pass'}>passwors</label><br></br>
//        <input id={'pass'} placeholder={'input password'}></input>
//        <label htmlFor={'email'}>email</label><br></br>
//        <input id={'email'} placeholder={'input email'}></input>
//         <button type="submit" >Register</button><br></br>
//       </form>
//       {/* <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <h2>All Recipes</h2> */}
//       {/* Display all recipes with appropriate styling */}
//       {/* {alertMessage && <p>{alertMessage}</p>} */}
//     </div>
   );
 }

// // export const AddP = () => {
// //   debugger
// //   const dispatch = useDispatch()
  
// //   // const list = useSelector(x => x.products)

// //   const send = (event) => {
// //       event.preventDefault()
      
// //       const Customer = {
// //           name: event.target[0].value,
// //           password: event.target[1].value,
// //       }
// //       //add to state
// //       //הפעלת פעולה על הסטור באמצעות דיספאצ
    
// //       dispatch(AddP(Customer))

      
// //   }
// // }
// // export default Regiester;


// //////////////////////////////////////////
// //   let connectedClientName = useRef()
// //   let customers=useRef()
// //   let email = useRef()
// //   let password = useRef()
// //   const [alertMessage, setAlertMessage] = useState("");

// //   const checkEmailIntegrity = (email) => {
// //     // Basic email integrity check
// //     if (email.includes("@") && email.includes(".")) {
// //       return true;
// //     }
// //     return false;
// //   };

// //   const registerCustomer = () => {
// //     // Check if the customer with the same email already exists
// //     const existingCustomer = customers.find(
// //       (customer) => customer.email === email
// //     );
// //     if (existingCustomer) {
// //       setAlertMessage("Customer with this email already exists.");
// //       return;
// //     }
// //   };
// //     // Register the new customer
// //     const newCustomer = { email, password };
// //     let nav = useNavigate()
// //     const dispatch = useDispatch()

// //     //     const AddP = () => {
// //     //         swal("Hello!", "you move to page that you can add product!", "success");
// //     //          // ניתוב מתוך קומפוננטה לניתוב כלךשהו שהוגדר בדף הראוטינג
// //     //            nav(`AddP/${newCustomer.email}/${newCustomer.password}`)}
// //     // setAlertMessage("Customer registered successfully!");
  



// //   //   if (existingCustomer) {
// //   //     setConnectedClientName(existingCustomer.name || "Anonymous");
// //   //     setAlertMessage("Customer logged in successfully!");
// //   //   } else {
// //   //     setAlertMessage("Invalid email or password. Redirecting to registration...");
// //   //     // Redirect to the registration form
// //   //     // You can change this to the appropriate redirect method in your application
// //   //   }
// //   // };
// //   const handleRegister = (e) => {
// //     e.preventDefault();
// //     if (checkEmailIntegrity(email)) {
// //       registerCustomer();
// //     } else {
// //       setAlertMessage("Invalid email format.");
// //     }
// //   };

// //   // const handleLogin = (e) => {
// //   //   e.preventDefault();
// //   //   loginCustomer();
// //   // };
  
// //   const send = (event) => {
// //     event.preventDefault()
    
// //     const Customer = {
// //         name: event.target[0].value,
// //         password: event.target[1].value,
// //     }
// //     //add to state
// //     //הפעלת פעולה על הסטור באמצעות דיספאצ
  
// //     dispatch(AddP(Customer))
// //   }