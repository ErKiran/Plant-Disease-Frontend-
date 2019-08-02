import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleBanner from "../common/SingleBanner";
import { load_model } from '../../actions/load_model';
import { top_three } from '../../helpers/top_three';
import { get_recc } from '../../actions/get_recc';

class SimpleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            image: '',
            highest_predicted: ''
        }
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.fileUpload(this.state.file)
    }

    onChange = (e) => {
        this.setState({ file: e.target.files[0] })
        this.setState({
            image: URL.createObjectURL(e.target.files[0])
        });
    }
    fileUpload = (file) => {
        const formData = new FormData();
        formData.photo = file
        formData.append('photo', file)
        this.props.load_model(formData)
    }
    dopred = () => {
        const result = this.props.disease;
        if (!(Object.keys(result.disease).length === 0)) {
            const get = top_three(result);
            console.log(Object.values(get).slice(0, 3))
            const predicted_disease = Object.values(get).slice(0, 3)[0][1];
            this.setState({ highest_predicted: predicted_disease })
            console.log(this.state.highest_predicted)
            this.props.get_recc(predicted_disease);
        }
    }

    render() {
        return (
            <div>
                <SingleBanner />
                <form onSubmit={this.onFormSubmit}>
                    <input type="file" name="file" onChange={this.onChange} />
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>

                {(this.state.image) ?
                    <div>
                        <img src={this.state.image} alt="diseased_leaf" />
                        <button className="btn btn-danger" onClick={this.dopred}>Predict</button>
                    </div>
                    : null
                }

            </div>
        );
    }
}

const mapStateToProps = state => ({
    disease: state.get,
    soln: state.soln
});

export default connect(mapStateToProps, { load_model, get_recc })(SimpleImage);
