Comments = new Meteor.Collection('comments');

Meteor.methods({
  comment: function(commentAttributes) {
    var user = Meteor.user();
    var app = Apps.findOne(commentAttributes.appId);
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "Oops, you need to login to add comments.");
    if (!commentAttributes.body)
      throw new Meteor.Error(422, "Dude, you said you were going to comment. I didn't see your comment. Try again?");
    if (!commentAttributes.appId)
      throw new Meteor.Error(422, "Huh. We weren't sure which app that comment was for. Try again?");
    comment = _.extend(_.pick(commentAttributes, 'appId', 'body'), {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });
    return Comments.insert(comment);
  }
});