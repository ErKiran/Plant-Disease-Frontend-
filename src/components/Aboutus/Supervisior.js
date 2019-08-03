import React from 'react';
import TeamMember from './TeamMember';
import SocialIcons from './SocialIcons';
import SingleIcon from './SingleIcon';
import './ss.css';

const Supervisior = () => {
    return (
        <div className="team py-5" id="team">
            <div className="container py-lg-3">
                <h3 className="heading mb-sm-5 mb-4 text-center"> Supervisior </h3>
                <div className="row team-bottom text-center">
                    <TeamMember
                        image="images/sharan_sir.jpg"
                        name="Sharan Thapa"
                        class="center"
                    >
                        <SocialIcons>
                            <SingleIcon
                                link="https://www.facebook.com/sharanthapa436"
                                icon="fa fa-facebook"
                            />
                        </SocialIcons>
                    </TeamMember>
                </div>
            </div>
        </div>
    );
};

export default Supervisior;