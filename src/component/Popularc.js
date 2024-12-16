import {Link} from 'react-router-dom';

function Popularc(){
    return(        
    <div className="container mt-3">
        {/* Popular Courses */}
  <h3 className="pb-1 mb-4 mt-5">Popular Courses</h3>
  <div className="row mb-4">
      <div className="col-md-3">
        <div className="card">
          <a href="#"><img src="devop.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
           <h5 className="card-title"><a href="#">DevOps</a></h5>
          </div>
       </div>
     </div>
     <div className="col-md-3">
       <div className="card">
         <a href="#"><img src="python1.jpg" className="card-img-top" alt="..."/></a>
         <div className="card-body">
           <h5 className="card-title"><a href="#">Python Full Stack</a></h5>
         </div>
       </div>
     </div>
     <div className="col-md-3">
       <div className="card">
         <a href="#"><img src="Testing.jpg" className="card-img-top" alt="..."/></a>
         <div className="card-body">
           <h5 className="card-title"><a href="#">Testing</a></h5>
         </div>
       </div>
     </div>

     <div className="col-md-3">
       <div className="card">
         <a href="#"><img src="cyber.jpg" className="card-img-top" alt="..."/></a>
         <div className="card-body">
           <h5 className="card-title"><a href="#">Cyber Security</a></h5>
         </div>
       </div>
     </div>
     <div className="col-md-3">
       <div className="card">
         <a href="#"><img src="cyber.jpg" className="card-img-top" alt="..."/></a>
         <div className="card-body">
           <h5 className="card-title"><a href="#">Cyber Security</a></h5>
         </div>
       </div>
     </div>
     <div className="col-md-3">
       <div className="card">
         <a href="#"><img src="cyber.jpg" className="card-img-top" alt="..."/></a>
         <div className="card-body">
           <h5 className="card-title"><a href="#">Cyber Security</a></h5>
         </div>
       </div>
     </div>
     <div className="col-md-3">
       <div className="card">
         <a href="#"><img src="cyber.jpg" className="card-img-top" alt="..."/></a>
         <div className="card-body">
           <h5 className="card-title"><a href="#">Cyber Security</a></h5>
         </div>
       </div>
     </div>
     <div className="col-md-3">
       <div className="card">
         <a href="#"><img src="cyber.jpg" className="card-img-top" alt="..."/></a>
         <div className="card-body">
           <h5 className="card-title"><a href="#">Cyber Security</a></h5>
         </div>
       </div>
     </div>
    </div>
    {/* End Popular Courses */}
    {/* Pagination Start */}
    <nav aria-label="Page navigation example mt-5 ">
  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
          {/* Pagination end */}
    </div>
    );
}
export default Popularc;