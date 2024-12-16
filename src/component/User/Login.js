import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="container">
          <div className="row">
            <div className="col-8 offset-3">
             <div className="card">
                <h5 className="card-header">User Login</h5>
                  <div className="card-body">
                  <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Username</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
                  </div>
                </div> 
             </div>
            </div>
        </div>
    );
}
export default Login;