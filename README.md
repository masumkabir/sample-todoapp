# todoapp

## Backend Development (Spring Boot 2.1.6.RELEASE)
### Database Configuration
    1) Create a mysql database named todoapp which is running in 3306 port by using following command:
        1.1) CREATE DATABASE todoapp;
    2) Create a database user name todoapp identified by todoapp@1234 using following mysql command
        2.1) CREATE USER 'todoapp'@'localhost' IDENTIFIED BY 'todoapp@1234';
        2.2) GRANT ALL PRIVILEGES ON todoapp.* TO 'todoapp'@'localhost';
        2.3) FLUSH PRIVILEGES;

### Building for Development         
To start your application in the dev profile, simply run:

    cd backend
    ./gradlew -Pdev clean bootRun
    
Server will run in 8080 port.


### Building for production

#### Packaging as jar

To build the final jar and optimize the todoapp application for production, run:

    cd backend
    ./gradlew -Pprod clean bootJar

To ensure everything worked, run:

    java -jar build/libs/*.jar


### Packaging as war

To package your application as a war in order to deploy it to an application server, run:

    ./gradlew -Pprod -Pwar clean bootWar

## Testing

To launch your application's tests, run:

    ./gradlew test integrationTest
    
To see the test results open following files in your browser

    1) <project-path>/backend/build/reports/tests/test/index.html
    2) <project-path>backend/build/reports/tests/integrationTest/index.html


## Frontend Development (Angular 8)

### Building for Development
To start your application in the dev environment mode, simply run:

    cd frontend
    npm install & ng serve
    
Go to http://localhost:4200/login.

Provide "admin/admin" as default user name and password to login.

You can register your own user by clicking register link.  

### Building for production
    ng build --prod --build-optimizer --aot --base-href=/

You will find optimized build in dist directory.     
