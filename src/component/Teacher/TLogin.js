import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api';
function TLogin(){

  const[teacherLoginData,setteacherLoginData]=useState({
    email:'',
    password:''
  });

  const handelChange=(event)=>{
    setteacherLoginData({ 
      ...teacherLoginData,
       [event.target.name]:event.target.value
   });
  };
  const submitForm=()=>{
     // console.log(teacherLoginData);
     const teacherFormData= new FormData();
     teacherFormData.append('email',teacherLoginData.email)
     teacherFormData.append('password',teacherLoginData.password)
     try{
     axios.post(baseUrl+'/teacher-login',teacherFormData).then((res)=>{
      //console.log(res.data);
        if(res.data.bool===true){
          localStorage.setItem('teacherLoginStatus','true');
          localStorage.setItem('teacherId',res.data.teacher_id);
          window.location.href='/teacher-dashboard';

        }
     });
     }catch(error){
      console.log(error);
     }
  }

const teacherLoginStatus=localStorage.getItem('teacherLoginStatus');
if(teacherLoginStatus==='true'){
  window.location.href='/teacher-dashboard';
}

  useEffect(()=>{
    document.title='Teacher Login';
 });
    return(
        <div className="container">
          <div className="row">
            <div className="col-8 offset-3">
             <div className="card">
                <h5 className="card-header">Teacher Login</h5>
                  <div className="card-body">
                  
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" value={teacherLoginData.email} name='email' onChange={handelChange} className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={teacherLoginData.password} name='password'  onChange={handelChange} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" onClick={submitForm} className="btn btn-primary">Login</button>

                  </div>
                </div> 
             </div>
            </div>
        </div>
    );
}
export default TLogin;


// ===============

// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from 'axios';
// const baseUrl = 'http://127.0.0.1:8000/api';

// function TLogin() {
//   const [teacherLoginData, setTeacherLoginData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (event) => {
//     setTeacherLoginData({
//       ...teacherLoginData,
//       [event.target.name]: event.target.value
//     });
//   };

//   const submitForm = () => {
//     const teacherFormData = new FormData();
//     teacherFormData.append('email', teacherLoginData.email);
//     teacherFormData.append('password', teacherLoginData.password);

//     try {
//       axios.post(baseUrl + '/teacher-login', teacherFormData).then((res) => {
//         if (res.data.bool === true) {
//           localStorage.setItem('teacherLoginStatus', 'true');
//           localStorage.setItem('teacherId', res.data.teacher_id); // Corrected to setItem
//           window.location.href = '/teacher-dashboard';
//         } else {
//           console.log("Login failed"); // Handle case where login fails
//         }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const teacherLoginStatus = localStorage.getItem('teacherLoginStatus');
//   useEffect(() => {
//     if (teacherLoginStatus === 'true') {
//       window.location.href = '/teacher-dashboard';
//     }
//     document.title = 'Teacher Login';
//   }, [teacherLoginStatus]); // Dependency array added for effect to rerun on status change

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-8 offset-3">
//           <div className="card">
//             <h5 className="card-header">Teacher Login</h5>
//             <div className="card-body">
//               <div className="mb-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
//                 <input
//                   type="email"
//                   value={teacherLoginData.email}
//                   name="email"
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                 <input
//                   type="password"
//                   value={teacherLoginData.password}
//                   name="password"
//                   onChange={handleChange}
//                   className="form-control"
//                   id="exampleInputPassword1"
//                 />
//               </div>
//               <div className="mb-3 form-check">
//                 <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                 <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
//               </div>
//               <button type="submit" onClick={submitForm} className="btn btn-primary">Login</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TLogin;
