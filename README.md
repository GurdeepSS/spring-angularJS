spring3-jackson-angularJS integration
================
ReSTFul WebServices using  Spring-3.2.11 , Jackson-2.4.3  with AngularJS-1.3.0 with html5.	
#Prerequisites:- 
You should be having jdk1.7.x ,apache tomcat  7.x, apache-maven-3.2.3-bin.	

#step1:- 
run the maven build , pom.xml alredy exist in project.	
![WarFile](https://github.com/GurdeepSinghSabarwal/spring-angularJS/raw/master/src/main/resources/warFile.png)   
#step2:-
you got the war file in target folder , just copy war in apache tomcat.     	
![build-log](https://github.com/GurdeepSinghSabarwal/spring-angularJS/raw/master/src/main/resources/build-log.png)    
#step3:-
open the page in browser 'http://localhost:8080/spring-angularJS/myapps.html'and see the result.	    

now see the html page , I used angular js script 'myapps.js' for calling the  rest webservice(http://localhost:8080/spring-angulmyapps.jsarJS/springcontent.json).    
