import{ Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import SingleJobPage,{jobLoader} from "./pages/SingleJobPage.jsx";
import AddJobPage from "./pages/AddJobPage.jsx";
import EditJobPage from "./pages/EditJobPage.jsx";

//Add Job
const addJob = async(newJob)=>{
  const res = await fetch("/api/jobs",{
    method:"POST",
    headers:{
      'content-Type':'application/json'
    },
    body:JSON.stringify(newJob)
  })
  console.log(newJob);
  return;
}
//Delete Job
const deleteJob = async(id)=>{
   await fetch(`/api/jobs/${id}`,{
    method:'DELETE'
   })
   return;
}
//Edit Job
const editJob =  async(id,newJob)=>{
  await fetch(`/api/jobs/${id}`,{
   method:'PUT',
   headers:{
    'content-Type':'application/json'
  },
  body:JSON.stringify(newJob)
  }
  
)
  return;
}
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />}/>
    <Route path="/jobs" element={<JobsPage />}/>
    <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
    <Route path="/jobs/:id" element={<SingleJobPage deleteJob={deleteJob} />} loader={jobLoader} />
    <Route path="/edit-job/:id" element ={<EditJobPage editJobSubmit={editJob} />} loader={jobLoader} />
    <Route path="*" element={<NotFoundPage />}/>
  </Route>));


const App = () => {
  return (<RouterProvider router={router} /> )
}

export default App;
