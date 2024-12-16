import axios from 'axios';
import TSidebar from './TSidebar';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
const baseUrl='http://127.0.0.1:8000/api';
// import Swal from 'sweetalert2';


function CourseChapters(){

    const[chapterData,setChapterData]=useState([]);
    const[totalResult,settotalResult]=useState([0]);
    const {course_id}=useParams();
   // console.log(teacherId);
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/course-chapter/'+course_id)
            .then((res)=>{
                //console.log(res.data);
                settotalResult(res.data.length);
                setChapterData(res.data);
             
            });
            }catch(error){
             console.log(error);
            }
         },[]);
    //Delete data
    const Swal= require('sweetalert2');
    
    const handeleDeleteClick=(chapter_id)=>{
        console.log("Delete button clicked for chapter:", chapter_id); // Test if this runs
        Swal.fire({
            title: 'Confim',
            text: 'Are you sure you want to delete this data?',
            icon:'info',
            confirmButtonText: 'Continue',
            showCancelButton:true
        });
        
    }
    return(
        <div className="container mt-4">
           <div className="row">
               <aside className="col-md-3">
                   <TSidebar/>
               </aside>

               <section className="col-md-9">
                   <div className="card">
                     <h5 className="card-header">All Chapter  ({totalResult})</h5>
                       <div className="card-body">
                       <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Video</th>
                            <th>Remarks</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chapterData.map((chapter,index)=>
                        <tr>
                        <td><Link to={'/edit-chapter/'+chapter.id}>{chapter.title}</Link></td>
                        <td>
                            <video controls width="250">
                                <source src={chapter.video.url} type='video/webm'></source>
                                <source src={chapter.video.url} type='video/mp4'></source>

                            </video>
                        </td>
                        <td>{chapter.remarks}</td>
                        <td>
                            <Link to={'/edit-chapter/'+chapter.id} className="btn btn-info ms-1">Edit</Link>

                            <button  onClick={() => handeleDeleteClick(chapter.id)} className="btn btn-danger ms-1">Delete</button>
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
export default CourseChapters;