import React, {useState} from "react";
import "./United.scss";
import americanUniversitiesData from "../../Data/America";
import {IoLocationOutline} from "react-icons/io5";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi";

const United = () => {

    const [active, setActive] = useState(1)



  return (
    <section id="country">
      <div className="container">
        <h1>United Stated</h1>
        <div className="select">
         <div >
           <select>
             <option value="#">Higher Education</option>
             <option value="#">Secondary Education</option>
             <option value="#">Higher Education</option>
             <option value="#">language courses for youth</option>
             <option value="#">chilren's language comps</option>
           </select>
         </div>

         <div>
           <select>
             <option value="#">Specialization</option>
             <option value="#">IT Technologies</option>
             <option value="#">Bisiness</option>
             <option value="#">Medicine</option>
             <option value="#">International Relationships</option>
             <option value="#">Tourism</option>
           </select>
         </div>

          <div className="select--options">
            <select>
              <option value="#">Сountries</option>
              <option value="#">America</option>
              <option value="#">Germany</option>
              <option value="#">INDONESIA</option>
              <option value="#">South Korea</option>
            </select>
          </div>
        </div>
        <div className="country--america">
          {americanUniversitiesData.map((el) => (
           <div className="country--america__blocks">
             <div key={el.id} className="country--america__blocks--block">
               <img src={el.image} alt={el.name}/>
               <div className="country--america__blocks--block__name">
                 <h3>Name:</h3>
                 <h2>{el.name}</h2>
               </div>
              <div className="country--america__blocks--block__location">
                <p>Location  <IoLocationOutline style={{color: "#9D72D6"}}/></p>
                <h2>{el.location}</h2>
              </div>
              <div className="country--america__blocks--block__age">
                <p>Age: </p>
                <h2>From {el.age}</h2>
              </div>
             </div>
           </div>
          ))} {
            <div className="popular--pages">
                {

                    <div className="popular--pages__btn">
                        <button className="next" onClick={() => setActive(active - 1)}><HiChevronLeft/></button>
                        <button className="classic">{active}{active ? active === -0 : setActive(1)}</button>
                        <button className="next" onClick={() => setActive(active + 1)} ><HiChevronRight/></button>
                    </div>

                }
            </div>
        }
        </div>
      </div>
    </section>
  );
};

export default United;
