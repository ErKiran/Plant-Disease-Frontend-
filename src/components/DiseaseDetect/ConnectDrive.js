import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleBanner from '../common/SingleBanner';
import Heading from '../common/Heading';
import { syncGdrive } from '../../actions/sync_gdrive'
import TeamMember from '../Aboutus/TeamMember';

class ConnectDrive extends Component {
    componentDidMount = () => {
        this.props.syncGdrive();
    }
    render() {
        const test = this.props.images;
        const gimages = test.photos;
        return (
            <div>
                <SingleBanner />
                <Heading
                    title="Connect Drive"
                    icon="fa fa-google"
                />
                <div className="team py-5" id="team">
                    <div className="container py-lg-3">
                        <div className="row team-bottom text-center">
                            {Object.values(gimages).map(i => i.map(i =>
                                <TeamMember
                                    image={i}
                                    key={i}
                                    class="col-lg-3 col-sm-6 team-grid"
                                >
                                    Predict
                                </TeamMember>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    images: state.images
});

export default connect(mapStateToProps, { syncGdrive })(ConnectDrive);
