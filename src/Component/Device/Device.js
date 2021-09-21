import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    return (
        <div style={{ border: '2px solid blue', margin: '10px' }}>
            <h2>My Device: {props.name}</h2>
            <h4>Current Steps: {props.steps}</h4>
            <Config price={props.price}></Config>
        </div>
    );
};

export default Device;