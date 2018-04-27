# Week 4 (shorter week, Sat-Wed, due to sprint scheduling change)

### 1. The chosen scope of the application under development including priority of features and for whom you are creating value
- The aim of the application we’ll develop is to meet the product owner’s needs by providing the most necessary features and time-stamp information. 
- We will try to remove some of the information and timestamps that are currently present in the app. This is because the towage operator found a lot of the information to be unnecessary.
- We will try to implement a remote server to help us with custom functions in our application. This server will process some of the timestamp information we get and return a new timestamp after comparing it with our own database.

### 2. Your social contract, which means you should create one in the first week 
- Our current social contract has worked well for us the last few days. Our aim is to have a contract that also works well during the implementation phase, i.e. the upcoming few sprint weeks. We will evaluate the contract to see if it needs any changes once we get started on the implementation.

### 3. The success criteria for the team in terms of what you want to achieve with your application
- One success criteria is that the app should have less information over all and be more user-friendly than before.
- We will do this by editing some of the existing views in the app.
- We also currently want to create our own server so that we can receive requests from some of the other groups. That is we want to add new functionality to the app.
- One thing we need to achieve this second success criteria is that we need to cooperate with other course groups, especially the agent-teams, in order to get the information we need to develop the application for the tugboat operator. We’ll try to do this during the Scrum of Scrums meetings and in the Slack channel of the course. 

### 4. Your acceptance tests, such as how they were performed and with whom
- As of yet we have not had any acceptance tests but we assume as of right now that they will be checked during peer code review where we check each others code.

### 5. The design of your application (choice of APIs, architecture patterns etc)
- We should make sure we use as much of the existing code as possible, to avoid writing unnecessary code. There is a lot of functionality in the existing code base. We will try to work in a modular way, if we want additional functionality from already existing methods we should do it in our methods. This is to prevent other dependencies to crash.
- We are currently in process of making a UML diagram

### 6. The behavioural overview of your application (for instance through use cases, interaction diagrams or similar)
- As of yet we have not created or implemented anything with regards to our application which makes this question hard to answer. 

### 7. The structural overview of your application (such as class diagrams, domain models or component diagrams)
- We noticed that we had a hard time understanding the existing code base and its structural design. To prevent this for future developers we will try to provide some basic structural documentation of the overall design and also class/modules diagrams to make it easier to see dependencies.

### 8. Your user stories in terms of using a standard pattern, acceptance criteria, task breakdown and effort estimation
- We have currently decided on a pattern for user stories. One whole story will be labeled with a number x and a colour. The following subtasks will then be labeled with the same colour and subnumbers (i.e x.1, x.2 and so forth). The user stories and subtasks will also be marked with expected velocities.
- We have also created a structure for effort estimation in terms of a burn up-chart which measures velocity. Our current target velocity is 80 points on average each week which corresponds to 10 points per person on average each week.
- We have broken down our current user stories to smaller tasks, to get a better understanding of what specific tasks should be done and in which priority. We will also motivate why and for who the user stories are important, to insure that all user stories bring value to someone.
- During the upcoming week, we need to develop our user stories even more based on the feedback we’ve gotten from the product owner. We also have to create acceptance criteria for each user story and prioritize them based on the value they add. 

### 9. The three KPIs you use for monitoring your progress
- At the moment we use three main KPIs: 
  - Burn up-chart
  - Code deletion
  - Code Coverage
- Now that we have finished some user stories and put them in the done section we can make some changes to the burnup chart. We’ve noticed that it’s important to think carefully about the estimation of each user story in order to make the KPI a good representation of the workload. We’ll do this by discussing the estimation each time we create a new user story. 
- The two other KPIs, Code deletion and Code coverage, have not been used yet since we haven’t created any code. But we’ve realized that Code deletion can be misinterpreted if we don’t restrict it to the code we’ve written. 

### 10. Code quality using a tool such as Findbugs (1 point if your code includes issues concerning correctness or bad style, 2 points if you have dodgy or performance issues and 3 points if the code is fine), only asses the code you have written yourself
- No code has been written yet so it is not possible to reflect upon this.

### 11. The roles you have used within the team
- Since we haven’t started on the implementation, we are unable to evaluate the roles.
- The roles haven’t changed since last week, but we’ve decided that our Scrum Master also will be our contact person during communication with the product owner. 

### 12. The agile practices you have used for the current sprint
- We have a solid base for continuous reflection in terms of these questions. This will make it possible to be agile and constantly handle changes in our group dynamic, change requests from the product owner and other changes.
- The aim is to always reflect upon our work and tackle the issues and changes that we have identified. 
- We have come to the understanding that the previous fixed meeting days (Monday and Friday) are not ideal, since we will have a meeting with the product owner every wednesday. Therefore we will, from now on, have our fixed meeting days on monday, wednesday and thursday - to make sure we can combine the review with the meeting with the product owner, and write our group reflections afterwards.
- In order to reach our aim we need to continue to reflect on a weekly basis, keep in touch with our product owner and make sure that everytime we identify a problem we need to address a solution to that problem. 

### 13. The time you have spent on the course (so keep track of your hours so you can describe the current situation)
- Week 1: 12h (lectures + meeting + individual reflection).
- Week 2: 4 + 2 + 1 = 7.5h ,(lectures + meeting + individual reflection).
- Week 3: 1 + 2 + 2 + 3 + 1 + 2 = 11h (meeting + lecture + supervision + meeting + individual reflection + lecture)
- In the coming weeks every group member will fill in how much time they have spent. We will then calculate an average based on that data.
- Week 4 (From sunday to wednesday): 9.4 hours spent on average.

### 14. The sprint review (either in terms of outcome of the current week's exercise or meeting the product owner)
- From the current sprint review we have learned what we want to do with the application.
- We have learned that we will not be making any changes to their back-end. We had no changes to the app to show but we had some questions/suggestions about what to do which was related to what we talked about with the towage operator. The changes that we made to the scope can be found in question 1. Until next week we will try to have something to show so that we can review better.

### 15. Best practices for using new tools and technologies (IDEs, version control, scrum boards etc.)
- We decided not to use individual forks of the project repo
- We decided to put our meeting notes on github. We will also start using github’s Issues functionality when appropriate, and we might try the wiki functionality.
- We need to decide on how we will implement the project in our repo. We are currently unsure on what we will do. We will have to discuss this further. We may have to test our current implementation where we have a sub-module first.

### 16. Relation to literature and guest lectures (how do your reflections relate to what others have to say
- Our current usage of Scrum is primarily based on the Scrum lectures and exercises. 
- The changes we made in our user stories are based on the feedback we’ve gotten from previous lectures, supervisors, the product owner and the tugboat operator.
- During the last lecture, we got crucial insights about the importance of the scope of the application and that we need to really focus on building something that is achievable. 
