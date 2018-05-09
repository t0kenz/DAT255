# Template

### 1. The chosen scope of the application under development including priority of features and for whom you are creating value
- Right now, we have created a prototype for the UI, started to design a database, created a middleware server and started to reduce functionality in the current application.
- The aim of the application we’ll develop is to meet the product owner’s needs by providing the most necessary features and time-stamp information. We will also try to match the product owner’s ideas with our tugboat operator’s needs to only develop what is the most valuable functionality right now.
- One of our ideas is to reduce functionality in the current application since our tugboat operator is only interested in some of the functionality. We will also try to make a more user-friendly application which is easy to navigate in, according to the tugboat operator’s wishes. 
- We will try to implement a server to help us with custom functions in our application. This server will process some of the timestamp information we get, return a new timestamp after comparing it with our own database and be able to store some information that’s not accessible in the current application, such as the number of tugboats needed.
- Further on we’ll try to create three main views in the application; one for all relevant port calls, one for all incoming requests and one for all ongoing missions. This will contribute to a more user-friendly and lightweight application, that better matches the need of the tugboat operator.
- To be able to receive a request from an agent with a set number of tugboats needed for a towage, we need to implement a way to communicate between the server and application. This will be implemented with several HTTP-requests and a database-module for the communication between the server and database. We will also request all relevant towage information from portCDMs backend.

### 2. Your social contract, which means you should create one in the first week 
- Right now we have a social contract that works well for the group.
- We want to make sure that all team members are comfortable with the social contract further on as well.
- To make sure the contract is always up to date we will continue to reflect upon it every week.

### 3. The success criteria for the team in terms of what you want to achieve with your application
- One success criteria is to meet the requirements of the tugboat operator and product owner as much as possible given the scope of the course.  So far, we have participated in almost every review session on wednesdays, where we have communicated with the product owner and the other course groups, to make sure that we get the information we need to develop the application. We have also had two meetings with the tugboat operator. We will make sure to keep doing this in order to have a continuous dialogue with the tugboat operator and product owner.
- Another success criteria is that the app should have less information over all and be more lightweighted and user-friendly than before. To this end, we have made a design for a UI in which we reduced the number of views to only three main views. We will keep user-friendliness in mind as we keep working on the app.
- Another success criteria is to ensure that our app is compatible with the apps of the other course groups that we need to communicate with, and that our work does not overlap unnecessarily. To achieve this we have been in contact with the other course groups, especially the agent-teams, in order to get the information we need to develop the application for the tugboat operator. We’ll keep coordinating during the Scrum of Scrums meetings and in the Slack channel of the course. 
- Another success criteria is that we should try to deliver a product that is complete and functioning; It is better to deliver fewer features with high quality than to have more features which are not that well-implemented. We have decided to skip some features that we discussed (for instance a chat feature requested by the towage operator), and during the upcoming sprints we will focus on making our chosen features work well.

### 4. Your acceptance tests, such as how they were performed and with whom
- Until now, we haven’t performed any acceptance tests, due to a lack of features implemented enough to perform acceptance tests on.
- If the implemented feature is UI-related, we will conduct a user experience test for the specific task. The tester will be either a member of the group that hasn’t participated in completing the task or any arbitrary person outside the group.

### 5. The design of your application (choice of APIs, architecture patterns etc)
- As of yet, we haven’t decided if we will duplicate the information from the portCDM-server in our server or if our server only should listen to the updates from the portCDM-server. We will work this out during the upcoming week as we develop the foundation of our server, database and api-calls. 
- We started making an UML diagram and made a draft for it, but we felt that spending more time on it would not be worth it as the draft of the UML diagram was detailed enough to give us a good understanding of the application.
- We want to make sure we use as much of the existing code as possible, to avoid writing unnecessary code. 
- We will try to continue the applications current modular structure to keep it easy to see dependencies and to make sure our added functionality won’t crash the current methods/dependencies.
- There is a lot of functionality in the existing code base, but to be able to reuse as much of the code as possible without changing the current methods we will need to understand the current codebase and know what has already been implemented.
- To keep the application structure modular we will add need to add all additional functionality in our own methods, and try to keep the existing methods unchanged. 

