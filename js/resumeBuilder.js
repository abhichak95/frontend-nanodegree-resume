var bio = {
	"name" : "Abhishek Chakraborty",
	"role" : "Web Developer",
	"contacts":{
		"mobile" : "(+91)9958345723",
		"email" : "eofsentinel@outlook.com",
		"github" : "abhichak95",
		"twitter" : "abhichak93",
		"location" : "New Delhi, India"
	},
	"bioPic" : "images/me.jpg",
	"welcomeMsg" : "Hello buddy!",
	"skills" : ["awesomeness", "programming", "web designing"]
}

var work = {
	"jobs" : [
	{
		"employer" : "Galgotias College of Engg & Technology",
		"title" : "Student",
		"dates" : "2012 - 2016",
		"location" : "Greater Noida, India",
		"description" : "No special jobs. Just a student."
	},
	{
		"employer" : "Microsoft",
		"title" : "Web Developer",
		"dates" : "2016 - Future",
		"location" : "San Francisco, US",
		"description" : "Lead web developer in the team that manages the global Microsoft webpage."
	}]
}

var education = {
	"schools" : [
	{
		"name" : "Tulsi Vidya Niketan",
		"city" : "Varanasi, India",
		"years" : "2000-2012",
		"major" : ["Computer Science", "Physics", "Chemistry", "Mathematics", "English"],
		"url" : "http://www.tvnschool.org/"
	},
	{
		"name" : "Galgotias College of Engg & Technology",
		"city" : "Greater Noida, India",
		"years" : "2012-2016",
		"major" : "Computer Science",
		"url" : "http://galgotiacollege.edu/"
	}],
	"onlineCourses" : [
	{
		"title" : "JavaScript Basics",
		"url" : "https://www.udacity.com/course/ud804"
	},
	{
		"title" : "Introduction to Programming using Python",
		"url" : "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-0"
	},
	{
		"title" : "Algorithms: Design & Analysis, Part 1",
		"url" : "https://www.coursera.org/course/algo"
	}]
}

var projects = {
	"project" : [
	{
		"title" : "Atari Breakout",
		"dates" : "2013",
		"description" : "A simple version of the famous Atari Breakout game, implemented in C. It uses Stanford Portable Library to draw the graphic elements (GUI). Currently supports Linux-based OS only. This was developed when I was working on an online course which goes by tha name, CS50x, from edX.org.",
		"image" : ["images/projectBreakoutThumb.png"]
	},
	{
		"title" : "Simple Chess",
		"dates" : "2015",
		"description" : "A simple version of Chess game, implemented in Python. This game employs a simple GUI (using PyGame) and supports Defensive, Offensive and a Random AI. This project was developed by me during the 6th semester of my regular course for the Infosys Campus Connect Programme. This project has scope of further development, since some special moves of a chess game are yet to be implemented, and the AI is just a simple one.",
		"image" : ["images/ProjectChessSS1Thumb.png", "images/ProjectChessSS2Thumb.png"]
	}]
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

if (bio["skills"].length > 0){
	$("#header").append(HTMLskillsStart);
	for (i in bio["skills"])
	{
		var formattedSkill = HTMLskills.replace("%data%", bio["skills"][i]);
		$("#skills").append(formattedSkill);
	}
}

var displayWork = function() {
	if (work["jobs"].length > 0){
		$("#workExperience").append(HTMLworkStart);
		for (i in work["jobs"])
		{
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][i]["employer"]);
			var formattedTitle = HTMLworkTitle.replace("%data%", work["jobs"][i]["title"]);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work["jobs"][i]["dates"]);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work["jobs"][i]["location"]);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%", work["jobs"][i]["description"]);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

displayWork();

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

var inName = function(name) {
	nameArray = name.trim().split(" ");
	firstName = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	lastName = nameArray[1].toUpperCase();
	return firstName + " " + lastName;
}



projects.display = function() {
	for(var i in projects.project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDates.replace("%data%", projects.project[i].description);
		$(".project-entry:last").append(formattedDescription);
		for(var img in projects.project[i].image) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.project[i].image[img]);
			$(".project-entry:last").append(img == 0 ? "<br>" + formattedImage : formattedImage);
		}
	}
}
projects.display();


$("#mapDiv").append(googleMap);