import JobCard from "./JobCard.jsx";
import Spinner from "./Spinner.jsx";
import {v4 as uuidv4} from "uuid";
import {useState, useEffect} from "react";
function RecentJobs({isHome}){
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const fetchJobs =async ()=>{
      const apiUrl = isHome?"/api/jobs?_limit=3":"/api/jobs"
      try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      }catch(err){
        console.log("Error fetching data: ",err);
      } finally{
        setLoading(false);
      }
    }
    fetchJobs();
  },[])
    return(
  <section id="recent-jobs" className="bg-sky-100 p-5"> 
    <h4 className="text-indigo-400 font-semibold text-3xl text-center">{isHome?"Recent Jobs" : "Browse top jobs for you"}</h4>
      {loading?<Spinner /> :
      <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 p-5">
        {jobs.map((job)=>{
          return (
            <JobCard key={uuidv4()} id={job.id} type={job.type} title={job.title} description={job.description} location={job.location} salary={job.salary} />
          )
      })}
      </div>
      </>
      }
  </section>
    )
}
export default RecentJobs;