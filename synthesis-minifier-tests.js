// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by synthesis-minifier.js.
import { name as packageName } from "meteor/synthesis-minifier";

// Write your tests here!
// Here is an example.
Tinytest.add('synthesis-minifier - example', function (test) {
  test.equal(packageName, "synthesis-minifier");
});
