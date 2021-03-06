importClass(com.sprintstack.core.IPath);

var Path = function() {

  this.normalize = function(p) {
    return IPath.normalize(p).toString();
  }

  this.join = function() {
    var args = Array.prototype.slice.call(arguments);
    return IPath.join(args).toString();
  }

  this.resolve = function() {
    // todo
  }

  this.relative = function(from, to) {
    return IPath.relativize(from, to).toString();
  }

  this.exists = function(p, callback) {
    async(function() {
      return IPath.exists(p);
    }, function(err, result) {
      callback(result);
    });
  }

  this.existsSync = function(p) {
    return IPath.exists(p);
  }

};

module.exports = new Path();

