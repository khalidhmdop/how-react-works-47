import React from 'react';

const Config = (props) => {
    return (
        <div style={{ border: '2px solid blue', margin: '10px' }}>
            <ul>
                <li>price: {props.price}</li>
            </ul>
        </div>
    );
};

export default Config;