# Better Doctor Search Tool
![screenshot](/img/preview.png)


#### Sara Schultz, 05.26.2017

## Description

This application uses the BetterDoctor API https://developer.betterdoctor.com/ to allow the user enter symptoms they are experiencing, as well as the state they live in, to locate a physician near them.

## API Access
You will need an API key to access the BetterDoctor API, follow these steps first.
* Visit https://developer.betterdoctor.com/ and click "Get a Free API Key"
* Fill out the provided form
* Your API Key should appear on the next page and can also be found under My Account > Applications


## Project Setup/Installation

* Copy the URL to this repository
* Open terminal and navigate to the desktop
* Clone this repository using command: git clone "insert-url-here"
* You will need to install Node.js for OSX users with homebrew installed, run command:
* `$ brew install node`
* Navigate to the user directory in terminal using command cd ~
* Create .gitignore_global file using command: touch .gitignore_global
* Open .gitignore_global in text editor of choice and write:
  ![screenshot](/img/gitignore_global.png)
* Navigate back into cloned repository
* Create .env file using command: touch .env
* In text editor of choice write in .env file:
  exports.apiKey = 'INSERT API KEY HERE';
* In terminal run command: $ npm install
* In terminal run command: $ bower intall
* In terminal run command: $ gulp build
* And finally, to launch the webpage, run command: $ gulp serve


## Specifications

| Behavior                   | Input Example     | Output Example    |
| -------------------------- | -----------------:| -----------------:|
| User can enter a symptom and a physician will return| "headache" | "Dr. Skeleton" |
| User can enter a symptom and the state they are locating a physician in |  "headache", "OR" | "Dr. Skeleton, neurologist facility: Neurology Clinic of Oregon phone: 503.555.1234 physician bio: info_here" |
| User will be notified if there were no matches | "heartache", "OR" | "there were no matches to this search" |

## Known Bugs
While sass is installed, required, and added to tasks in gulpfile.js, it is not running properly.

## Support/Contact Details
For support or questions contact Sara: saschultz8@gmail.com

## Technologies Used
* HTML
* CSS, Sass, Bootstrap
* JavaScript, jQuery
* Node.js
* BetterDoctor API

### License

This software is licensed under the **_MIT License_** Copyright (c) 2017 Sara Schultz
