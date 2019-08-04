# todoapp

## Development

To start your application in the dev profile, simply run:

    ./gradlew -Pdev clean bootRun


## Building for production

### Packaging as jar

To build the final jar and optimize the todoapp application for production, run:

    ./gradlew -Pprod clean bootJar

To ensure everything worked, run:

    java -jar build/libs/*.jar


### Packaging as war

To package your application as a war in order to deploy it to an application server, run:

    ./gradlew -Pprod -Pwar clean bootWar

## Testing

To launch your application's tests, run:

    ./gradlew test integrationTest
    
To see the test results open <project-path>/build/reports/tests/test/index.html or <project-path>/build/reports/tests/integrationTest/index.html
