import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function CourseDetail(){
    let {course_id}=useParams();
    return(
      /*  <h1>Course Detail{course_id}</h1>*/
      <div className="container mt-3">
        <div className="row">
             <div className="col-4">
                 <img src="/python.png" className="img-thumbnail" alt="..."/>
             </div>
             <div className="col-8">
                  <h1>Course Title</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting, 
                     remaining essentially unchanged.</p>
                  <p className="fw-bold">Course By:<Link to='/teacher-detail/1'>Teacher 1</Link></p>
                  <p className="fw-bold">Duration: 3 Hours 30 Minutes</p>
                  <p className="fw-bold">Total Enrolled: 456 Students</p>
                   <p className="fw-bold">Rating :4.5/5</p>
             </div>
        </div>
        {/* Course videos */}
        
        <div className="card">
          <div className ="card-header">
              <h3> Course Videos</h3>
          </div>
           <ul className="list-group list-group-flush">
              <li className="list-group-item">Introduction<button className="btn btn-sm btn-secondary 
              float-end">Play</button></li>
                        {/*-- Modal --*/}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{/* End video modal */}
              <li className="list-group-item">Introduction<button className="btn btn-sm btn-secondary 
              float-end">Play</button></li>
          </ul>

        </div>
{/*--------------------------------- */}
        <h3 className="pb-1 mb-4 mt-5">Related Courses<a href="#" class="float-end">See All</a></h3>
  <div className="row mb-4">
      <div className="col-md-3">
        <div className="card">
        <Link to="/detail/1"><img src="/devops.png" className="card-img-top" alt="..."/></Link>
          <div className="card-body">
           <h5 className="card-title"><Link to="/detail/1">Deveops</Link></h5>
          </div>
       </div>
     </div>
     <div className="col-md-3">
       <div className="card">
         <a href="#"><img src="/python.png" className="card-img-top" alt="..."/></a>
         <div className="card-body">
           <h5 className="card-title"><a href="#">Python Full Stack</a></h5>
         </div>
       </div>
     </div>
     </div>
         
      </div>
    );
}
export default CourseDetail;