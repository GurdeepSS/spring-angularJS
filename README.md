Spring3 rest webservice with jackson library and calling from angularJS & html.
=====================
ReSTFul WebServices using  Spring-3.2.11 , Jackson-2.4.3  with AngularJS-1.3.0 with html5.	
#Prerequisites:- 
You should be having jdk1.7.x ,apache tomcat7.x, apache-maven-3.2.3-bin ,Git-1.9.4 client tool, Curl Command line tool.	
#step1:- 
clone the project from repo.
#step2:-
run the pom.xml maven build  which is alredy exist in project.	
![build-log](https://github.com/GurdeepSinghSabarwal/spring-angularJS/raw/master/src/main/resources/build-log.png)  
#step3:-
you got the war file in target folder , just copy war in apache tomcat.     	
![WarFile](https://github.com/GurdeepSinghSabarwal/spring-angularJS/raw/master/src/main/resources/warFile.png)   
#step4:-
open the page in browser 'http://localhost:8080/spring-angularJS/myapps.html'and see the result.	    
now see the html page , I used angular js script 'myapps.js' for calling the  rest webservice(http://localhost:8080/spring-angularJS/springcontent.json).
#step5:-
you can call the rest webservice using CURL command line tool, download curl and issue below command.see the screenshot for more details. you can get the diffrent type of result from rest service(xml,json)   
$curl -XGET http://localhost:8080/spring-angularJS/springcontent.json   
$curl -XGET http://localhost:8080/spring-angularJS/springcontent.xml  
![curl-call](https://github.com/GurdeepSinghSabarwal/spring-angularJS/raw/master/src/main/resources/curl-call.png)   
