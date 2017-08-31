var bio = {
    "name": "Archana Shivashankar",
    "role": "Android Application Developer",
    "contacts": {
        "mobile": "408-225-8888",
        "email": "archana12n@gmail.com",
        "github": "ArcMax",
        "twitter": "@archana12n",
        "location": "San Francisco"
    },
    "welcomeMessage": "Goal oriented software engineer with more than 2 years of experience on android application development.Targeted to the task & will make sure implementation-execution to test cases are taken care",
    "skills": ["Android", "XML", "HTML", "CSS", "JavaScript"],
    "biopic": "images/fry.jpg"
};

var education = {
    "schools": [{
        "name": "Visvesvaraya Technological University",
        "location": "Banglore",
        "degree": "Bachelor",
        "majors": ["computer science"],
        "dates": "2006-2010",
        "url": "http://mctrgit.ac.in/"
    }],
    "onlineCourses": [{
            "title": "Front-End Developer",
            "school": "Udacity",
            "dates": "In progress",
            "url": "https://printer.udacity.com/certificate/nd801"
        },
        {
            "title": "Android Developer",
            "school": "Udacity",
            "dates": "2015-2016",
            "url": "https://printer.udacity.com/certificate/nd801"
        }

    ]
};

var work = {
    "jobs": [{
            "employer": "Google",
            "title": "Android Developer",
            "location": "Mountain View",
            "dates": "In progress",
            "description": "UI implementation as per design :)"
        },
        {
            "employer": "Mobinius Technologies Pvt. Ltd.",
            "title": "Android Application Developer",
            "location": "Banglore",
            "dates": "2013-2015",
            "description": "Optimizing code to improve performance of an app.Worked with designers to build a effective, user friendly UX. Achieved complex UI task completion under tight deadlines. Increased team productivity by 20% by pre planned task"
        },

        {
            "employer": "Sourcebits, Inc.",
            "title": "Android Developer",
            "location": "Banglore",
            "dates": "2013",
            "description": "Worked on UI development for Tablet & phone"
        }
    ]
};

var projects = {
    "projects": [{
        "title": "EDControls",
        "dates": "Apr 2015 – Apr 2015",
        "description": "ED Controls is an innovative system for communication and registration. A deviation or instruction is easily recorded: with a picture (and text), connected to a position on drawing, time and the one responsible. It gives a clear overview of the tasks that need to be performed.",
        "images": ["images/thumbnail.png"]
    }]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedImage);
$("#header").append(formattedWelcomeMessage);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedLocation);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
}

work.display = function() {
    work.jobs.forEach(function(job) {
        console.log(job);
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDate = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDate);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);

    });
};

projects.display = function() {

    projects.projects.forEach(function(project) {
        console.log(project);

        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images);

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDate);
        $(".project-entry:last").append(formattedProjectDescription);
        $(".project-entry:last").append(formattedProjectImage);

    });
};

education.display = function() {

    education.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolUrl = HTMLschoolURL.replace("%data%", school.url);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;


        $(".education-entry:last").append(formattedSchoolNameDegree);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolDate);
        $(".education-entry:last").append(formattedSchoolMajors);
        $(".education-entry:last").append(formattedSchoolUrl);


    });


    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        console.log(course);

        var formattedCourseTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedCourseSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedCourseDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedCourseUrl = HTMLonlineURL.replace("%data%", course.url);
        var formattedCourseTitleSchool = formattedCourseTitle + formattedCourseSchool;


        $(".education-entry:last").append(formattedCourseTitleSchool);
        $(".education-entry:last").append(formattedCourseDates);
        $(".education-entry:last").append(formattedCourseUrl);
    });
};

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);

    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

inName(bio.name);

work.display();
projects.display();
education.display();