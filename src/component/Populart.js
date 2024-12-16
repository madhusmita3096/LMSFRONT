import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';
 const baseUrl='http://127.0.0.1:8000/api';
 function Populart(){
  const [teacher,setTeacher]=useState(null);
  useEffect(()=>{
    axios.get(baseUrl+'/teacher/').then((response)=>{
     // console.log(response.data);
     setTeacher(response.data);
    });
    
  },[]);
  console.log(teacher);
    return( 
        <div className="container mt-3">
        {/* Popular Teachers */}
  <h3 className="pb-1 mb-4">Popular Teachers</h3>
  <div className="row mb-4">
      <div className="col-md-3">
        <div className="card">
          <a href="#"><img src="teacher4.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
           <h5 className="card-title"><a href="#">Teacher Name</a></h5>
          </div>
       </div>
     </div>
     <div className="col-md-3">
       <div className="card">
         <a href="#"><img src="teacher1.jpg" className="card-img-top" alt="..."/></a>
         <div className="card-body">
           <h5 className="card-title"><a href="#">Teacher Name</a></h5>
         </div>
       </div>
     </div>
     <div className="col-md-3">
       <div className="card">
         <a href="#"><img src="teacher5.jpg" className="card-img-top" alt="..."/></a>
         <div className="card-body">
           <h5 className="card-title"><a href="#">Teacher Name</a></h5>
         </div>
       </div>
     </div>

     <div className="col-md-3">
       <div className="card">
         <a href="#"><img src="teacher2.jpg" className="card-img-top" alt="..."/></a>
         <div className="card-body">
           <h5 className="card-title"><a href="#">Teacher Name</a></h5>
         </div>
       </div>
     </div>
     <div className="col-md-3">
        <div className="card">
          <a href="#"><img src="teacher4.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
           <h5 className="card-title"><a href="#">Teacher Name</a></h5>
          </div>
       </div>
       </div>
       <div className="col-md-3">
        <div className="card">
          <a href="#"><img src="teacher4.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
           <h5 className="card-title"><a href="#">Teacher Name</a></h5>
          </div>
       </div>
       </div>
       <div className="col-md-3">
        <div className="card">
          <a href="#"><img src="teacher4.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
           <h5 className="card-title"><a href="#">Teacher Name</a></h5>
          </div>
       </div>
       </div>
       <div className="col-md-3">
        <div className="card">
          <a href="#"><img src="teacher4.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
           <h5 className="card-title"><a href="#">Teacher Name</a></h5>
          </div>
       </div>
       </div>
    </div>
    {/* Popular Teachers */}
    </div>
    );
}
export default Populart;