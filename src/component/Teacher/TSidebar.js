import {Link} from 'react-router-dom';
function TSidebar(){
    return(
              <div className="card">
                
                   <div className="list-group list-group-flush">
                   <Link to='/teacher-dashboard' className="list-group-item list-group-item-action">Dashboard</Link>
                   <Link to='/TMyCourses' className="list-group-item list-group-item-action">My Courses</Link>
                   <Link to='/Addcourses' className="list-group-item list-group-item-action">Add Courses</Link>
                   <Link to='/TMyUsers' className="list-group-item list-group-item-action">My Users</Link>

                   <Link to='/teacher-profilesetting' className="list-group-item list-group-item-action">Profile Setting</Link>
                   <Link to='/teacher-changepass' className="list-group-item list-group-item-action">Change password</Link>
                   <Link to='/user-login' className="list-group-item list-group-item-action text-danger">Logout</Link>

                 </div>
                </div>
    );
}
export default TSidebar;