var ghpages = require("gh-pages");

ghpages.publish(
  "build",
  {
    branch: "gh-pages",
    repo: "https://github.com/shobhanbiswas11/client-anacademy.git",
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
    }
  }
);
