import Swal from 'sweetalert2'; //40
import axios from 'axios';
import TSidebar from './TSidebar';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
const baseUrl='http://127.0.0.1:8000/api';
function EditCourse(){
    const [cats,setCats]= useState([]);
    const[courseData,setCourseData]=useState({
        category:'',
        title:'',
        description:'',
        prev_fimg:'',
        featured_img:'',
        techs:''
    });
    const{course_id}=useParams();
    //fetch the categories
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/category').then((res)=>{
                //console.log(res.data);
                setCats(res.data)
             
            });
            }catch(error){
             console.log(error);
            }
          //fetch the current data
          try{
            axios.get(baseUrl+'/tmycourses-detail/'+course_id)
            .then((res)=>{
                //console.log(res.data);
                // settotalResult(res.data.length);
                setCourseData({
                    category:res.data.category,
                    title:res.data.title,
                    description:res.data.description,
                    prev_fimg:res.data.featured_img,
                    featured_img:'',
                    techs:res.data.techs,
                    });
             
            });
            }catch(error){
             console.log(error);
            }
          //end
         },[]);
      //   console.log(cats);
      const handelChange=(event)=>{
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.value
        });
      }
      const handelFileChange=(event)=>{
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.files[0]
        });
      }

      const formSubmit=()=>{
        const _formData=new FormData();
        _formData.append('category',courseData.category);
        _formData.append('teacher',1);
        _formData.append('title',courseData.title);
        _formData.append('description',courseData.description);
        if(courseData.featured_img!==''){
        _formData.append('featured_img',courseData.featured_img,courseData.featured_img.name);
        }
        _formData.append('techs',courseData.techs);
      
      try{
        axios.put(baseUrl+'/tmycourses-detail/'+course_id,_formData,{
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        .then((res)=>{
             if(res.status===200){
                Swal.fire({
                    title: 'Data has been Updated',
                    icon:'success',
                    toast:true,
                    timer:3000,
                    position:'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false
                });           
                }
        });
        }catch(error){
         console.log(error);
        }
     };
    return(
         <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TSidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Edit Course</h5>
                        <div className="card-body">
                        <div className="mb-3 row">
                             <label for="category" className="col-sm-2 col-form-label">Category</label>
                                <div className="col-sm-10">
                                  <select name='category' value={courseData.category} onChange={handelChange} className='form-control'>
                                    {cats.map((category,index)=>{return<option key={index} value={category.id}>{category.title}</option>})}
                                  </select>
                                </div>
                        </div>
                        <div className="mb-3 row">
                             <label for="title" className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                  <input type="text" value={courseData.title} onChange={handelChange} name='title' className="form-control" id="title" />
                                </div>
                        </div>
                        
                        <div className="mb-3 row">
                     <label for="description" className="col-sm-2 col-form-label">Description</label>
                       <div className="col-sm-10">
                         
                         <textarea className="form-control" value={courseData.description} onChange={handelChange} name='description' id="description"></textarea>
                       </div>
                </div> 
                     <div className="mb-3 row">
                             <label for="image" className="col-sm-2 col-form-label">Featured Image</label>
                                <div className="col-sm-10">
                                <input type="file"  onChange={handelFileChange} name='featured_img' className="form-control"  />
                                {courseData.prev_fimg &&
                                       <img src={courseData.prev_fimg} width="300"/>
                                }
                         </div>
                     </div>
                     
                
                <div className="mb-3 row">
                     <label for="inputPassword" className="col-sm-2 col-form-label">Technologies</label>
                       <div className="col-sm-10">
                         
                         <textarea className="form-control" value={courseData.techs} onChange={handelChange} name='techs' id='techs'></textarea>
                       </div>
                </div>

                
                    <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
                
                        </div>
                    </div>
               
                </section>
            </div>
         </div>
    );
}
export default EditCourse;