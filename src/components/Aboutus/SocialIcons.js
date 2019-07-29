import React from 'react';

const SocialIcons = (props) => {
    return (
        <ul className="mt-2">
            <li>
                {props.children}
            </li>
        </ul>
    );
};

export default SocialIcons;