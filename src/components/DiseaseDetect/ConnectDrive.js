import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleBanner from '../common/SingleBanner';
import { syncGdrive } from '../../actions/sync_gdrive'

class ConnectDrive extends Component {
    render() {
        const test = this.props.images;
        console.log(test)
        return (
            <div>
                <SingleBanner />
                <section className="contact py-5">
                    <div className="container py-sm-3">
                        <h3 className="heading mb-sm-5 mb-4 text-center">Connect Drive
                        <span className="fa fa-google" aria-hidden="true"></span>
                        </h3>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    images: state.images
});

export default connect(mapStateToProps, { syncGdrive })(ConnectDrive);;
