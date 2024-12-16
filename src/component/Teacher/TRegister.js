import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api/teacher/';
 function TRegister(){
  const[teacherData,setteacherData]=useState({
    'full_name':'',
    'email':'',
    'password':'',
    'qualification':'',
    'mobile_no':'',
    'skills':'',
    'status':''
  });
    //  const handelChange=(event)=>{
    //   console.log(event.target.name,event.target.value)
    //  }

   const handelChange=(event)=>{
      setteacherData({ 
        ...teacherData,
         [event.target.name]:event.target.value
     });
    };
   //console.log(teacherData);

   const submitForm=()=>{
   
    const teacherFormData=new FormData();
    teacherFormData.append("full_name", teacherData.full_name)
    teacherFormData.append("email",teacherData.email)
    teacherFormData.append("password",teacherData.password)
    teacherFormData.append("qualification",teacherData.qualification)
    teacherFormData.append("mobile_no",teacherData.mobile_no)
    teacherFormData.append("skills",teacherData.skills)
    
    try{
    axios.post(baseUrl,teacherFormData).then((response)=>{
      console.log(response.data);
      });
    }catch(error){
      console.log(error);
    }
    
   };

   
    useEffect(()=>{
       document.title='Teacher Register';
    });


    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
if(teacherLoginStatus=='true'){
  window.location.href='/teacher-dashboard';
}
    return(
        <div className="container">
          <div className="row">
            <div className="col-8 offset-3">
             <div className="card">
                <h5 className="card-header">Teacher Registration</h5>
                  <div className="card-body">
               {/*   <form onSubmit={submitForm}>*/}
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Full Name</label>
    <input onChange={handelChange} name= "full_name" type="text" className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input onChange={handelChange} name="email" type="email" className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={handelChange} name="password" type="password" className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Qualification</label>
    <input onChange={handelChange} name="qualification"  type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Mobile Number</label>
    <input onChange={handelChange} name="mobile_no" type="number" className="form-control"/>
  </div>
  
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Skills</label>
    <textarea onChange={handelChange} name="skills" className="form-control"></textarea>
    
  </div>
  
  <button onClick={submitForm} type="submit" className="btn btn-primary">Register</button>
               {/*   </form>*/}

                  </div>
                </div> 
             </div>
            </div>
        </div>
    );
}
export default TRegister;