import React from 'react';

const SingleIcon = (props) => {
    return (
        <li>
            <a href={props.link}>
                <span className={props.icon} aria-hidden="true"></span>
            </a>
        </li>
    );
};

export default SingleIcon;