# Week 5

### 1. The chosen scope of the application under development including priority of features and for whom you are creating value
- The aim of the application we’ll develop is to meet the product owner’s needs by providing the most necessary features and time-stamp information. We will also try to match the product owner’s ideas with our tugboat operator’s needs to only develop what is the most valuable functionality right now.
- One of our ideas is to reduce functionality in the current application since our tugboat operator is only interested in some of the functionality. At the moment we’ll try to create three main views in the application; one for all relevant port calls, one for all incoming requests and one for all ongoing missions. 
- We will try to implement a remote server to help us with custom functions in our application. This server will process some of the timestamp information we get, return a new timestamp after comparing it with our own database and be able to store some information that’s not accessible in the current application, such as the number of tugboats needed. 

### 2. Your social contract, which means you should create one in the first week 
- Our current social contract has mostly worked well for us during the first set of sprints. At the moment, we’re supposed to reflect upon our work after the review session each wednesday. Last week, we were really tired after the review session since we had been working for several hours straight which made the reflection session worse. In order to fulfill the purpose of the reflection sessions in a better way, we’ve now decided to split the reflection session into two sessions: Wednesdays and Fridays. 

### 3. The success criteria for the team in terms of what you want to achieve with your application
- One success criteria is that the app should have less information over all and be more user-friendly than before.
- Another success criteria is to keep track of how we affect other groups and vice versa. To achieve this we need to cooperate with other course groups, especially the agent-teams, in order to get the information we need to develop the application for the tugboat operator. We’ll try to do this during the Scrum of Scrums meetings and in the Slack channel of the course. 
- Another success criteria is that we should try to deliver a product that is complete and functioning; It is better to deliver fewer features with high quality than to have more features which are not that well-implemented.

### 4. Your acceptance tests, such as how they were performed and with whom
- If the implemented feature is UI-related, we will conduct a user experience test for the specific task. The tester will be either a member of the group that hasn’t participated in completing the task or any arbitrary person.

### 5. The design of your application (choice of APIs, architecture patterns etc)
- As of yet, we haven’t chosen if we will duplicate the information from the portCDM-server in our server or if our server only should listen to the updates from the portCDM-server. We will work this out during the upcoming week as we develop the foundation of our server and database. 
- We should make sure we use as much of the existing code as possible, to avoid writing unnecessary code. There is a lot of functionality in the existing code base. We will try to work in a modular way, if we want additional functionality from already existing methods we should do it in our methods. This is to prevent other dependencies to crash.
- We started making an UML diagram and made a draft for it, but we felt that spending more time on it would not be worth it as the draft of the UML diagram was detailed enough to give us a good understanding of the application.

### 6. The behavioural overview of your application (for instance through use cases, interaction diagrams or similar)
- We will design an interaction diagram for all the new UI we create in the application.

### 7. The structural overview of your application (such as class diagrams, domain models or component diagrams)
- We’ve designed a UML-diagram of the current application which we noted is not that helpful when designing a model for something using JavaScript. Therefore, we will try to use a more modular approach instead where all prototypes are independent from their siblings. If they’re not independent we will try to display them in the most decoupled way.

### 8. Your user stories in terms of using a standard pattern, acceptance criteria, task breakdown and effort estimation
- We have currently decided on a pattern for user stories. One whole story will be labeled with a number x and a colour. The following subtasks will then be labeled with the same colour and subnumbers (i.e x.1, x.2 and so forth). The user stories and subtasks will also be marked with expected velocities.
- We have also created a structure for effort estimation in terms of a burn up-chart which measures velocity. Our current target velocity is 80 points on average each week which corresponds to 10 points per person on average each week.
- We have broken down our current user stories to smaller tasks, to get a better understanding of what specific tasks should be done and in which priority. We will also motivate why and for who the user stories are important, to insure that all user stories bring value to someone.
- During the upcoming week, we need to develop our user stories even more based on the feedback we’ve gotten from the product owner. We also have to create acceptance criteria for each user story and prioritize them based on the value they add. 
- Our effort estimation for the last sprint was quite accurate. We estimated 80 in velocity for the sprint and ended up doing 90 after adding some tasks once we realized that we would hit our velocity target with time to spare.
- In our previous work, we’ve been using a horizontal approach to our work, we’ve now decided to use a vertical approach instead since it might make us more flexible and it’s recommended by the course leaders. We’ll try it and then reflect upon it during the upcoming weeks. 

