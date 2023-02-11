import React, { useEffect, useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Main.css'


const Main = () => {
    const [volunteers, setVolunteers] = useVolunteers();
    const [searchResult, setSearchResult] = useState([]);

    const handleSearchChange = event => {
        const searchText = event.target.value;
        const match = volunteers.filter(v => v.title.includes(searchText));
        setSearchResult(match)
    };

    return (
        <div className='container'>
            <h2 style={{ textAlign: 'center' }}>Volunteer Activities:{volunteers.length}</h2>
            <div style={{ 'margin': '20px' }}>
                <input onChange={handleSearchChange} placeholder='search' type="text" />
                <button>Search</button>
            </div>
            <div className="activity-container">

                {
                    searchResult.map(activity => <Activity
                        key={activity.taskId}
                        activity={activity}>

                    </Activity>)
                }
            </div>
        </div >
    );
};

export default Main;