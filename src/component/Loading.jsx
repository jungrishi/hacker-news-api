import React from 'react'
import Spinner from 'react-spinkit';
import '../styles/listing.css';

const styles = {
    'display': 'block',
    'position': 'absolute',
    'top': 50 + '%',
    'left': 50 + '%',
    'transform': "translate(-50%, -50%)"
}

const a = {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center', 
}


function Loading(props) {
    return (
        <div style={props.i == 1 ? styles: a}>
            <Spinner name="ball-pulse-sync" color="blue" fadeIn='half'/>
            </div>
    )
}

export default Loading;