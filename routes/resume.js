var express = require('express');
var router = express.Router();
var Resume = require('../models/resume');

var resumeJSON = {
  "title" : "Joe's Resume",
  "name" : "Joe Ekiert",
  "email" : "joe.ekiert@gmail.com",
  "website" : "http://ekiert.net/",
  "street_address" : "",
  "city" : "San Francisco",
  "state" : "",
  "zip" : "",
  "phone" : "978.375.5916",
  "technical_experience" : [
    {
      "title" : "Primary",
      "items" : ["JavaScript", "Ruby", "PHP", "HTML5", "CSS", "git"]
    },
    {
      "title" : "Secondary",
      "items" : ["*nix", "SQL", "Regular Expressions"]
    },
    {
      "title" : "Storage",
      "items" : ["PostgreSQL", "MySQL", "Solr", "Memcached", "REDIS", "localStorage"]
    },
    {
      "title" : "Frameworks",
      "items" : ["Angular.js", "Ruby on Rails", "CodeIgniter", "node.js"]
    },
    {
      "title" : "Passive",
      "items" : ["Strong ability to understand and learn unknown syntax through documentation.  When in range, +25 to group morale."]
    }
  ],
  "weapons_of_choice" : [
    {
      "title" : "Development",
      "items" : ["RubyMine", "Sublime Text 2", "Nginx", "Virtual Box for compatibility testing", "Custom MAMP", "SequelPro", "ForkLift"]
    },
    {
      "title" : "Unit Testing",
      "items" : ["Rspec for Ruby on Rails", "karma.js for Angular.js"]
    },
    {
      "title" : "Versioning",
      "items" : ["git via Tower Client"]
    }
  ],
  "relevant_experience" : [
    {
      "company_name" : "Helix Education",
      "company_role" : "Software Engineer",
      "date_start" : "February 2014",
      "date_end" : "Present",
      "responsibilities" : [
        {
          "title" : "untitled",
          "order" : 1,
          "description" : "Worked performing feature development (client and server side) on our platform consisting of Ruby on Rails framework applications, PostgreSQL and REDIS store, with unit and regression testing."
        },
        {
          "title" : "untitled",
          "order" : 2,
          "description" : "Tasked with converting Ruby on Rails model/view/controller for specific user-role experience to Angular.js factory/directive/service."
        },
        {
          "title" : "untitled",
          "order" : 3,
          "description" : "Broke down one of the platform applications from traditional MVC into controller/model driven api.  Helping to unify platform user experiences into a single application."
        },
        {
          "title" : "untitled",
          "order" : 4,
          "description" : "Assisted in conforming site experience of various user roles to follow accessibility standards."
        }
      ]
    },
    {
      "company_name" : "72Lux",
      "company_role" : "Founding Member/Engineer",
      "date_start" : "December 2011",
      "date_end" : "February 2014",
      "responsibilities" : [
        {
          "title" : "untitled",
          "order" : 1,
          "description" : "Played a heavy role in building the JavaScript code from which product frames are rendered.  Major hurdles were reducing collisions with existing customer assets, maintaining a small file size, cross-compatibility and organization.  The tech stack utilized was grunt for compiling, yepnope for asynchronous asset loading, and dust templates for views.  This enabled the entire necessary code to exist in a single shop.js file."
        },
        {
          "title" : "untitled",
          "order" : 2,
          "description" : "Broke ground for the initial part of our platform: Shoppable Dashboard utilizing CodeIgniter."
        },
        {
          "title" : "untitled",
          "order" : 3,
          "description" : "Plays a customer support role for publishers trying to get Shoppable up and running."
        },
        {
          "title" : "untitled",
          "order" : 4,
          "description" : "Part of the team that built the Shoppable login portal for Merchants utilizing Ruby on Rails."
        },
        {
          "title" : "untitled",
          "order" : 5,
          "description" : "Design and construction of checkout views (initially via PHP then reconstructed in Ruby on Rails):  for enterprise users via rendering inside an iframe as well as self-serve where users are redirected to a 72Lux hosted checkout."
        },
        {
          "title" : "untitled",
          "order" : 6,
          "description" : "Whole lotta browser-compatibility testing: Desktop browsers, mobile browsers, tablets, different operating systems, etc..."
        },
        {
          "title" : "untitled",
          "order" : 7,
          "description" : "After losing the first CTO, worked tirelessly to help fill in the gaps, write up documentation and interview potential replacements."
        }
      ]
    },
    {
      "company_name" : "Seventh Art Group",
      "company_role" : "Web/iOS Developer",
      "date_start" : "October 2009",
      "date_end" : "December 2011",
      "responsibilities" : [
        {
          "title" : "untitled",
          "order" : 1,
          "description" : "Worked as a web developer and constructed MySQL Data powered Building and Development Websites with the back end written in PHP and the front end in HTML, CSS and JavaScript/jQuery plugins"
        },
        {
          "title" : "untitled",
          "order" : 2,
          "description" : "Developed a Site Application that utilized the CodeIgniter framework that provided database connections with additional logic that formed a back end to increase development efficiency"
        },
        {
          "title" : "untitled",
          "order" : 3,
          "description" : "Developed a CRM in order for various versions of Design Comparables to be displayed for clients"
        },
        {
          "title" : "untitled",
          "order" : 4,
          "description" : "Designed and developed multiple iOS applications for the iPad and iPhone for internal purposes"
        }
      ]
    },
    {
      "company_name" : "Leiter Realty",
      "company_role" : "Web Department",
      "date_start" : "April 2009",
      "date_end" : "August 2009",
      "responsibilities" : [
        {
          "title" : "untitled",
          "order" : 1,
          "description" : "In charge of upgrading various site cross-compatibility issues"
        },
        {
          "title" : "untitled",
          "order" : 2,
          "description" : "Provided modifications of various existing site issues specific to the listing service back end"
        },
        {
          "title" : "untitled",
          "order" : 3,
          "description" : "Maintained the front and back end of http://leiterrealty.com/"
        }
      ]
    },
    {
      "company_name" : "OnSite Services",
      "company_role" : "Web Designer/Developer Subcontractor",
      "date_start" : "November 2007",
      "date_end" : "December 2008",
      "responsibilities" : [
        {
          "title" : "untitled",
          "order" : 1,
          "description" : "Developed feature sets from assessed client needs"
        },
        {
          "title" : "untitled",
          "order" : 2,
          "description" : "Developed websites to be Search Engine Recognized"
        },
        {
          "title" : "untitled",
          "order" : 3,
          "description" : "Reverse-Engineer websites to troubleshoot existing issues"
        }
      ]
    }
  ],
  "schools" : [
    {
      "school_name" : "Tufts University",
      "wut" : "BA in Computer Engineering",
      "date_of_graduation" : "June 2005"
    }
  ],
  "projects" : [
    {
      "title" : "A fairly simple API to use with HTML5 localStorage",
      "link_title" : "https://github.com/smokinjoe/jocalstorage",
      "link_url" : "https://github.com/smokinjoe/jocalstorage"
    },
    {
      "title" : "Quick and simple event API",
      "link_title" : "https://github.com/smokinjoe/joevent",
      "link_url" : "https://github.com/smokinjoe/joevent"
    },
    {
      "title" : "When searching for a place to live in SF, I had to get creative",
      "link_title" : "https://github.com/smokinjoe/thegreatesthousemate",
      "link_url" : "https://github.com/smokinjoe/thegreatesthousemate"
    },
    {
      "title" : "Contributing to Hubot-Scripts Project",
      "link_title" : "https://github.com/smokinjoe/hubot-scripts",
      "link_url" : "https://github.com/smokinjoe/hubot-scripts"
    },
    {
      "title" : "Other things I poke around with on my Github page",
      "link_title" : "https://github.com/smokinjoe",
      "link_url" : "https://github.com/smokinjoe"
    },
    {
      "title" : "Construction of PyroCMS powered Product Listing Website",
      "link_title" : "http://ekiert.net/grelist/",
      "link_url" : "http://ekiert.net/grelist/"
    },
    {
      "title" : "Canvas Powered Ball Game",
      "link_title" : "http://smokinjoenews.com/canvas_game",
      "link_url" : "http://smokinjoenews.com/canvas_game"
    },
    {
      "title" : "Working with PanoramaGL Library for iOS",
      "link_title" : "http://code.google.com/p/panoramagl/",
      "link_url" : "http://code.google.com/p/panoramagl/"
    }
  ],
  "references" : "References available upon request"
};

router.use(function (req, res, next) {
  console.log('Accessing resume API');
  next(); // go to the next routes and don't stop here
});

/* GET resumes data */
router.get('/', function (req, res, next) {
  res.json({ message: 'Returning Resume JSON' });
});

// POST to create new Resume
router.post('/', function (req, res, next) {
  var resume = new Resume();
  resume.name = req.body.name;
  resume.save(function (err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Resume created!' });
  })
});



// Magic route for resume JSON - eventually going to store this in the DB
router.get('/magicRoute', function (req, res, next) {
  res.json(resumeJSON);
});

module.exports = router;
