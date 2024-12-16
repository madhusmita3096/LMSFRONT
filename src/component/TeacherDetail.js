import { Link } from "react-router-dom";
function TeacherDetail(){
    return(
        
        <div className="container mt-3">
        <div className="row">
             <div className="col-4">
                 <img src="/python.png" className="img-thumbnail" alt="..."/>
             </div>
             <div className="col-8">
                  <h1>Saral Kumar</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting, 
                     remaining essentially unchanged.</p>
                  <p className="fw-bold">Skills:<Link to='/teacher-detail/1'>Python</Link>,<Link to='/teacher-detail/1'>Django</Link></p>

                   <p className="fw-bold">Rating :4.5/5</p>
             </div>
        </div>
        {/* Course videos */}
        
        <div className="card">
          <div className ="card-header">
              <h3> Course List</h3>
          </div>
           <div className="list-group list-group-flush">
              <Link To="/detail/1" class="list-group-item">Python course 1</Link>
              <Link To="/detail/1" class="list-group-item">Python course 2</Link>
              <Link To="/detail/1" class="list-group-item">Django course 1</Link>
              <Link To="/detail/1" class="list-group-item">Django course 2</Link>

          </div>
        </div>
{/*--------------------------------- */}
       
     </div>
         
    );
}
export default TeacherDetail;