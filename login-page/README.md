# LoginPage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Project Overview

This is a login and registration page built with Angular 16. The application allows users to log in as either a regular user or an admin. The user type is defined during the registration process. A mock JSON API (`db.json`) is used for testing and storing user credentials.

### Main Features
- **Login Page**: Allows users to log in as either "user" or "admin."
- **Registration Page**: Users can register as a regular user or as an admin.
- **Mock API with JSON**: The `db.json` file is used to simulate the backend, storing user credentials for testing purposes.
- **Form Validation**: Includes validation for the fields on the registration and login forms.
- **ngx-toastr for Notifications**: Displays success or error messages for actions like successful login, failed login attempts, etc.

## Getting Started

To run the project locally:

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the JSON server (for mock API) with `json-server --watch db.json`.`http://localhost:3000/`
4. Run `ng serve` for the Angular application.
5. Open `http://localhost:4200/` in a browser to access the application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI, use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project Details

### User Registration and Login Flow
- **Registration**: On the registration page, users can select their role as either "user" or "admin." The data is stored in `db.json` for testing purposes.
- **Login**: Users have the option to log in as either a "user" or "admin." The authentication logic is handled directly within the `LoginComponent`, which uses data from `db.json` to validate credentials without a separate service.

### Components
- **LoginComponent**: Handles user authentication and displays customized success or error messages using `ngx-toastr`.
- **RegisterComponent**: Includes form validation to ensure all fields are completed accurately. The registration logic is managed directly within this component, saving the data to `db.json` as needed.

### Notifications and Error Handling
- **ngx-toastr**: Used to display customized messages, such as "Login successful" or "Error during login."
- **Error Handling**: If there are errors during authentication, informative messages are shown to the user.

### Mock API with JSON Server
- `db.json` contains data for registered users and admins for testing purposes.
- `json-server` is used to create a simple backend that simulates storing and retrieving data for the application.

### Future Improvements
- **Password Recovery**: A potential option to allow users to recover their passwords.
