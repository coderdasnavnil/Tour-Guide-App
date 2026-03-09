
import toursStyle from './Tours.module.css';
import Tour from './Tour';

function Tours({tours,  removeTour}){
    return(
    <>
        <div className={toursStyle.toursContainer}>
            <h1 className={toursStyle.toursHeading}>Our Tours</h1>
            <div className={toursStyle.underline}></div>
            <div className={toursStyle.tourCollection}>
                {tours.map((tour)=>{
                    return(
                        <Tour key={tour.id} id={tour.id}
                                name={tour.name}
                                info={tour.info}
                                image={tour.image}
                                price={tour.price}
                                 removeTour={removeTour}/>
                    );
                })}
            </div>
        </div>
    </>
);
}

export default Tours;