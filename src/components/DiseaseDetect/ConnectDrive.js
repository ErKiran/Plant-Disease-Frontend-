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
        const res = fetch(img);
        console.log(res)
        const formData = new FormData();
        formData.photo = img
        formData.append('photo', img)
        this.props.load_model(res)
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
                            {Object.values(gimages).map(i => i.slice(0, 30).map(i =>
                                <TeamMember
                                    image={i}
                                    key={i}
                                    class="col-lg-3 col-sm-6 team-grid"
                                >
                                    <button className="btn btn-danger" >Predict</button> <br />
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
