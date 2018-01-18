import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.js'
import './main.html';
import { Tracker } from 'meteor/tracker';

Meteor.startup(()=>{
  render(<App />, document.getElementById('render-target'));
});

