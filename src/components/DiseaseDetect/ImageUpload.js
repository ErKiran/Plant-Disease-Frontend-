import React from 'react';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';
import * as tf from '@tensorflow/tfjs';

import { load_model } from '../../actions/load_model';
import SingleBanner from '../common/SingleBanner';


class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
            model: {}
        };
        this.onDrop = this.onDrop.bind(this);
    }
    componentDidMount = () => {
        this.props.load_model();
    }
    preprocess = () => {
        const model_ser = tf.loadLayersModel(this.props.model)
        console.log(model_ser)
    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
    render() {
        this.preprocess()
        return (
            <div>
                <SingleBanner />
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png']}
                    maxFileSize={5242880}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    model: state.get
});

export default connect(mapStateToProps, { load_model })(ImageUpload);
