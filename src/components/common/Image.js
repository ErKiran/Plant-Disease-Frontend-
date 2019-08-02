import React from 'react';
import TeamMember from '../Aboutus/TeamMember';

const Image = (props) => {
    return (
        <div className="team py-5" id="team">
            <div className="container py-lg-3">
                <h3 className="heading mb-sm-5 mb-4 text-center"> Our Team</h3>
                <div className="row team-bottom text-center">
                    <TeamMember
                        image={props.image}
                        class="col-lg-3 col-sm-6 team-grid"
                    >
                        {props.children}
                    </TeamMember>
                </div>
            </div>
        </div>

    );
};

export default Image;