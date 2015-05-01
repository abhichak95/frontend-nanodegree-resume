var bio = {
	"name" : "Abhishek Chakraborty",
	"role" : "Computer Science Student",
	"contacts":{
		"mobile" : "(+91)9958345723",
		"email" : "eofsentinel@outlook.com",
		"github" : "abhichak95",
		"twitter" : "abhichak93",
		"location" : "Greater Noida, India"
	},
	"welcomeMsg" : "\"The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.\" ― Edsger W. Dijkstra",
	"skills" : ["TECHNICAL: C, C++, Python, Java", "WEB DEVELOPMENT: HTML, CSS, JavaScript (+ jQuery)"],
	"bioPic" : "images/me.jpg",
	"display" : function() {
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", this.name);
		$("#header").prepend(formattedName);

		var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);

		var formattedBioPic = HTMLbioPic.replace("%data%", this.bioPic);
		$("#header").append(formattedBioPic);

		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMsg);
		$("#header").append(formattedWelcomeMsg);

		if (this.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			for (i in this.skills) {
				var formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
	}
}
bio.display();

var work = {
	"jobs" : [
		{
			"employer" : "No working experience yet",
			"title" : "",
			"dates" : "",
			"location" : "",
			"description" : ""
		}
	],
	"display" : function () {
		if (this.jobs.length > 0) {
			$("#workExperience").append(HTMLworkStart);
			for (i in this["jobs"]) {
				var formattedEmployer = HTMLworkEmployer.replace("%data%", this["jobs"][i]["employer"]);
				var formattedTitle = HTMLworkTitle.replace("%data%", this["jobs"][i]["title"]);
				$(".work-entry:last").append(formattedEmployer + formattedTitle);
				var formattedDates = HTMLworkDates.replace("%data%", this["jobs"][i]["dates"]);
				$(".work-entry:last").append(formattedDates);
				var formattedLocation = HTMLworkLocation.replace("%data%", this["jobs"][i]["location"]);
				$(".work-entry:last").append(formattedLocation);
				var formattedDescription = HTMLworkDescription.replace("%data%", this["jobs"][i]["description"]);
				$(".work-entry:last").append(formattedDescription);
			}
		}
	}
}
work.display();

var education = {
	"schools" : [
	{
		"name" : "Tulsi Vidya Niketan",
		"location" : "Varanasi, India",
		"degree" : "12th Standard (CBSE)",
		"dates" : "2010-2012",
		"majors" : ["Computer Science", "Physics", "Chemistry", "Mathematics", "English"],
		"url" : "http://www.tvnschool.org/"
	},
	{
		"name" : "Tulsi Vidya Niketan",
		"location" : "Varanasi, India",
		"degree" : "10th Standard (CBSE)",
		"dates" : "2000-2010",
		"majors" : ["Science", "Mathematics", "English", "Social Science"],
		"url" : "http://www.tvnschool.org/"
	},
	{
		"name" : "Galgotias College of Engg & Technology",
		"location" : "Greater Noida, India",
		"degree" : "Bachelors of Technology (UPTU)",
		"dates" : "2012-2016",
		"majors" : "Computer Science",
		"url" : "http://galgotiacollege.edu/"
	}],
	"onlineCourses" : [
	{
		"title" : "JavaScript Basics",
		"school" : "Udacity",
		"date" : "May 2015",
		"url" : "https://www.udacity.com/course/ud804"
	},
	{
		"title" : "Introduction to Programming using Python",
		"school" : "edX MIT",
		"date" : "October 2014",
		"url" : "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-0"
	},
	{
		"title" : "Algorithms: Design & Analysis, Part 1",
		"school" : "Stanford Coursera",
		"date" : "April 2015",
		"url" : "https://www.coursera.org/course/algo"
	}]
}

var projects = {
	"project" : [
	{
		"title" : "Atari Breakout",
		"dates" : "2013",
		"description" : "A simple version of the famous Atari Breakout game, implemented in C. It uses Stanford Portable Library to draw the graphic elements (GUI). Currently supports Linux-based OS only. This was developed when I was working on an online course which goes by tha name, CS50x, from edX.org.",
		"images" : ["images/projectBreakoutThumb.png"]
	},
	{
		"title" : "Simple Chess",
		"dates" : "2015",
		"description" : "A simple version of Chess game, implemented in Python. This game employs a simple GUI (using PyGame) and supports Defensive, Offensive and a Random AI. This project was developed by me during the 6th semester of my regular course for the Infosys Campus Connect Programme. This project has scope of further development, since some special moves of a chess game are yet to be implemented, and the AI is just a simple one.",
		"images" : ["images/ProjectChessSS2Thumb.png", "images/ProjectChessSS1Thumb.png"]
	}]
}
projects.display = function() {
	for(var i in this.project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", this.project[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", this.project[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDates.replace("%data%", this.project[i].description);
		$(".project-entry:last").append(formattedDescription);
		for(var img in this.project[i].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", this.project[i].images[img]);
			$(".project-entry:last").append(img == 0 ? "<br>" + formattedImage : formattedImage);
		}
	}
}
projects.display();


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


$("#mapDiv").append(googleMap);