
import TSidebar from './TSidebar';

function TDashboard(){
    return(
         <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TSidebar/>
                </aside>
                <section className="col-md-9">
                    Dashboard
                </section>
            </div>
         </div>
    );
}
export default TDashboard;