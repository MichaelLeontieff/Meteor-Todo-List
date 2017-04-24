Tasks = new Meteor.Collection("tasks");

Meteor.methods({
  addTask: function(name){
    if (!Meteor.userId()) {
      throw new Meteor.Error("No Access!");
    } else {
      Tasks.insert({
        name: name,
        createdAt: new Date(),
        userId: Meteor.userId()
      });
    }
  },
  deleteTask: function(taskId){
    Tasks.remove(taskId);
  }
});
