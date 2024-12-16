import {Link} from 'react-router-dom';

function AllCourses(){
    return(        
    <div className="container mt-3">

        <h3 className="pb-1 mb-4">Latest Course</h3>
        <div className="row mb-4">
            <div className="col-md-3">
              <div className="card">
              <Link to="/detail/1"><img src="devops.png" className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                 <h5 className="card-title"><Link to="/detail/1">Deveops</Link></h5>
                </div>
             </div>
           </div>
           <div className="col-md-3">
             <div className="card">
               <a href="#"><img src="python.png" className="card-img-top" alt="..."/></a>
               <div className="card-body">
                 <h5 className="card-title"><a href="#">Python Full Stack</a></h5>
               </div>
             </div>
           </div>
           <div className="col-md-3">
             <div className="card">
               <a href="#"><img src="digital.png" className="card-img-top" alt="..."/></a>
               <div className="card-body">
                 <h5 className="card-title"><a href="#">Digital Marketing</a></h5>
               </div>
             </div>
           </div>
      
           <div className="col-md-3  ">
             <div className="card">
               <a href="#"><img src="awss.png" className="card-img-top" alt="..."/></a>
               <div className="card-body">
                 <h5 className="card-title"><a href="#">AWS</a></h5>
               </div>
             </div>
           </div>


           <div className="col-md-3">
              <div className="card">
              <Link to="/detail/1"><img src="devops.png" className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                 <h5 className="card-title"><Link to="/detail/1">Deveops</Link></h5>
                </div>
             </div>
             </div>
             <div className="col-md-3">
              <div className="card">
              <Link to="/detail/1"><img src="devops.png" className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                 <h5 className="card-title"><Link to="/detail/1">Deveops</Link></h5>
                </div>
             </div>
             </div>
             <div className="col-md-3">
              <div className="card">
              <Link to="/detail/1"><img src="devops.png" className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                 <h5 className="card-title"><Link to="/detail/1">Deveops</Link></h5>
                </div>
             </div>
             </div>
             <div className="col-md-3">
              <div className="card">
              <Link to="/detail/1"><img src="devops.png" className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                 <h5 className="card-title"><Link to="/detail/1">Deveops</Link></h5>
                </div>
             </div>
             </div>
          </div>
          {/* End Latest Courses */}
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
      
    )
}
export default AllCourses;