# P3G5!

  [![ISC License license](https://img.shields.io/badge/License-ISC%20License-blue.svg)](https://choosealicense.com/licenses/isc)

  ## Table of Contents
  1. [Project Description](#project-description)
  2. [Installation Instructions](#installation-instructions)
  3. [How To Use](#how-to-use)
  4. [How To Contribute](#how-to-contribute)
  5. [Testing](#testing)
  6. [License](#license)
  7. [Contact Me](#contact-me)

  ## Project Description
  * As a user...
      I want to be able to browse a gallery of currently housed pets
      ... so i can select a pet to view details

      I want to be able to click on a pet's profile
      ... so i can read its summary and potentially donate toward their needs

      I want to have a donate now button that takes me to a donation form-page
      ... so i can either:
      ...... select a specific pet to donate toward, or
      ...... donate toward the organization, generally

      I want to have a personal profile that contains my information and site history
      ... so i can keep track of the pets i've donated toward, and total donations to-date
        
      
      Models:
        - User
          - username
          - email
          - password
          <!-- - potentially add fields where users can apply to take home an animal -->
        - Pets
          - name
          - image
          - summary/about me
          - [supplies]
        - Supplies
          - type
            - bedding
            - food
            - toys
            - vitamins/medication
          - price
        - Donations
          - the user
          - amount
          - message

          <!-- need to determine how to set up goal tracker and if it should be based on pet profiles, organization overall, or both -->

      Pages: 
        - Homepage
          - About the organization
          - Search
        - User profile
        - See all pets
        - See this pet page
        - Donations
        <!-- - Adopt  -->

  ## Installation Instructions
  * This application should be used via web interface, no installation required.

  ## How To Use
  * This application 
  [Deployed-Site]()

  ## How To Contribute
  * Contact me on GitHub to Contribute!
  
  ## Testing
  * None

  ## License
  * Licensed under [ISC License](https://choosealicense.com/licenses/isc)
  

  ## Contact Me
  * Find me on Github: [kabdomora](http://github.com/kabdomora)
  * For additional feedback, email me at [kaylabrown@mednet.ucla.edu](mailto:kaylabrown@mednet.ucla.edu)
