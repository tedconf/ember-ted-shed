/*jshint node:true*/
module.exports = {
  // no-op since we're just adding dependencies
  normalizeEntityName: function() {}, 

  afterInstall: function(options) {
    return this.addBowerPackageToProject(
      'shed-css', 
      'https://npmcdn.com/shed-css@1.0.0-rc.8/dist/index.css'
    );
  }
};
