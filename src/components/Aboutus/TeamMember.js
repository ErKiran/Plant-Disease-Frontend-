import React from 'react';

const TeamMember = (props) => {
    return (
        <div className={props.class}>
            <img src={props.image} style={props.style} className="img-fluid" alt="" />
            <div className="caption">
                <div className="team-text">
                    <h4>{props.name}</h4>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default TeamMember;