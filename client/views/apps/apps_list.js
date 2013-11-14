
Template.appsList.helpers({
  apps: function() {
    return Apps.find({}, {sort: {submitted: -1}, limit: appsHandle.limit()});
  },
  appsReady: function(){
  	return appsHandle.ready();
  },
  allAppsLoaded: function() {
  	return appsHandle.ready() && Apps.find().count() < appsHandle.loaded();
  }
});
