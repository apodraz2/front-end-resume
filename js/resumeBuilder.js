var bio = {
    "name" : "Susan Wu",
    "role" : "Web Developer",
    "contacts" : {
        mobile : "773-896-6616",
        email : "wususa@gmail.com",
        github : "git",
        location : "Chicago, IL",
        
    },
    skills : ["interpersonal skills", "problem solving", "creative", "bulldog"],
    "welcomeMessage": "Mahalo",
    "biopic": "images/fry.jpg",
};


var education = { 
    "schools" : [ 
        {
        name: "Dominican University",
        location: "River Forest, IL",
        degree: "BA",
        dates: "2008",
        majors: ["Apparel Design"], 
        }
    ],
    "onlineCourses" : [
        {
        title: "Front-End Web Design",
        school: "Udacity",
        dates: "2017",
        url: "udacity.com",
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
    $("#topContacts").append(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#topContacts").append(formattedRole);
   
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


education.display = function () {
    
    
    
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart); 
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            $(".education-entry:last").append(formattedSchoolName);
      
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedSchoolLocation);
 
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedSchoolDegree);
 
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolDates);
 
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedSchoolMajor);
        });

    
    
    
        education.onlineCourses.forEach(function(onlineCourse) {
            $("#education").append(HTMLonlineClasses); 
        
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            $("#education").append(formattedOnlineTitle);
      
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            $("#education").append(formattedOnlineSchool);
 
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            $("#education").append(formattedOnlineDates);
 
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            $("#education").append(formattedOnlineURL);
        });
    
    };
    
                              
education.display ();

work.jobs.display = function () {
    
    $("#workExperience").append(HTMLworkStart);
    
    work.jobs.forEach(function(job) {
      	
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        $("#workExperience").append(formattedWorkEmployer);
      
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        $("#workExperience").append(formattedWorkTitle);
 
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        $("#workExperience").append(formattedWorkLocation);
 
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        $("#workExperience").append(formattedWorkDates);
 
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        $("#workExperience").append(formattedWorkDescription);
    
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

    if (projects.projects[i].images.length > 0) {
      for (var image in projects.projects[i].images) {
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
        $(".project-entry:last").append(formattedImages);
      }
    }
  }
};
projects.display();

$("#mapDiv").append(googleMap);




