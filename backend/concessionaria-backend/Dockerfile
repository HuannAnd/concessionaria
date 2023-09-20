FROM tomcat:10-jdk17-temurin
WORKDIR /concessionaria-backend
COPY target/concessionaria-backend-0.0.1-SNAPSHOT.war /app/concessionaria-backend-0.0.1-SNAPSHOT.war
CMD [ "java","-jar","concessionaria-backend-0.0.1-SNAPSHOT.war" ]