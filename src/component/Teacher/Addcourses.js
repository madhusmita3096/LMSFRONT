import axios from 'axios';
import TSidebar from './TSidebar';
import { useState,useEffect } from 'react';
const baseUrl='http://127.0.0.1:8000/api';
function Addcourses(){
    const [cats,setCats]= useState([]);
    const[courseData,setCourseData]=useState({
        category:'',
        title:'',
        description:'',
        featured_img:'',
        techs:''
    });
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/category').then((res)=>{
                //console.log(res.data);
                setCats(res.data)
             
            });
            }catch(error){
             console.log(error);
            }
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
        _formData.append('featured_img',courseData.featured_img,courseData.featured_img.name);
        _formData.append('techs',courseData.techs);
      
      try{
        axios.post(baseUrl+'/course/',_formData,{
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        .then((res)=>{
            //console.log(res.data);
            window.location.href='/addcourses';
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
                        <h5 className="card-header">Addcourses</h5>
                        <div className="card-body">
                        <div className="mb-3 row">
                             <label for="category" className="col-sm-2 col-form-label">Category</label>
                                <div className="col-sm-10">
                                  <select name='category'  onChange={handelChange} className='form-control'>
                                    {cats.map((category,index)=>{return<option key={index} value={category.id}>{category.title}</option>})}
                                  </select>
                                </div>
                        </div>
                        <div className="mb-3 row">
                             <label for="title" className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                  <input type="text"  onChange={handelChange} name='title' className="form-control" id="title" />
                                </div>
                        </div>
                        
                        <div className="mb-3 row">
                     <label for="description" className="col-sm-2 col-form-label">Description</label>
                       <div className="col-sm-10">
                         
                         <textarea className="form-control"  onChange={handelChange} name='description' id="description"></textarea>
                       </div>
                </div> 
                     <div className="mb-3 row">
                             <label for="image" className="col-sm-2 col-form-label">Featured Image</label>
                                <div className="col-sm-10">
                                <input type="file"  onChange={handelFileChange} name='featured_img' className="form-control"  />
                         </div>
                     </div>
                     
                
                <div className="mb-3 row">
                     <label for="inputPassword" className="col-sm-2 col-form-label">Technologies</label>
                       <div className="col-sm-10">
                         
                         <textarea className="form-control"  onChange={handelChange} name='techs' id='techs'></textarea>
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
export default Addcourses;