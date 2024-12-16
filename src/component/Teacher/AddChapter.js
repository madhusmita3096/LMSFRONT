import axios from 'axios';
import TSidebar from './TSidebar';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
const baseUrl='http://127.0.0.1:8000/api';
function AddChapter(){
   
    const[chapterData,setChapterData]=useState({
        
        title:'',
        description:'',
        video:'',
        remarks:''
    });
 
      //   console.log(cats);
      const handelChange=(event)=>{
        setChapterData({
            ...chapterData,
            [event.target.name]:event.target.value
        });
      }
      const handelFileChange=(event)=>{
        setChapterData({
            ...chapterData,
            [event.target.name]:event.target.files[0]
        });
      }
      const {course_id}=useParams();
      
      const formSubmit=()=>{
        const _formData=new FormData();
        _formData.append('course',course_id);
        _formData.append('title',chapterData.title);
        _formData.append('description',chapterData.description);
        _formData.append('video',chapterData.video,chapterData.video.name);
        _formData.append('remarks',chapterData.remarks);
      
      try{
        axios.post(baseUrl+'/chapter/',_formData,{
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        .then((res)=>{
            //console.log(res.data);
            window.location.href='/add-chapter/1';
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
            <div className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Add Chapter</h5>
                    <div className="card-body">
                   <form>
                    <div className="mb-3">
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
                         <label for="video" className="col-sm-2 col-form-label">Video</label>
                            <div className="col-sm-10">
                            <input type="file"  onChange={handelFileChange} name='video' className="form-control"  />
                     </div>
                 </div>
                 
            
            <div className="mb-3 row">
                 <label for="remarks" className="col-sm-2 col-form-label">Remarks</label>
                   <div className="col-sm-10">
                     
                     <textarea className="form-control"  onChange={handelChange} name='remarks' id='remarks'></textarea>
                   </div>
            </div>

            
                <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
            </form>
                    </div>
                </div>
           
           </div>
        </div>
     </div>
    );
}
export default AddChapter;