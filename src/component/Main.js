import Header from './Header';
import Home from './Home';
import CourseDetail from './CourseDetail';
import About from './About';
import TeacherDetail from './TeacherDetail';

//list pages

import AllCourses from './AllCourses';
import Popularc from './Popularc';
import Populart from './Populart';

//Teachers
import TLogin from './Teacher/TLogin';
import TLogout from './Teacher/TLogout';

import TRegister from './Teacher/TRegister';
import TDashboard from './Teacher/TDashboard';
import TProfileSetting from './Teacher/TProfileSetting';
import TChangePass from './Teacher/TChangePass';
import TMyCourses from './Teacher/TMyCourses';
import Addcourses from './Teacher/Addcourses';
import EditCourse from './Teacher/EditCourse';

import TMyUsers from './Teacher/TMyUsers';
import AddChapter from './Teacher/AddChapter';
import CourseChapters from './Teacher/CourseChapters';
import EditChapter from './Teacher/EditChapter';
//Users
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import FavoriteCourses from './User/FavoriteCourses';
import RecoCourses from './User/RecoCourses';
import ProfileSetting from './User/ProfileSetting';
import ChangePass from './User/ChangePass';

import Footer from './Footer';

import {Routes as Switch, Route} from 'react-router-dom';

function Main() {
  return (
    <div className="App">
          <Header />
          <Switch>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/detail/:course_id" element={<CourseDetail />}/>
            
            <Route path="/User-login" element={<Login />}/>
            <Route path="/User-register" element={<Register />}/>
            <Route path="/User-dashboard" element={<Dashboard />}/>
            <Route path="/my-courses" element={<MyCourses/>}></Route>
            <Route path="/favorite-courses" element={<FavoriteCourses/>}></Route>
            <Route path="/reco-courses" element={<RecoCourses/>}></Route>
            <Route path="/profile-setting" element={<ProfileSetting/>}></Route>
            <Route path="/change-pass" element={<ChangePass/>}></Route>

            <Route path="/teacher-login" element={<TLogin />}/>
            <Route path="/teacher-logout" element={<TLogout />}/>

            <Route path="/teacher-register" element={<TRegister />}/>
            <Route path="/teacher-dashboard" element={<TDashboard />}/>
            <Route path="/teacher-profilesetting" element={<TProfileSetting />}/>
            <Route path="/teacher-changepass" element={<TChangePass />}/>
            <Route path="/tmycourses" element={<TMyCourses/>}></Route>
            <Route path="/addcourses" element={<Addcourses/>}></Route>
            <Route path="/editcourse/:course_id" element={< EditCourse/>}></Route>


            <Route path="/tmyusers" element={<TMyUsers/>}></Route>
            <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail/>}></Route>
            <Route path="/add-chapter/:course_id" element={<AddChapter />} />
            <Route path="/all-chapter/:course_id" element={<CourseChapters />} />
            <Route path="/edit-chapter/:chapter_id" element={<EditChapter />} />


            <Route path="/all-courses" element={<AllCourses/>}></Route>
            <Route path="/popularc" element={<Popularc/>}></Route>
            <Route path="/populart" element={<Populart/>}></Route>
           
          </Switch> 
      <Footer />
    </div>
  );
}

export default Main;
