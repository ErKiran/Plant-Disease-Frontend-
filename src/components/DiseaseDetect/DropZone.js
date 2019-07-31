import React from "react";
import MagicDropzone from "react-magic-dropzone";
import { connect } from 'react-redux';


import './style.css'
import SingleBanner from "../common/SingleBanner";
import { load_model } from '../../actions/load_model';


class DropZone extends React.Component {
    state = {
        model: true,
        preview: "",
        predictions: []
    };


    onDrop = (accepted, rejected, links) => {
        this.setState({ preview: accepted[0].preview || links[0] });
        this.props.load_model(accepted[0].preview)
    };

    cropToCanvas = (image, canvas, ctx) => {
        const naturalWidth = image.naturalWidth;
        const naturalHeight = image.naturalHeight;

        canvas.width = image.width;
        canvas.height = image.height;

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        if (naturalWidth > naturalHeight) {
            ctx.drawImage(
                image,
                (naturalWidth - naturalHeight) / 2,
                0,
                naturalHeight,
                naturalHeight,
                0,
                0,
                ctx.canvas.width,
                ctx.canvas.height
            );
        } else {
            ctx.drawImage(
                image,
                0,
                (naturalHeight - naturalWidth) / 2,
                naturalWidth,
                naturalWidth,
                0,
                0,
                ctx.canvas.width,
                ctx.canvas.height
            );
        }
    };

    onImageChange = e => {
        const c = document.getElementById("canvas");
        const ctx = c.getContext("2d");
        this.cropToCanvas(e.target, c, ctx);
    };

    render() {
        const detected = this.props.disease;
        console.log(detected)
        return (
            <div>
                <SingleBanner />
                <div className="Dropzone-page">
                    {this.state.model ? (
                        <MagicDropzone
                            className="Dropzone"
                            accept="image/jpeg, image/png, .jpg, .jpeg, .png"
                            multiple={false}
                            onDrop={this.onDrop}
                        >
                            <div className="Dropzone-content">
                                {this.state.preview ? (
                                    <img
                                        alt="upload preview"
                                        onLoad={this.onImageChange}
                                        className="Dropzone-img"
                                        src={this.state.preview}
                                    />
                                ) : (
                                        "Choose or drop a file."
                                    )}
                                <canvas id="canvas" />
                            </div>
                        </MagicDropzone>
                    ) : (
                            <div className="Dropzone">Loading model...</div>
                        )}
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    disease: state.disease
});

export default connect(mapStateToProps, { load_model })(DropZone);
