//When About Link from the left side bar is clicked, it reloads the page
function OnAbout() {
  $(".about").on("click", function (e) {
    location.reload();
  });
}

function OnProjects() {
  $(".projects").on("click", function (e) {
    $(".container").html(
      '<h2 tabindex="0">Projects</h2><hr /><div class="projects-info" role="img" aria-label="Textual Description"><div class="project-image trails-to-go"></div><div class="project-details"><p><span>Trails To Go</span> is an app that allow users to search for trails by zipcode and filter the list by trail rating or length. Users can also register and mark a trail as completed. User profile section shows the statistics based on the trails completed by the user.<br><br><div class="techStackContainer"><div class="techStack"><div class="stackIcon"><img title="Node.js" src="images/nodejs.png"><p>Node</p></div><div class="stackIcon"><img title="Express.js" src="images/express.png"><p>Express</p></div><div class="stackIcon"><img title="Json Web Token" src="images/jwt.png"><p>JWT</p></div><div class="stackIcon"><img title="mocha.js" src="images/mocha.png"><p>Mocha</p></div><div class="stackIcon"><img title="chai.js" src="images/chaijs.png"><p>Chai</p></div><div class="stackIcon"><img title="html5" src="images/html5.png"><p>HTML5</p></div><div class="stackIcon"><img title="CSS3" src="images/css-3.png"><p>CSS3</p></div><div class="stackIcon"><img title="JavaScript" src="images/javascript.png"><p>JavaScript</p></div></div></div><br></div><div class="flex-container"><ul class="links"><li><a class="live-demo" href="https://trails-to-go-client.mesupi.vercel.app" target="_blank"><img src="images/LiveDemo.png" />Demo</a></li><li><a class="view-source" href="https://github.com/supu4aqua/trails-to-go-client.git" target="_blank"><img src="images/ViewSource.png" />Code</a></li></ul></div></ul></div><div class="projects-info"><div class="project-image painting-with-pixels"></div><div class="project-details"><p><span>Painting With Pixels</span> is an app for creating a painting by coloring the pixels on 3x3 grid. User can create or update any existing painting. Color can be selected from a palette of 10 colors. Each painting have 9 cells representing one of the colors of the grid.<br><br><div class="techStackContainer"><div class="techStack"><div class="stackIcon"><img title="Node.js" src="images/nodejs.png"><p>Node</p></div><div class="stackIcon"><img title="Express.js" src="images/express.png"><p>Express</p></div><div class="stackIcon"><img title="mocha.js" src="images/mocha.png"><p>Mocha</p></div><div class="stackIcon"><img title="chai.js" src="images/chaijs.png"><p>Chai</p></div><div class="stackIcon"><img title="html5" src="images/html5.png"><p>HTML5</p></div><div class="stackIcon"><img title="CSS3" src="images/css-3.png"><p>CSS3</p></div><div class="stackIcon"><img title="JavaScript" src="images/javascript.png"><p>JavaScript</p></div></div></div><br></div><div class="flex-container"><ul class="links"><li><a class="live-demo"  href="https://painting-with-pixels-app.mesupi.now.sh" target="_blank"><img src="images/LiveDemo.png" />Demo</a></li><li><a class="view-source" href="https://github.com/supu4aqua/painting-with-pixels-app.git" target="_blank"><img src="images/ViewSource.png" />Code</a></li></ul></div></ul></div><div class="projects-info"><div class="project-image trail-finder"></div><div class="project-details"><p><span>Trail Finder</span> is an app that helps to find the trail in a city. Users can search for trails and can also filter the results based on search radius from the location entered, and  minimum trail length. User can sort the results based on Quality or Distance of the trail.<br><br><div class="techStackContainer"><div class="techStack"><div class="stackIcon"><img title="html5" src="images/html5.png"><p>HTML5</p></div><div class="stackIcon"><img title="CSS3" src="images/css-3.png"><p>CSS3</p></div><div class="stackIcon"><img title="JavaScript" src="images/javascript.png"><p>JavaScript</p></div></div></div><br></div><div class="flex-container"><ul class="links"><li><a class="live-demo" href="https://supu4aqua.github.io/TrailFinder/" target="_blank"><img src="images/LiveDemo.png" />Demo</a></li><li><a class="view-source" href="https://github.com/supu4aqua/TrailFinder.git" target="_blank"><img src="images/ViewSource.png" />Code</a></li></ul></div></ul></div></div></div>'
    );
    $(".menu-dropdown").toggleClass("hide");
  });
}

function OnHamburger() {
  $(".hamburger").on("click", function (e) {
    $(".menu-dropdown").toggleClass("hide");
  });
}

function OnLoad() {
  OnAbout();
  OnProjects();
  OnHamburger();
  OnTrailsToGo();
}

$(OnLoad);
