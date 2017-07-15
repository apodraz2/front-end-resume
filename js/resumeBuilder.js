/*jshint loopfunc: true */
var bio = {
    "name" : "Susan Wu",
    "role" : "Web Developer",
    "contacts" : {
        mobile : "773-896-6616",
        email : "wususa@gmail.com",
        github : "git",
        location : "Chicago, IL"
        
    },
    skills : ["interpersonal skills", "problem solving", "creative", "bulldog"],
    "welcomeMessage": "Mahalo",
    "biopic": "images/fry.jpg"
};


var education = {
    "schools" : [
        {
        name: "Dominican University",
        location: "River Forest, IL",
        degree: "BA",
        dates: "2008",
        majors: ["Apparel Design"]
        }
    ],
    "onlineCourses" : [
        {
        title: "Front-End Web Design",
        school: "Udacity",
        dates: "2017",
        url: "udacity.com"
        }
    ],
    
};

var work = {
    "jobs" : [ 
        {
        employer: "Puppy Transit",
        title: "C Arf O",
        location: "Chicago, IL",
        dates: "2015 to current",
        description: "creating art that captures the personality of our furry family members",
        }
    ],
};

var projects = {
    "projects" : [
        {
        title: "Puppytransit.com",
        dates: "2015 to current",
        description: "website showcasing custom content for pet lovers",
        images: ["https://puppytransit.wpengine.com/wp-content/uploads/2016/06/cropped-puppy-transit-logo-denver-light-gray-20.png","https://puppytransit.wpengine.com/wp-content/uploads/2016/06/cropped-puppy-transit-logo-denver-light-gray-20.png"],
        }
    ],
};
    
bio.display = function () {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);
   
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbioPic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

$("#header").append(HTMLskillsStart);
    
    bio.skills.forEach(function(skill) {
        
    
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    
   
    });
                       
};
                                   
bio.display();


education.display = function() {
    education.schools.forEach(function (school) {
        $("#education").append(HTMLschoolStart); 
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDates);
      
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolDegree);
 
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);           $(".education-entry:last").append(formattedSchoolMajor);
    });

    
    
    
        education.onlineCourses.forEach(function(onlineCourse) {
            $(".education-entry:last").append(HTMLonlineClasses); 
        
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            $(".education-entry:last").append(formattedOnlineTitle);
      
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            $(".education-entry:last").append(formattedOnlineSchool);
 
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            $(".education-entry:last").append(formattedOnlineDates);
 
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            $(".education-entry:last").append(formattedOnlineURL);
        });
    
    };
    
                              
education.display ();

work.jobs.display = function () {
    
    
    
    work.jobs.forEach(function(job) {
      	
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
      
        
       
 
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedWorkLocation);
 
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedWorkDates);
 
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedWorkDescription);
    
    });
};
work.jobs.display ();

projects.display = function () {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
    $(".project-entry:last").append(formattedProjectDescription);
    var s = projects.projects[i].images;
      
    if (s.length > 0) {
      s.forEach(function(image) {
        var formattedImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedImage);
      });
    }
  }
};
projects.display();

$("#mapDiv").append(googleMap);




