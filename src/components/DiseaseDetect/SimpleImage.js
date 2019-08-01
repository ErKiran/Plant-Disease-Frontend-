import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleBanner from "../common/SingleBanner";
import { load_model } from '../../actions/load_model';
import {top_three} from '../../helpers/top_three';

class SimpleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.fileUpload(this.state.file)
    }

    onChange = (e) => {
        this.setState({ file: e.target.files[0] })
    }

    fileUpload = (file) => {
        const formData = new FormData();
        formData.photo = file
        formData.append('photo',file)
        this.props.load_model(formData)
    }
    render() {
        const result = this.props.disease;
        console.log(result)
        if(!(Object.keys(result.disease).length === 0)){
        const get =top_three(result);
        console.log(Object.values(get).slice(0,3))
        }
        return (
            <div>
                <SingleBanner />

                <form onSubmit={this.onFormSubmit}>
                    <input type="file" name="file" onChange={this.onChange} />
                    <button type="submit" className="btn btn-success">Upload</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    disease: state.get
});

export default connect(mapStateToProps, { load_model })(SimpleImage);
