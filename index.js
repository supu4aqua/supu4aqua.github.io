//When About Link from the left side bar is clicked, it reloads the page
function OnAbout() {
    $('.about').on('click', function(e) {
        location.reload();
    });
}

function OnProjects() {
    $('.projects').on('click', function(e) {
        //console.log("Projects");
        // $('.bio').remove();
        $('.container').html('<div class="projects-info"><div class="project-image"><img src="Project1-Main.png" alt="Interactive App"/></div><div class="project-details"><p><span>Food Engineering Quiz</span> is an interactive web app to test your food knowledge. The quiz contains 10 questions and each question has 4 multiple-choice questions. The User gets feedback once they submit the answer. User must score at least 7 out of 10 to pass the quiz. User will have the option to restart the quiz at the end.<br><br>Technologies used - HTML, CSS, JavaScript, JQuery.<br></div><div class="flex-container"><ul class="links"><li><a class="no-anchor-style" href="https://supu4aqua.github.io" target="_blank"><i class="fas fa-desktop"></i>Live Demo</a></li><li><a class="no-anchor-style" href="https://github.com/supu4aqua/InteractiveWebApp.git" target="_blank"><i class="fab fa - github"></i>View Source</a></li></ul></div></ul></div></div><div class="projects-info"><div class="project-image"><img src="Project2-Main.png" alt="Trail Finder"/></div><div class="project-details"><p><span>Trail Finder</span> is an app that helps to find the trail in a city. Users can search for trails and can also filter the results based on search radius from the location entered, and  minimum trail length. User can sort the results based on Quality or Distance of the trail.<br><br>Technologies used - HTML, CSS, JavaScript, JQuery.<br></div><div class="flex-container"><ul class="links"><li><a class="no-anchor-style" href="https://supu4aqua.github.io/TrailFinder/" target="_blank"><i class="fas fa-desktop"></i>Live Demo</a></li><li><a class="no-anchor-style" href="https://github.com/supu4aqua/TrailFinder.git" target="_blank"><i class="fab fa - github"></i>View Source</a></li></ul></div></ul></div></div>');
        $('.menu-dropdown').toggleClass('hide');
    });
    //$('.menu-dropdown').css('display', none);
}

function OnHamburger() {
    $('.hamburger').on('click', function(e) {
        $('.menu-dropdown').toggleClass('hide');
    });
}

function OnLoad() {
    OnAbout();
    OnProjects();
    OnHamburger();
}

$(OnLoad);
