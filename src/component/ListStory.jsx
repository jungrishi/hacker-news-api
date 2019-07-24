import React from 'react';
import {Link} from 'react-router-dom';

function ListStory(props) {
    return (
        <div>
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
        </div>
    )
}

export default ListStory
