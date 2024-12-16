import {Link} from 'react-router-dom';
import AllCourses from './AllCourses';
import { useEffect } from "react";

function Home() {
  useEffect(()=>{
    document.title='LMS | Home Page';
 }
 );
  return (
<div className="container mt-4">
  {/* Latest Courses */}
  <h3 className="pb-1 mb-4">Latest Course<Link to="/all-courses" class="float-end">See All</Link></h3>
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

     <div className="col-md-3">
       <div className="card">
         <a href="#"><img src="awss.png" className="card-img-top" alt="..."/></a>
         <div className="card-body">
           <h5 className="card-title"><a href="#">AWS</a></h5>
         </div>
       </div>
     </div>
    </div>
    {/* End Latest Courses */}

    {/* Popular Courses */}
  <h3 className="pb-1 mb-4 mt-5">Popular Courses<Link to="popularc" class="float-end">See All</Link></h3>
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
    </div>
    {/* End Popular Courses */}

    {/* Popular Teachers */}
  <h3 className="pb-1 mb-4">Popular Teachers<Link to="/populart" class="float-end">See All</Link></h3>
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
    </div>
    {/* Popular Teachers */}
    
     {/* Student Testimonial */}
  <h3 className="pb-1 mb-4">Student Testimonial</h3>
  <div className="row mb-4">
     
  <div id="carouselExampleIndicators" class="carousel slide bg-dark text-white py-5" date-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <figure class="text-center">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
    </div>
    <div class="carousel-item">
    <figure class="text-center">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
    </div>
    <div class="carousel-item">
    <figure class="text-center">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
    </div>
    {/* Student Testimonial */}

</div>

  );
}

export default Home;
