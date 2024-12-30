import Card from "./Card.jsx";
import {Link} from "react-router-dom";
function AddJob(){
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-10 my-12">
      <Card>
        <h4 className="text-2xl font-bold">For Developers</h4>
        <p>Browse our React jobs and start your career today.</p>
        <button className="text-white px-5 py-2 bg-black rounded">Browse Jobs</button>
      </Card>
      <Card bg="bg-indigo-200" ms="me-auto">
        <h4 className="text-2xl font-bold">For Employers</h4>
        <p>List your job to find the perfect developer for the role</p>
        <Link to="/add-job" className="inline-block text-white px-5 py-2 bg-indigo-400 rounded">Add Job</Link>
      </Card>
    </div>
  )
}
export default AddJob;