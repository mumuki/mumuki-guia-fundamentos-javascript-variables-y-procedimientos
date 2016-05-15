var console = {
  lines: [],
  log: function(line) {
    this.lines.push(line + "\n");
  },
  toString: function() {
    return String.prototype.concat.apply([], this.lines);
  }
};

