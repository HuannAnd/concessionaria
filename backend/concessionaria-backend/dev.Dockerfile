FROM openjdk:8-jdk-alpine as build
WORKDIR /app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN ./mvnw package -Dmaven.test.skip=true
COPY target/*.jar app.jar
ENTRYPOINT [ "java", "-jar", "app.jar" ]