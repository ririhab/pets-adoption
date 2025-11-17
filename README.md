Pets Adoption – React Checkpoint Project
This project is part of the React Checkpoint, where the goal is to create a small React application using React-Bootstrap, components, props, forms, and proper structuring.

Project Requirements Covered:
    -Installed NodeJS 
    -Created project using:
        npx create-react-app pets-adoption
    -Cleaned /src folder except index.js and reportWebVitals.js
    -Created App.js and imported required modules
    -Installed & used React-Bootstrap correctly
    -Used a Navbar, Heading, and Cards inside React
    -Created a Form (as required)
    -Used components, props, defaultProps, and map()
    -Added comments in the code
    -Applied custom styling + hover effects
    -Used background image
    -Navbar scroll links working (#cardpets, #form)
    -Mobile responsive

Project Structure
    src/
     ├─ App.js
     ├─ index.js
     ├─ pets.js
     ├─ card.js
     ├─ petlist.js
     ├─ navbar.js
     └─ form.js


Features:
-Display a list of 9 pets
    Each pet includes:
        -Name
        -Type (Dog, Cat, Bird, Rabbit, Turtle)
        -Age
        -Description
        -Image

-Interactive Cards
    -React-Bootstrap Card component
    -Hover animation (scale and shadow)
    -“Adopt!” button scrolls to the form section

-Adoption Form
    -Styled form with background transparency
    -Select menu dynamically filled from pets.js using .map()
    -Bootstrap elements

-Navbar
    -Sticky on top
    Custom background color
    -Smooth-scroll to sections
    -Hover effect on links

-Styling
    -Global background image
    -Custom CSS for cards, navbar, form container
    -Smooth page scrolling



Technologies Used:
    -ReactJS
    -React-Bootstrap
    -JavaScript ES6
    -CSS
    -Create-React-App
