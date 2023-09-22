FROM tomcat:10-jdk17-temurin
ADD target/concessionaria-backend-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps
CMD [ "catalina.sh","run"]