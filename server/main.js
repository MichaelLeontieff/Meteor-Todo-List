import { Meteor } from 'meteor/meteor';

Meteor.publish("tasks", function () {
  return Tasks.find({
    userId: this.userId
  });
});

Meteor.startup(() => {
  // code to run on server at startup
});
