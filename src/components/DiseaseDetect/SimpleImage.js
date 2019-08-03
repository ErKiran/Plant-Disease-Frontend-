import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import SingleBanner from "../common/SingleBanner";
import Recommend from "./Recommend";
import Title from "../common/Title";
import { load_model } from '../../actions/load_model';
import { top_three } from '../../helpers/top_three';
import { get_recc } from '../../actions/get_recc';
import './space.css'

let pred = {};

const pStyle = {
    width: '380px',
    height: '380px'
};


class SimpleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            image: '',
            submitted: false,
            predicted: false,
            reset: true
        }
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.fileUpload(this.state.file)
        this.setState({
            submitted: true
        })
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
        this.setState({
            predicted: true
        })
        const get = top_three(result);
        const predicted_disease = Object.values(get).slice(0, 3)[0][1];
        const outcomes = Object.values(get).slice(0, 3);
        pred.result = outcomes;
        this.props.get_recc(predicted_disease);
    }

    render() {
        const solution = this.props.soln.solution;
        console.log(solution)
        return (
            <div className="text-center">
                <SingleBanner />
                <Title title="Upload Image"/>
                <form onSubmit={this.onFormSubmit}>
                    <input type="file" name="file" onChange={this.onChange} />
                    {(this.state.image)?
                    <button type="submit" className="btn btn-success">Submit</button>: null}
                    <br />
                </form>

                {(this.state.reset) ?
                    <div>

                        {(this.state.submitted) ?
                            <>
                                <div>
                                    <img src={this.state.image} alt="diseased_leaf" style={pStyle} />

                                </div>
                                <br/>
                                {' '}
                                <button className="btn btn-danger" onClick={this.dopred}>Predict</button>
                                <br/>
                                <br/>
                            </>
                            : null
                        }
                        <br/>
                        {
                            (this.state.predicted) ? <div className="space">
                                {pred.result[0][1]} <Progress percent={Math.round(pred.result[0][0] * 100 * 100) / 100} />
                                {pred.result[1][1]} <Progress percent={Math.round(pred.result[1][0] * 100 * 100) / 100} />
                                {pred.result[2][1]} <Progress percent={Math.round(pred.result[2][0] * 100 * 100) / 100} />
                                <Title title={solution.PLANT}>
                                <h3 className="text-danger"> {solution.DISEASE}</h3>
                                </Title>
                                {(solution.CAUSUAL_AGENT)? 
                                    <>
                                <Recommend
                                info1="Causual Agent"
                                agent={solution.CAUSUAL_AGENT}
                                info2="Effects"
                                effect={solution.EFFECT_SYMPTOMS}
                                info3="Control Measure"
                                control={solution.CONTROL_MEASURES}
                                />
                                <Title/>
                                <Title/>
                                <Title/>
                                <Title/>
                                <Title/>
                                <Title/>
                                </>
                                : <img src="images/ok.jpg" alt="ok"/>}
                            </div> : null
                        }
                    </div> : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    disease: state.get,
    soln: state.soln
});

export default connect(mapStateToProps, { load_model, get_recc })(SimpleImage);
