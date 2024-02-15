# React Application with Authentication and Authorization

This is a React application built with authentication and authorization functionalities, utilizing data from the [dummyjson.com](https://dummyjson.com/) website. The application consists of two main pages: a login page (`/login`) and a home page (`/`). It offers various features such as searching, sorting, and an add-to-cart feature to display the total price.
Website link - [https://builtinnov0303.netlify.app/](https://builtinnov0303.netlify.app/).

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository:
   
git clone [<repository_url>](https://github.com/shriyamb1303/buildinnovation.git)

2. Navigate to the project directory:

cd client

3. Install dependencies:

npm install

4. Run the development server:

npm start

5. Access the application in your browser at `http://localhost:3000`.

## Authentication

The login page (`/login`) is where users can authenticate themselves to access the application's features. The application uses data from the [dummyjson.com/users](https://dummyjson.com/users) API to validate user credentials. Below are some valid login usernames and passwords:

- **Username:** atuny0, **Password:** 9uQFF1Lh
- **Username:** hbingley1, **Password:** CQutx25i8r
- **Username:** rshawe2, **Password:** OWsTbMUgFc
- **Username:** yraigatt3, **Password:** sRQxjPfdS

## Features

### Searching

Users can search for products using the search bar. The application filters the products based on the search query entered by the user.

### Sorting

The application provides sorting functionality to sort products based on price ranges. Users can select from predefined price ranges like `$0 - $100`, `$100 - $500`, `>$500`, or view all products.

### Add to Cart

Users can add products to their cart and view the total price of the items added. Buttons are provided to increment and decrement the quantity of items in the cart.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- React Router: A library for routing in React applications.
- Axios: A promise-based HTTP client for making HTTP requests.
- DummyJSON: A tool to generate dummy data for testing purposes.

React Scripts
In this project, we utilize the following React scripts:

npm start: Launches the development server and opens the app in your default browser at http://localhost:3000.

npm run build: Builds the app for production in the build folder. The app is now optimized for the best performance.

npm test: Initiates the test runner for running unit tests included in the project.

npm run eject: Note: This is a one-way operation. Once you eject, you can't go back! This command allows you to eject the project and customize the build configuration if necessary.

Remember to use these scripts with caution and refer to the official React documentation for more details.

Get started with your hiring journey with CareerLink and simplify the way you find your dream job or the perfect candidate!
