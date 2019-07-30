import React from 'react';
import ImageUploader from 'react-images-upload';
import SingleBanner from '../common/SingleBanner';

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
    render() {
        return (
            <div>
                <SingleBanner />
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
                    maxFileSize={5242880}
                />
            </div>
        );
    }
}

export default ImageUpload;