var bio = {
	"name" : "Abhishek Chakraborty",
	"role" : "Web Developer",
	"contacts":{
		"mobile" : "(+91)9958345723",
		"email" : "eofsentinel@outlook.com",
		"github" : "abhichak95",
		"twitter" : "abhichak93",
		"location" : "Greater Noida"
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
		"location" : "Greater Noida",
		"description" : "No special jobs. Just a student."
	},
	{
		"employer" : "Microsoft",
		"title" : "Web Developer",
		"dates" : "2016 - Future",
		"location" : "San Francsico",
		"description" : "Lead web developer in the team that manages the global Microsoft webpage."
	}]
}

var education = {
	"schools" : [
	{
		"name" : "Tulsi Vidya Niketan",
		"city" : "Varanasi, UP, India",
		"years" : "2000-2012",
		"major" : ["Computer Science", "Physics", "Chemistry", "Mathematics", "English"],
		"url" : "http://www.tvnschool.org/"
	},
	{
		"name" : "Galgotias College of Engg & Technology",
		"city" : "Greater Noida, UP, India",
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
	"projects" : [
	{
		"title" : "Atari Breakout",
		"dates" : "2013",
		"description" : "A simple version of the famous Atari Breakout game, implemented in C using Stanford Portable Library. Currently supports Linux-based OS only.",
		"image" : "images/projectBreakout"
	},
	{
		"title" : "Simple Chess",
		"dates" : "2015",
		"description" : "A simple version of Chess game, implemented in Python. For Windows OS. Currently under development.",
		"image" : ""
	}]
}

if (bio["skills"].length > 0){
	$("#header").append(HTMLskillsStart);
	for (i in bio["skills"])
	{
		var formattedSkill = HTMLskills.replace("%data%", bio["skills"][i]);
		$("#skills").append(formattedSkill);
	}
}

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

