import Home from "../components/Home.jsx";
import AddJob from "../components/AddJob.jsx";
import RecentJobs from "../components/RecentJobs.jsx";
import ViewJobs from "../components/ViewJobs.jsx";


const HomePage = () => {
  return (
   <>
     <Home />
     <AddJob />
     <RecentJobs isHome={true} />
     <ViewJobs />
   </>
  )
}

export default HomePage