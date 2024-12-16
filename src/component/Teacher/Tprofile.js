
import axios from 'axios';
import TSidebar from './TSidebar';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
const baseUrl='http://127.0.0.1:8000/api';
function TProfileSetting(){

  const[teacherData,setteacherData]=useState({
    'full_name':'',
    'email':'',
    'password':'',
    'qualification':'',
    'mobile_no':'',
    'skills':'',
    'status':''
  });
  const teacherId=localStorage.getItem('teacherId');
  
  const handelChange=(event)=>{
    setteacherData({ 
      ...teacherData,
       [event.target.name]:event.target.value
   });
  };
  //end
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
      setteacherData({
        'full_name':'',
        'email':'',
        'password':'',
        'qualification':'',
        'mobile_no':'',
        'skills':'',
        'status':'success'
      })
      });
    }catch(error){
      console.log(error);
      setteacherData({ 'status':'error'})
    }
    
   };
//end

useEffect(()=>{
  document.title='Teacher Register';
});


const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
if(teacherLoginStatus!=='true'){
window.location.href='/teacher-login';
}
    return(
         <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TSidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Profile Stting</h5>
                        <div className="card-body">
                        <div className="mb-3 row">
                             <label for="staticEmail" className="col-sm-2 col-form-label">FULL Name</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="staticEmail" />
                                </div>
                        </div>
                          <div className="mb-3 row">
                             <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="staticEmail" />
                         </div>
                     </div>
                     <div className="mb-3 row">
                             <label for="staticEmail" className="col-sm-2 col-form-label">Profile Phpto</label>
                                <div className="col-sm-10">
                                <input type="file" className="form-control" id="staticEmail" />
                         </div>
                     </div>
                     <div className="mb-3 row">
                     <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                       <div className="col-sm-10">
                         <input type="password" className="form-control" id="inputPassword"/>
                       </div>
                </div>
                <div className="mb-3 row">
                     <label for="inputPassword" className="col-sm-2 col-form-label">Skills</label>
                       <div className="col-sm-10">
                         <input type="text" className="form-control" id="inputPassword"/>
                       </div>
                </div>
                <div className="mb-3 row">
                     <label for="inputPassword" className="col-sm-2 col-form-label">Qualification</label>
                       <div className="col-sm-10">
                         <input type="text" className="form-control" id="inputPassword"/>
                       </div>
                </div>
                <hr/>
                    <button className="btn btn-primary">Update</button>
                
                        </div>
                    </div>
               
                </section>
            </div>
         </div>
    );
}
export default TProfileSetting;