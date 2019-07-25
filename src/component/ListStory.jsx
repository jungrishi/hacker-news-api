import React from 'react';
import {Link} from 'react-router-dom';
import withFetchData from './withFetchData';

function ListStory(props) {
    return (
        <>
            {props.passState.map(list => (
                <li key={list.id}>
                 <Link
                        to={{
                            pathname: `/stories/${list.id}`,
                            state: {data: list} }} >        
                            {list.title}
                    </Link>  
                      
                </li>
            ))}
        </>
    )
}

export default withFetchData(ListStory,'topstories.json')