### 6. The behavioural overview of your application (for instance through use cases, interaction diagrams or similar)
- When we designed the UI prototype we painted detailed pictures to show the connection between different views in the application. We used these pictures to illustrate how the application will work for the group and product owner and they seemed to understand. 
- Therefore, we have decided not to design an interaction diagram (or similar) later on, since we don’t think it will bring enough value to spend our time on it.

### 7. The structural overview of your application (such as class diagrams, domain models or component diagrams)
- We’ve designed a UML-diagram of the current application which we noted is not that helpful when designing a model for something using JavaScript.
- Therefore, we will try to use a more modular approach instead where all prototypes are independent from their siblings. If they’re dependent, we will try to display them in the most decoupled way possible.

### 8. Your user stories in terms of using a standard pattern, acceptance criteria, task breakdown and effort estimation
- We have decided on a pattern for user stories. One whole story will be labeled with a number x and a colour. The following subtasks will then be labeled with the same colour and sub-numbers (i.e x.1, x.2 and so forth). The user stories and subtasks will also be marked with expected velocities.
- We have also created a structure for effort estimation in terms of a burn up-chart which measures velocity. Our current target velocity is 80 points on average each week which corresponds to 10 points per person on average each week.
- We have broken down our current user stories to smaller tasks, to get a better understanding of what specific tasks should be done and in which priority. We will also motivate why and for who the user stories are important, to insure that all user stories bring value to someone. 
- During upcoming weeks, we need to develop our user stories even more based on the feedback we’ve gotten from the product owner. We also have to create acceptance criterias for each user story and prioritize them based on the value they add. 
- Our effort estimation for week 6 was not as accurate as the previous week. We overestimated what we would get done, despite trying to take into account that we had a shorter work week due to the May 1st holiday. We ended up completing very few tasks.
- Our effort estimation for week 5 was quite accurate. We estimated 80 in velocity for the sprint and ended up doing 90 after adding some tasks once we realized that we would hit our velocity target with time to spare.
- In our previous work, we’ve been using a horizontal approach to our work, we’ve now decided to use a vertical approach instead since it might make us more flexible and it’s recommended by the course leaders. We’ll keep on using the vertical approach and then reflect upon it during the upcoming weeks, since we didn’t finish our tasks this week. 


### 9. The three KPIs you use for monitoring your progress
- We use three main KPIs: 
  - Burn up-chart
  - ~~Code deletion~~ 
  - Code coverage
  - Stress index
- We have realized that code deletion will be hard to track, since we will delete much of the original code base. Therefore, we have chosen to replace that KPI with a stress index. The stress index will measure individual stress level on a scale 1-6 and time spent during a sprint, to see the correlation and stress overtime. This will be reported anonymously in this document but visible within the team. 


### 10. Code quality using a tool such as Findbugs (1 point if your code includes issues concerning correctness or bad style, 2 points if you have dodgy or performance issues and 3 points if the code is fine), only asses the code you have written yourself
- We haven’t tested our code quality yet.
- All code should be modular and have a clear purpose. The method names should reflect methods functionality, if not the method should be described using comments.
- We will have an acceptance test for our code standard. This is checked when the code is reviewed by another member of the team and if that member understands the code and feels like the code has enough documentation it will pass.

### 11. The roles you have used within the team
- At the moment, the only defined role we have is a Scrum Master. We’ve also used some informal roles based on who’s responsible for certain tasks. These roles have been functioning well and we see no reason to change them at the moment. 
- We want all members of the team to have basic knowledge of every part of our application. If every member knows how the database, server and application work, we’ll not be dependent on one individual. To achieve this we will slice our user stories in a vertical way and give a short explanation of each completed task during our scrum meetings.

### 12. The agile practices you have used for the current sprint
- We have a solid base for continuous reflection in terms of these questions. This will make it possible to be agile and constantly handle changes in our group dynamic, change requests from the product owner and other changes. The aim is to always reflect upon our work and tackle the issues and changes that we have identified. 
- During the last sprint we changed our meeting structure in order to end and start a sprint at before and after each meeting session respectively. This structure has been better since we have the reviews on wednesdays, and can combine the reviews with the meeting with the product owner, and start the next sprint on thursdays. With this structure we have just finished our sprint on the day when we meet the product owner, and can show him the result.
- The overall target is to always be flexible to changes and focus on the things that create value for our product owner and end user. In order to reach our aim we need to continue to reflect on a weekly basis, keep in touch with our product owner and end user, and make sure that everytime we identify a problem we need to address a solution to that problem. 

