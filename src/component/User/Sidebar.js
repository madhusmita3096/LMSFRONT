import {Link} from 'react-router-dom';
function Sidebar(){
    return(
              <div className="card">
                
                   <div className="list-group list-group-flush">
                   <Link to='/user-dashboard' className="list-group-item list-group-item-action">Dashboard</Link>
                   <Link to='/my-courses' className="list-group-item list-group-item-action">My Courses</Link>
                   <Link to='/favorite-courses' className="list-group-item list-group-item-action">Favorite Courses</Link>
                   <Link to='/reco-courses' className="list-group-item list-group-item-action">Recomended Courses</Link>
                   <Link to='/profile-setting' className="list-group-item list-group-item-action">Profile Setting</Link>
                   <Link to='/change-pass' className="list-group-item list-group-item-action">Change password</Link>
                   <Link to='/user-login' className="list-group-item list-group-item-action text-danger">Logout</Link>

                 </div>
                </div>
    );
}
export default Sidebar;