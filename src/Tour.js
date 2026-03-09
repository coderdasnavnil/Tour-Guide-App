import { useState } from 'react';
import tourStyle from './Tour.module.css';

function Tour({id, info, name, image, price,  removeTour}){
    const [showMore, setShowMore] = useState(false);
    return(
        <div className={tourStyle.tourPanel}>
            <section className={tourStyle.imgContainer}>
                <img className={tourStyle.img} src={image} alt={name}/>
            </section>
            <div className={tourStyle.tourInfoHeadlines}>
                <h4 className={tourStyle.tourName}>{name}</h4>
                <h4 className={tourStyle.tourPrice}>$ {price}</h4>
            </div>
            <p className={tourStyle.tourInfo}>
               {showMore? info:`${info.substring(0,200)}...`}
               <button onClick={()=>setShowMore(!showMore)}
                        className={tourStyle.showMoreBtn}>{showMore?"Show Less":"Show More"}</button>
            </p>
            <button className={tourStyle.deleteBtn} onClick={()=> removeTour(id)}>Not Interested</button>
        </div>
    );
}

export default Tour;