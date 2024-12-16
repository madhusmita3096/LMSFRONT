//54
import axios from 'axios';
import TSidebar from './TSidebar';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
const baseUrl='http://127.0.0.1:8000/api';
function TProfileSetting(){

  const[teacherData,setteacherData]=useState({
    'full_name':'',
    'email':'',
    'qualification':'',
    'mobile_no':'',
    'skills':'',
    'status':''
  });
  const teacherId=localStorage.getItem('teacherId');
  
  useEffect(()=>{
    //fetch current teacher data
    try{
      axios.get(baseUrl+'/teacher/'+teacherId)
      .then((res)=>{
        setteacherData({
          full_name:res.data.full_name,
          email:res.data.email,
          qualification:res.data.qualification,
          mobile_no:res.data.mobile_no,
          skills:res.data.skills,
          
        });
      });
    }catch(error){
      console.log(error);
    }
    //end
  },[]);

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
    teacherFormData.append("qualification",teacherData.qualification)
    teacherFormData.append("mobile_no",teacherData.mobile_no)
    teacherFormData.append("skills",teacherData.skills)
    
    try{
    axios.put(baseUrl+'/teacher/'+teacherId+'/',teacherFormData).then((response)=>{
      setteacherData({
        'full_name':'',
        'email':'',
       
        'qualification':'',
        'mobile_no':'',
        'skills':'',
        // 'status':'success'
      })
      });
    }catch(error){
      console.log(error);
      // setteacherData({ 'status':'error'})
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
                <h5 className="card-header">Profile Setting</h5>
                  <div className="card-body">
               {/*   <form onSubmit={submitForm}>*/}
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Full Name</label>
    <input value={teacherData.full_name} onChange={handelChange} name= "full_name" type="text" className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input value={teacherData.email}  onChange={handelChange} name="email" type="email" className="form-control"/>
  </div>
  {/* <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Profile Photo</label>
    <input value={teacherData.full_name}  onChange={handelChange} name="password" type="password" className="form-control"/>
  </div> */}
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Qualification</label>
    <input value={teacherData.qualification}  onChange={handelChange} name="qualification"  type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Mobile Number</label>
    <input value={teacherData.mobile_no}  onChange={handelChange} name="mobile_no" type="number" className="form-control"/>
  </div>
  
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Skills</label>
    <textarea value={teacherData.skills}  onChange={handelChange} name="skills" className="form-control"></textarea>
    
  </div>
  
  <button onClick={submitForm} type="submit" className="btn btn-primary">Update</button>
               {/*   </form>*/}

                  </div>
                </div> 
               
                </section>
            </div>
         </div>
    );
}
export default TProfileSetting;