### 13. The time you have spent on the course (so keep track of your hours so you can describe the current situation)
- Week 1: 12h (lectures + meeting + individual reflection).
- Week 2: 4 + 2 + 1 = 7.5h ,(lectures + meeting + individual reflection).
- Week 3: 1 + 2 + 2 + 3 + 1 + 2 = 11h (meeting + lecture + supervision + meeting + individual reflection + lecture)
- The above does not include individual time spent on e.g. reading course material.
- We’ve changed  the measurement for time spent to include all time spent on the course. In the coming weeks every group member will fill in how much time they have spent in the table below. We will then calculate an average based on that data and see how the time correlates with stress level. We will also use this data to see if any individual group member get very stressed, and if so we will discuss the current work situation and see what we can do to lower stress levels.

| Name/week |        | W4 | W5   | W6 | W7 | W8 |
|-----------|--------|----|------|----|----|----|
| 1         | Timmar | 12 | 16,5 | 11 |    |    |
|           | Stress | 2  | 4    | 2  |    |    |
| 2         | Timmar | 9  | 9    | 13 |    |    |
|           | Stress | 4  | 4    | 4  |    |    |
| 3         | Timmar | 10 | 17,5 | 14 |    |    |
|           | Stress | 3  | 4    | 4  |    |    |
| 4         | Timmar | 8  | 17,5 | 14 |    |    |
|           | Stress | 2  | 3    | 4  |    |    |
| 5         | Timmar | 10 | 14,5 | 11 |    |    |
|           | Stress | 3  | 3    | 3  |    |    |
| 6         | Timmar | 6  |      | 8  |    |    |
|           | Stress |    |      | 3  |    |    |
| 7         | Timmar | 10 | 12   | 8  |    |    |
|           | Stress | 3  | 4    | 4  |    |    |
| 8         | Timmar | 7  | 9    | 13 |    |    |
|           | Stress | 2  | 3    | 4  |    |    |

### 14. The sprint review (either in terms of outcome of the current week's exercise or meeting the product owner)
- When talking to the tugboat operator we got a lot of positive feedback about the changes we want to make to the UI and the general user experience of the application. The operator had some problems with our current implementation of requesting tugboats regarding security and he doesn’t want to share how many tugboats he has accepted to a certain portcall. We discussed this issue and came to a solution that only an agent and the operator will be able to see this information.
- The operator also had some feedback regarding how we display the requested tugboats and wanted to be able to respond with a “received” if a port call is preliminary. The operator also wanted to have two different views for responded requests and requests that the operated hasn't responded to yet. For example “Ongoing jobs” and “Requests
- When we met with the product owners, they were positive to the redesign for the UI that we showed them. They did provide some feedback on how to deal with incoming requests, that we could design the app so that when a request is received, we can check our database and provide a recommendation on the number of tugboats needed for that job.
- This week (week 6) we did not go to the supervision, since we haven’t completed any features during this sprint and thus didn’t have anything new to show. We also feel like we have enough clarity about the current tasks from last week’s meeting.

### 15. Best practices for using new tools and technologies (IDEs, version control, scrum boards etc.)
- Github:
 - We have started putting our meeting notes on github.  
 - We haven’t started using the Issue tracker yet, since we haven’t had any need for it.
 - We added some pages to the wiki, e.g. the social contract, meeting templates, and some other general information.
 - We have decided not to use a sub-module of the app repo in our own repo. Instead, we have copied the relevant JavaScript files into a folder in our repo. This will hopefully be easy to use.
### 16. Relation to literature and guest lectures (how do your reflections relate to what others have to say
- Our current usage of Scrum is primarily based on the Scrum lectures and exercises. 
- The changes we made in our user stories are based on the feedback we’ve gotten from previous lectures, supervisors, the product owner and the tugboat operator. 
- During the last lecture, we got crucial insights about the importance of the scope of the application and that we need to really focus on building something that is achievable. 
- We described our current work-approach to Jan-Philipp in which we received some feedback. He claimed out of experience that dividing work into vertically sliced layers usually have more advantages than disadvantages compared with horizontally sliced layers. We decided therefore to test this method for the next coming sprint.
