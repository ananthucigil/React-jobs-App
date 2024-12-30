import {Link} from "react-router-dom";
function ViewJobs(){
    return(
      <section>
        <div>
        <Link to="/jobs" className="block ring-4 hover:bg-gray-900 my-5 mx-auto max-w-xs rounded-lg px-2 py-4 bg-black text-white text-center">View All Jobs</Link>
        </div>
      </section>
    )
}

export default ViewJobs;