import React from 'react';

const SingleIcon = (props) => {
    return (
        <li>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <span className={props.icon} aria-hidden="true"></span>
            </a>
        </li>
    );
};

export default SingleIcon;