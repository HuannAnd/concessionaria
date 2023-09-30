FROM maven:3.8.3-openjdk-17 AS build

COPY src /home/app/src
COPY pom.xml /home/app

RUN mvn -f /home/app/pom.xml clean package

FROM eclipse-temurin:17-jdk-alpine

ARG JAR_NAME=concessionaria-backend
WORKDIR /home/app

COPY --from=build /home/app/target/${JAR_NAME}-0.0.1-SNAPSHOT.war /usr/local/lib/my-app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/local/lib/my-app.jar", "spring.profiles.active=dev"]