### 9. The three KPIs you use for monitoring your progress
- At the moment we use three main KPIs: 
  - Burn up-chart
  - Code Coverage
  - Stress index (replaced Code deletion w5)
  - We have realized that code deletion will be hard to track, since we will delete much of the original code base. Therefore, we have chosen to replace that KPI with a stress index. The stress index will measure individual stress level on a scale 1-6  and time spent during a sprint, to see the correlation and stress overtime. This will be reported anonymously in this document but visible within the team. See question 13 for the diagram.

### 10. Code quality using a tool such as Findbugs (1 point if your code includes issues concerning correctness or bad style, 2 points if you have dodgy or performance issues and 3 points if the code is fine), only asses the code you have written yourself
- We will have an acceptance test for our code standard. This is checked when the code is reviewed by another member of the team and if that member understands the code and feels like the code has enough documentation it will pass.
- All code should be modular and have a clear purpose. The method names should reflect methods functionality, if not the method should be described using comments.


### 11. The roles you have used within the team
- At the moment, the only defined role we have is Scrum Master. We’ve also used some informal roles based on who’s responsible for certain tasks. These roles have been functioning well and we see no reason to change them at the moment. 

### 12. The agile practices you have used for the current sprint
- We have a solid base for continuous reflection in terms of these questions. This will make it possible to be agile and constantly handle changes in our group dynamic, change requests from the product owner and other changes. The aim is to always reflect upon our work and tackle the issues and changes that we have identified. 
- During the last sprint we changed our meeting structure in order to end and start a sprint at before and after each meeting session respectively. This structure has been better and we’ll keep using it during the upcoming sprint. 
- The overall target is to always be flexible to changes and focus on the thing that creates value for our product owner and end user. In order to reach our aim we need to continue to reflect on a weekly basis, keep in touch with our product owner and end user, and make sure that everytime we identify a problem we need to address a solution to that problem. 

### 13. The time you have spent on the course (so keep track of your hours so you can describe the current situation)
- Week 1: 12h (lectures + meeting + individual reflection).
- Week 2: 4 + 2 + 1 = 7.5h ,(lectures + meeting + individual reflection).
- Week 3: 1 + 2 + 2 + 3 + 1 + 2 = 11h (meeting + lecture + supervision + meeting + individual reflection + lecture)
- The above does not include individual time spent on e.g. reading course material.
- We’ve changed  the measurement for time spent to include all time spent on the course. In the coming weeks every group member will fill in how much time they have spent in the table below. We will then calculate an average based on that data and see how the time correlates with stress level. We will also use this data to see if any individual group member get very stressed, and if so we will discuss the current work situation and see what we can do to lower stress levels.

| Name/week |        | W4 | W5   | W6 | W7 | W8 |
|-----------|--------|----|------|----|----|----|
| 1         | Timmar | 12 | 16,5 |    |    |    |
|           | Stress | 2  | 4    |    |    |    |
| 2         | Timmar | 9  | 9    |    |    |    |
|           | Stress | 4  | 4    |    |    |    |
| 3         | Timmar | 10 | 17,5 |    |    |    |
|           | Stress | 3  | 4    |    |    |    |
| 4         | Timmar | 8  | 17,5 |    |    |    |
|           | Stress | 2  | 3    |    |    |    |
| 5         | Timmar | 10 | 14,5 |    |    |    |
|           | Stress | 3  | 3    |    |    |    |
| 6         | Timmar | 6  | 10   |    |    |    |
|           | Stress | 2  | 3    |    |    |    |
| 7         | Timmar | 10 | 12   |    |    |    |
|           | Stress | 3  | 4    |    |    |    |
| 8         | Timmar | 7  | 9    |    |    |    |
|           | Stress | 2  | 3    |    |    |    |

### 14. The sprint review (either in terms of outcome of the current week's exercise or meeting the product owner)
- When talking to our operator we got a lot of positive feedback about the changes we want to make to the UI and the general user experience of the application. The operator had some problems with our current implementation of requesting tugboats regarding security and he don’t want to share how many tugboats he has accepted to a certain portcall. We discussed this issue and came to a solution that only an agent and the operator will be able to see this information. 
- The operator also had some feedback regarding how we display the requested tugboats and wanted to be able to respond with a “received” if a port call is preliminary. The operator also wanted to have two different views for responded requests and requests that the operated hasn't responded to yet. For example “Ongoing jobs” and “Requests”.
- When we met with the product owners, they were positive to the redesign for the UI that we showed them. They did provide some feedback on how to deal with incoming requests, that we could design the app so that when a request is received, we can check our database and provide a recommendation on the number of tugboats needed for that job.

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
