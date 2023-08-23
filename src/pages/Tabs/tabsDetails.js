import React, {useState} from 'react';
import './tabsDetails.scss'
import Cost from "../Cost/cost";
import Photo from "../Photo/photo";
import Description from "../Description/description";


const TabsDetails = () => {

        const [tabs, setTabs] = useState(0)

    return (
            <div id="tabs">
                <div className="container">
                    <div className="tabs">
                        <div className="tabs--title">
                            <div className="tabs--title__photo">
                                       <span onClick={() => setTabs(0)} className="tabs--title__photo--item">Description</span>
                                       <span onClick={() => setTabs(2)} className="tabs--title__photo--item">Cost</span>
                                       <span onClick={() => setTabs(3)} className="tabs--title__photo--item">Photo</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        tabs === 0 && <Description/>
                    }
                    {
                        tabs === 2 && <Cost/>
                    }
                    {
                        tabs === 3 && <Photo/>
                    }
                </div>
            </div>
    );
};

export default TabsDetails;