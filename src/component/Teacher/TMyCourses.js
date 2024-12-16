import { Link } from "react-router-dom";
import TSidebar from './TSidebar';
import { useState,useEffect } from 'react';
import axios from "axios";
const baseUrl='http://127.0.0.1:8000/api';

function TMyCourses(){
    const[courseData,setCourseData]=useState([]);
    const teacherId=localStorage.getItem('teacherId');
    console.log(teacherId);
    
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/tmycourses/1')
            .then((res)=>{
                //console.log(res.data);
                setCourseData(res.data)
             
            });
            }catch(error){
             console.log(error);
            }
         },[]);
    //   console.log(courseData);
    
    return(
         <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TSidebar/>
                </aside>

                <section className="col-md-9">
                    <div className="card">
        <h5 className="card-header">My Courses</h5>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Total Enrolled</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseData.map((course,index)=>
                        <tr>
                        <td><Link to={"/all-chapter/"+course.id}>{course.title}</Link></td>
                        {/* <td>{course.title}</td> */}

                        <td><img src={course.featured_img} width="80" className='rounded' alt={course.title}/></td>
                        <td><Link to="/">123</Link></td>
                        <td>
                            <Link class='btn btn-info btn-sm ms-2' to={'/editcourse/'+course.id}> Edit</Link>                  

                            <Link class='btn btn-success btn-sm ms-2' to={'/add-chapter/'+course.id}> Add Chapter</Link>                  
                            {/* <Link class='btn btn-success btn-sm ms-2' to={'/add-chapter/'+course.id}> Add Chapter</Link>                   */}
                            <button className="btn btn-danger btn-sm ms-2">Delete</button>

                        </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

                </section>
            </div>
         </div>
    );
}
export default TMyCourses;

// Updated code:

// import { Link } from "react-router-dom";
// import TSidebar from './TSidebar';
// import { useState, useEffect } from 'react';
// import axios from "axios";

// const baseUrl = 'http://127.0.0.1:8000/api';

// function TMyCourses() {
//     const [courseData, setCourseData] = useState([]);
    
//     // Fetch the teacher's ID from localStorage
//     const teacherId = localStorage.getItem('teacherId');
    
//     // Log the teacher's ID to the console for debugging
//     console.log("Teacher ID: ", teacherId);

//     // Ensure teacherId is available before making the request
//     useEffect(() => {
//         if (!teacherId) {
//             console.log("Teacher ID is not set in localStorage.");
//             return;
//         }

//         // Make an API request to fetch the courses for the logged-in teacher
//         axios.get(`${baseUrl}/tmycourses/${teacherId}`)
//             .then((res) => {
//                 // Set the fetched courses data
//                 setCourseData(res.data);
//             })
//             .catch((error) => {
//                 console.log("Error fetching courses: ", error);
//             });
//     }, [teacherId]); // Depend on teacherId to refetch if it changes

//     return (
//         <div className="container mt-4">
//             <div className="row">
//                 <aside className="col-md-3">
//                     <TSidebar />
//                 </aside>

//                 <section className="col-md-9">
//                     <div className="card">
//                         <h5 className="card-header">My Courses</h5>
//                         <div className="card-body">
//                             <table className="table table-bordered">
//                                 <thead>
//                                     <tr>
//                                         <th>Name</th>
//                                         <th>Image</th>
//                                         <th>Total Enrolled</th>
//                                         <th>Action</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {courseData.map((course, index) =>
//                                         <tr key={index}>
//                                             <td>{course.title}</td>
//                                             <td><img src={course.featured_img} width="80" className='rounded' alt={course.title} /></td>
//                                             <td><Link to="/">123</Link></td>
//                                             <td>
//                                                 <button className="btn btn-danger btn-sm">Delete</button>
//                                                 <Link className='btn btn-success btn-sm ms-2' to={`add-chapter/${course.id}`}>Add Chapter</Link>
//                                             </td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// }

// export default TMyCourses;

