import React from 'react';
import TeamMember from './TeamMember';
import SocialIcons from './SocialIcons';
import SingleIcon from './SingleIcon';

const Supervisior = () => {
    return (
        <div className="team py-5" id="team">
            <div className="container py-lg-3">
                <h3 className="heading mb-sm-5 mb-4 text-center"> Our Team</h3>
                <div className="row team-bottom text-center">
                    <div className="text-center" />
                    <TeamMember
                        image="images/sharan_sir.jpg"
                        name="Sharan Thapa"
                        class="col-lg-3 col-sm-6 team-grid"
                    >
                        <SocialIcons>
                            <SingleIcon
                                link="https://www.linkedin.com/in/kiranadhikarier/"
                                icon="fa fa-linkedin" />
                            <SingleIcon
                                link="https://www.linkedin.com/in/kiranadhikarier/"
                                icon="fa fa-github"
                            />
                        </SocialIcons>
                    </TeamMember>
                </div>
            </div>
        </div>
    );
};

export default Supervisior;