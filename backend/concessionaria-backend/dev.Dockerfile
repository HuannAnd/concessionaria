<<<<<<< HEAD
FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
ARG docker build --build-arg JAR_FILE=target/*.war -t myorg/myapp .
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
=======
FROM tomcat:10-jdk17-temurin
ADD target/concessionaria-backend-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps
CMD [ "catalina.sh","run"]
>>>>>>> f2ff9fe2efb6aabaa1bf05cf29f3fb0a38982b65
