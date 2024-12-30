import { HiLocationMarker } from "react-icons/hi"
import { useState } from "react";
import { Link } from 'react-router-dom';
function JobCard(props){
    const [showFullDescription, setShowFullDescription] = useState(false);
  return (
    <div className="bg-white rounded-md shadow-xl p-5 space-y-4">
        <p className="text-gray-400">{props.type}</p>
        <h5 className="text-lg font-semibold">{props.title}</h5>
        <p className={showFullDescription?"":"truncate ..."}>{props.description}</p>
        <button className="text-indigo-400 text-sm" onClick={()=>{setShowFullDescription((prevValue)=>{return !prevValue})}} >{showFullDescription?"Show less":"Show more"}</button>
        <p className="text-indigo-400">{props.salary} / Year</p>
        <hr />
        <div><span className="text-red-800"><HiLocationMarker className="inline-block text-xl" /> {props.location}</span><Link to={`/jobs/${props.id}`} className="text-white p-2 bg-indigo-400 rounded float-right">Read More</Link></div>
      </div>
  )
}
export default JobCard;