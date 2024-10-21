import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Features = () => {

    const[jobs, setJobs] = useState([]);

    useEffect( ( ) =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])


    return (
        <div>
            <div className='text-center'>
               <h2 className='text-5xl'>Features Job: {jobs.length}</h2>
               <p>Explore of job opportunites</p>
            </div>
            <div>
                {jobs.map(job => <Job key={job.id} job={job}></Job>)}
            </div>
        </div>
    );
};

export default Features;