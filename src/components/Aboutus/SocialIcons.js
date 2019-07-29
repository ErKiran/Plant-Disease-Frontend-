import React from 'react';

const SocialIcons = (props) => {
    return (
        <ul className="mt-2">
            {props.children}
        </ul>
    );
};

export default SocialIcons;