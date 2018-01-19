import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';
import Task from './Task.js';

class App extends Component{
    renderTasks() {
        return this.props.tasks.map((task) => (
          <Task key={task._id} task={task} />
        ));
    }

    render(){
        return (
            <div className="container">
                <header>
                    <h1>Tasks</h1>
                </header>
                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
      tasks: Tasks.find({}).fetch(),
    };
  })(App);