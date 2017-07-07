import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class NewPlaylist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            disabled: true,
            isDiiiiirrttyy: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    };

    handleChange(event) {
        this.setState({
            isDiiiiirrttyy: true
        })
        this.setState({
            inputValue: event.target.value,
        })
        if (event.target.value.length > 16 || event.target.value === '') {
            this.setState({
                disabled: true
            })
        }
        else {
            this.setState({
                disabled: false
            })
        }



    }

    handleSubmit(event) {

        event.preventDefault();
        // console.log(this.state.inputValue)
        this.props.addPlaylist(this.state.inputValue);
        this.setState({
            inputValue: ''
        })
    }

    render() {
        return (
            <div className="well">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    {/*{console.log(this.state)}*/}
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                {this.state.isDiiiiirrttyy && this.state.disabled ? (<div className="alert alert-warning">Please enter a valid name</div>) : ''}
                                <input className="form-control" type="text" value={this.state.inputValue} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success" disabled={this.state.disabled}>Create Playlist</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>

        )
    }



}