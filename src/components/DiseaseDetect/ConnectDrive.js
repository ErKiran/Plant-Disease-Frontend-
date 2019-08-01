import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleBanner from '../common/SingleBanner';
import Heading from '../common/Heading';
import { syncGdrive } from '../../actions/sync_gdrive';
import { load_model } from '../../actions/load_model';
import TeamMember from '../Aboutus/TeamMember';

class ConnectDrive extends Component {
    componentDidMount = () => {
        this.props.syncGdrive();
    }
    call_it = (img) => {
        this.props.load_model(img)
	console.log(img)
    }
    render() {
        const test = this.props.images;
        const gimages = test.photos;
        this.call_it({photo:"https://lh3.googleusercontent.com/W96rjPJ2pKr2LoQ6kS25DnSzOVlf6sniN6Z6_fl-DaBj3cn_D9PaOq8negI_Vrt4njHEZRduOPc"})
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
                            {Object.values(gimages).slice(0,8).map(i => i.map(i =>
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
    images: state.images,
    disease: state.disease
});

export default connect(mapStateToProps, { syncGdrive, load_model })(ConnectDrive);
