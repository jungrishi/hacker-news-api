import React from 'react';
import {Link} from 'react-router-dom';
import withFetchData from './withFetchData';

function ListStory(props) {
    return (
        <ul className="listing">
            {props.passState.map(list => (
                <li key={list.id}>
                 <a><Link
                        to={{
                            pathname: `/stories/${list.id}`,
                            state: {data: list} }} >        
                            {list.title}
                    </Link>  
                  </a>    
                </li>
            ))}
        </ul>
    )
}

export default withFetchData(ListStory,'topstories.json')
