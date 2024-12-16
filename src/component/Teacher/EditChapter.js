import axios from 'axios';
import TSidebar from './TSidebar';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
const baseUrl='http://127.0.0.1:8000/api';

function EditChapter(){
    const[chapterData,setChapterData]=useState({
        course:'',
        title:'',
        description:'',
        prev_video:'',
        video:'',
        remarks:''
    });

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
      const {chapter_id}=useParams();
      
      const formSubmit=()=>{
        const _formData=new FormData();
        _formData.append('course',chapterData.course);
        _formData.append('title',chapterData.title);
        _formData.append('description',chapterData.description);
        // if(chapterData.video!==''){
        // _formData.append('video',chapterData.video,chapterData.video.name);
        //  }
        // Only append the video if a new file is selected
        if (chapterData.video) {
        _formData.append('video', chapterData.video, chapterData.video.name);
        }

        
         _formData.append('remarks',chapterData.remarks);
      
      try{
        axios.put(baseUrl+'/chapter/'+chapter_id,_formData,{
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        .then((res)=>{
             console.log(res);
            // window.location.href='/edit-chapter/1';
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

     useEffect(()=>{
        try{
            axios.get(baseUrl+'/chapter/'+chapter_id)
            .then((res)=>{
                //console.log(res.data);
                // settotalResult(res.data.length);
                setChapterData({
                    course:res.data.course,
                    title:res.data.title,
                    description:res.data.description,
                    prev_video:res.data.video,
                    video:'',
                    remarks:res.data.remarks,
                    });
             
            });
            }catch(error){
             console.log(error);
            }
         },[]);

    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <TSidebar/>
            </aside>
            <div className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Update Chapter</h5>
                    <div className="card-body">
                   <form>
                    <div className="mb-3">
                         <label for="title" className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                              <input type="text"  onChange={handelChange} name='title' value={chapterData.title} className="form-control" id="title" />
                            </div>
                    </div>
                     
                    <div className="mb-3 row">
                 <label for="description" className="col-sm-2 col-form-label">Description</label>
                   <div className="col-sm-10">
                     
                     <textarea className="form-control"  onChange={handelChange} name='description'  value={chapterData.description} id="description"></textarea>
                   </div>
            </div> 
                 <div className="mb-3 row">
                         <label for="video" className="col-sm-2 col-form-label">Video</label>
                            <div className="col-sm-10">
                            <input type="file"  onChange={handelFileChange} name='video'id='video' className="form-control"  />
                     </div>
                     {chapterData.prev_video &&
                     <video controls width="100%" height="250" className='mt-2'>
                                <source src={chapterData.prev_video} type='video/webm'></source>
                                <source src={chapterData.prev_video} type='video/mp4'></source>

                            </video>}
                 </div>
                 
            
            <div className="mb-3 row">
                 <label for="remarks" className="col-sm-2 col-form-label">Remarks</label>
                   <div className="col-sm-10">
                     
                     <textarea className="form-control"  onChange={handelChange} name='remarks'  value={chapterData.remarks} id='remarks'></textarea>
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
export default EditChapter;