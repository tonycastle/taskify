import React, { Component } from 'react';

export default class Task extends Component{
    render(){
        return (
            <li>{this.props.task.time} - {this.props.task.description}</li>
        );
    };
}