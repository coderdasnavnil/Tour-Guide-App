import {useState, useEffect} from 'react';
import Tours from './Tours';


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const url = "https://www.course-api.com/react-tours-project";

  
  async function fetchTours(){
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours)
      console.log(tours);
      setLoading(false);
    }catch(error){
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchTours();
  },[]);

  if(loading){
    return (<h2 className="LoadingMsg">Loading ...</h2>);
  }

  function deleteTour(id){
    const newTours = tours.filter((tour)=>tour.id!==id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return(
      <div className="unavailableTourPlan">
        <h2 className="unavailableTourPlanMssg">Sorry, no tour plans left. Please try again later.</h2>
        <button className="refreshBtn" onClick={fetchTours}>Refresh Page</button>
      </div>
    );
  }

  return (
    <>
      <Tours tours={tours}
              removeTour={deleteTour}/>
    </>
  );
}

export default App;
