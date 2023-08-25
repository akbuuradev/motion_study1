import React, {useState} from 'react';
import './tabsDetails.scss'
import Cost from "../Cost/cost";
import Photo from "../Photo/photo";
import Description from "../Description/description";
import {data} from "../../Data/countData";
import {useSelector} from "react-redux";


const TabsDetails = () => {

        const [tabs, setTabs] = useState(0)

    console.log(tabs + 1)

    const {count, aboutCount } = useSelector(s => s)


    return (
            <div id="tabs">
                <div className="container">
                    <div className="tabs">
                        <div className="tabs--title">
                            <div className="tabs--title__photo">
                                {
                                    data[count - 1].about[aboutCount - 1].details.tabs.map(el => (
                                        <span style={{borderBottom: el.id === tabs + 1 ? "2px solid red" : ""}}  onClick={() => setTabs(el.id - 1)} className="tabs--title__photo--item">{el.name}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        tabs === 0 && <Description/>
                    }
                    {
                        tabs === 1 && <Cost/>
                    }
                    {
                        tabs === 2 && <Photo/>
                    }
                </div>
            </div>
    );
};

export default TabsDetails;