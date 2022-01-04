import { Meteor } from 'meteor/meteor';
import Aides from '../collections/Aides.js';

Meteor.publish('aides', function () {
  return Aides.find();
});
