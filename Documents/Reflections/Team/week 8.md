# week 8

### 1. The chosen scope of the application under development including priority of features and for whom you are creating value
- We have created two main views in the application in addition to the start view: one that lists all relevant port calls and one that lists all incoming requests. This will contribute to a more user-friendly and lightweight application, that better matches the need of the tugboat operator.
- The aim of the application we’ll develop is to meet the product owner’s needs by providing the most necessary features and time-stamp information. We will also try to match the product owner’s ideas with our tugboat operator’s needs to only develop the most valuable functionalities right now.
- One of our ideas is to reduce functionality in the current application since our tugboat operator is only interested in some of the functionality. We will also try to make a more user-friendly application which is easy to navigate in, according to the tugboat operator’s wishes. 
- We have decided to not use the server that we have worked on as it appears that we won’t have time to implement those changes.
- We have decided to not have any connection with the other groups regarding sending info through the app since we don’t have any time for it.
- For the last sprint, we don’t feel like we have enough time to start implementing new ideas. From former sprints we have realized that making new things, such as a server takes a lot of time, likely more time than one sprint. This has led us to understand how to narrow our scope, and understand why overly ambitious tasks are not suited for a project of this size. Therefore, we will focus on features that provide value for the product owner and tugboat operator, such as:
    - Implement a logout-button in the main/first view
    - Being able to sort portcalls that are related to towage. 
    - Being able to set and change status of an incoming request
    - Implement a back-button in the settings-view and about-view 
    - Features that increase the overall usability in the application. For example, being able to search for a specific portcall in the portcall-view.


### 2. Your social contract, which means you should create one in the first week 
- The social contract worked well in the beginning of the project. However recently the group has had trouble with abiding the terms in the contract. 
- One goal of our social contract is to not waste any of the team members time. We want each member to notify the group if they can’t attend a meeting in time. This should be reported at least the day before the meeting. This also applies to communicating with the team if a group can’t complete the task in time.
- (w7) We’ve noticed that we have too few and too long meetings. This contributes to irregular communication and leads to us not reporting our problems in time. To solve this problem we will create a new slack channel and write our current status every Tuesday and Friday at latest 17:00. The status should only contain a few rows and tell the group where the person is right now, and if they need help.
- (w8) During the last week we have spent more time working together in larger groups (3+ people with 1-2 people working on each task). This has led to better communication and has prevented getting stuck since there has usually been someone around who has been able to help. We have also been able to coordinate our work on different features better than before. Consequently we haven’t done the Tuesday & Friday status reports that we agreed upon during the previous reflection, since we have solved the communication issue through working more in groups. During the coming week we will try to keep working in groups as much as possible. If we feel the need, we will ask for a status report on slack.
- (w8) Overall, we have had some problems with the social contract regarding consequences if the social contract is not followed. For example, we decided in the beginning that “fika” has to be offered by someone who is late several times, which hasn’t happened even once. We have identified some things that might be the reason for this: first of all, we had no systematic way of organizing it, which meant that we couldn’t keep a track on who was late and who wasn’t to every meeting. Furthermore, there was no real way of knowing exactly who had been late and how many times. The underlying cause to this could’ve been that we didn’t assign a secretary for every meeting. Because of this, it would probably have been a good idea to make it a part of the meeting protocol to check who is late every meeting and then if someone has been late 3 times we should decide that that person has to bring fika next meeting. This also ties in with our lack of an assigned secretary. Making this a part of the secretary’s responsibilities might have removed the risk of people letting things slide in order to not be the “bad guy”. With only one week remaining, we feel that it is a bit too late to make any changes regarding this. Hopefully, the upcoming deadlines (and evaluations…) will serve as sufficient motivation for people to be on time during the last week.


### 3. The success criteria for the team in terms of what you want to achieve with your application
- One success criteria is to meet the requirements of the tugboat operator and product owner as much as possible given the scope of the course.  So far, we have participated in almost every review session on wednesdays, where we have communicated with the product owner and the other course groups, to make sure that we get the information we need to develop the application. We have also had two meetings with the tugboat operator. We will make sure to keep doing this in order to have a continuous dialogue with the tugboat operator and product owner.
- We haven’t been meeting the tugboat operator as often as we thought we would. The reason for this is that we realized that it would be more valuable for the product if we put more time on developing the app, since we already had received the input we needed for clarity about what to aim for with our product. After the last meeting we used our time to develop the features he asked for, rather than meeting him again, since we didn’t have a lot to demonstrate.
- Another success criteria is that the app should have less information over all and be more lightweight and user-friendly than before. To this end, we have made a design for a UI in which we reduced the number of views to only three main views. We will keep user-friendliness in mind as we keep working on the app.
- Another success criteria is that we should try to deliver a product that is complete and functioning; It is better to deliver fewer features with high quality than to have more features which are not that well-implemented. We have decided to skip some features that we discussed (for instance a chat feature requested by the towage operator), and during the upcoming sprints we will focus on making our chosen features work well.
-- We have realized that we will not have enough time to make sure that our features are all well-implemented. Instead we will have to settle for being able to demonstrate them to give an idea of how they might work given more implementation time.


### 4. Your acceptance tests, such as how they were performed and with whom
- Until now, we haven’t performed any acceptance tests, due to a lack of features implemented to perform acceptance tests on. With the few features that we have developed we have simply accepted them as done as long as they seem to work.
- If the implemented feature is UI-related, we will conduct a user experience test for the specific task. The tester will be either a member of the group that hasn’t participated in completing the task or any arbitrary person outside the group.
    - We won’t have time to perform tests with users outside of our group. We will make sure to have some acceptance testing of features as early as possible this sprint so that we will have some time to complete any rejected features before the presentation.


### 5. The design of your application (choice of APIs, architecture patterns etc)
- As of yet, we haven’t decided if we will duplicate the information from the portCDM-server in our server or if our server only should listen to the updates from the portCDM-server. We will work this out during the upcoming week as we develop the foundation of our server, database and api-calls. 
- We started making an UML diagram and made a draft for it, but we felt that spending more time on it would not be worth it as the draft of the UML diagram was detailed enough to give us a good understanding of the application. The UML diagram wasn’t of much use to us so we didn’t complete it nor use it that much. However, it was somewhat useful in starting to understand the structure of the app.
- We want to make sure we use as much of the existing code as possible, to avoid writing unnecessary code. 
- We will try to continue the applications current modular structure to keep it easy to see dependencies and to make sure our added functionality won’t crash the current methods/dependencies.
- There is a lot of functionality in the existing code base, but to be able to reuse as much of the code as possible without changing the current methods we will need to understand the current codebase and know what has already been implemented.
- To keep the application structure modular we will need to add all additional functionality in our own methods, and try to keep the existing methods unchanged. 


### 6. The behavioural overview of your application (for instance through use cases, interaction diagrams or similar)
- When we designed the UI prototype we painted detailed pictures to show the connection between different views in the application. We used these pictures to illustrate how the application will work for the group and product owner and they seemed to understand. 
- Therefore, we have decided not to design an interaction diagram (or similar) later on, since we don’t think it will bring enough value to spend our time on it.
- Also, the scale of the application is rather small, and the parts that we’ve implemented are transparent.


### 7. The structural overview of your application (such as class diagrams, domain models or component diagrams)
- We’ve designed a UML-diagram of the current application which we noted is not that helpful when designing a model for something using JavaScript. 
- Therefore, we will try to use a more modular approach instead where all prototypes are independent from their siblings. If they’re dependent, we will try to display them in the most decoupled way possible.


### 8. Your user stories in terms of using a standard pattern, acceptance criteria, task breakdown and effort estimation
- We have decided on a pattern for user stories. One whole story will be labeled with a number x and a colour. The following subtasks will then be labeled with the same colour and sub-numbers (i.e x.1, x.2 and so forth). The user stories and subtasks will also be marked with expected velocities. 
    - We haven’t properly updated the user stories after finishing all their subtasks. This might be because the user stories are too general and/or comprehensive, and therefore a user story is never really finished. In the future it would likely be good to have specific acceptance criteria for every user story so that the will be easier to complete.
- We have also created a structure for effort estimation in terms of a burn up-chart which measures velocity. Our current target velocity is 80 points on average each week which corresponds to 10 points per person on average each week.understanding of what specific tasks should be done and in which priority. We haven’t really put any priorities on any tasks on the task board, instead we have simply handed out all the different tasks to all our pair programming groups. 
- We have broken down our current user stories to smaller tasks, to get a better motivation why and for who the user stories are important, to insure that all user stories bring value to someone.  
- During upcoming weeks, we need to develop our user stories even more based on the feedback we’ve gotten from the product owner. We also have to create acceptance criterias for each user story and prioritize them based on the value they add.
- Our effort estimation for week 5 was quite accurate. We estimated 80 in velocity for the sprint and ended up doing 90 after adding some tasks once we realized that we would hit our velocity target with time to spare.
- Our effort estimation for week 6 was not as accurate as the previous week. We overestimated what we would get done, despite trying to take into account that we had a shorter work week due to the May 1st holiday. We ended up completing very few tasks.
- (w6) Previously we’ve been using a horizontal approach to our work, we’ve now decided to use a vertical approach instead since it might make us more flexible and it’s recommended by the course leaders. We’ll keep on using the vertical approach and then reflect upon it during the upcoming weeks, since we didn’t finish our tasks this week. 
- During week 8 we finished (almost) all the tasks. Why it worked a lot better this week than earlier could be due to two reasons: first of all we communicated better and worked in groups, but we also finished the tasks that were supposed to be finished one- or two weeks ago.
- We haven’t defined our tasks well enough. We will need to explain more what each task should do and also have more acceptance criterias for all tasks. We will explain our tasks better by spending more time on each individual task description.
    - (w8) Instead we have simply made smaller and more specific tasks which has reduced the need for a lengthy description. Hopefully this will be better since the tasks are now smaller and less open to interpretation.



### 9. The three KPIs you use for monitoring your progress
-   Our three KPIs are
- Burn-up chart
	- ~~Code coverage~~
	- ~~Code deletion~~
	- Stress index
- The Burn-up chart has shown us that we have underestimated our tasks a lot. So far there have been a lot of tasks that we haven’t been able to finish simply because they were bigger than we thought. Therefore we must be careful and try to give our tasks higher velocity values and perhaps make smaller tasks.
- We have realized that code deletion will be hard to track, since we will delete much of the original code base. Therefore, we have chosen to replace that KPI with a stress index. The stress index will measure individual stress level on a scale 1-6 and time spent during a sprint, to see the correlation and stress overtime. This will be reported anonymously in this document but visible within the team. 
- We have also realized that we will not be able to conduct a Code Coverage test because we have not written any code tests yet, neither will we be able to write comprehensive code tests before our product review. We still think that Code coverage is a great KPI and would probably be more useful if we knew the code base better and had more time. Another reason that code coverage has been difficult is that a lot of our features have been about UI and therefore they are more difficult to test with code.


### 10. Code quality using a tool such as Findbugs (1 point if your code includes issues concerning correctness or bad style, 2 points if you have dodgy or performance issues and 3 points if the code is fine), only asses the code you have written yourself
- We haven’t tested our code quality yet.
- All code should be modular and have a clear purpose. The method names should reflect methods functionality, if not the method should be described using comments.
- We will have an acceptance test for our code standard. This is checked when the code is reviewed by another member of the team and if that member understands the code and feels like the code has enough documentation it will pass.
- Since we haven’t been able to write a lot of code and most of the code that we’ve written has been related to the views we haven’t really been able to write any tests. If the code we have isn’t fine we would notice since the views would look weird
- We have realized that we don’t have enough time to quality test our code properly if we want to be able to implement our features within the given time. It is more valuable for the product if we focus on developing new features. We will still try to conduct smaller tests to see verify that our solutions work. 


### 11. The roles you have used within the team
- At the moment, the only defined role we have is a Scrum Master. We’ve also used some informal roles based on who’s responsible for certain tasks. These roles have been functioning well and we see no reason to change them at the moment. 
- We want all members of the team to have basic knowledge of every part of our application. If every member knows how the database, server and application work, we’ll not be dependent on one individual. To achieve this we will slice our user stories in a vertical way and give a short explanation of each completed task during our scrum meetings.
- We have realized that we haven’t taken enough notes during our group meetings. This is likely due to the lack of a secretary. This has resulted in uncertainty about what has been decided and the progress on different aspects of the project. To rectify this, we will start having an assigned secretary each meeting. This role will be rotated among the group members. 
    - It has been difficult to consistently make sure that we have a secretary for each meeting. Since we haven’t really had proper meeting protocols either it has been difficult to make it work consistently, some meetings we have written a lot of notes and some meetings we haven’t written any notes at all.
- We believe that some meetings haven’t been efficient since we haven’t had any specific plans about what we need to discuss or for how long we need to discuss them. The short meetings on mondays have been good though and perhaps it is because those meetings are shorter and because we have a very clear agenda. For the longer meetings it would maybe have been good to make everyone write down the important points of discussions for a meeting beforehand.


### 12. The agile practices you have used for the current sprint
- We have a solid base for continuous reflection in terms of these questions. This will make it possible to be agile and constantly handle changes in our group dynamic, change requests from the product owner and other changes. The aim is to always reflect upon our work and tackle the issues and changes that we have identified. 
- During the last sprint (w4) we changed our meeting structure in order to end and start a sprint at before and after each meeting session respectively. This structure has been better since we have the reviews on wednesdays, and can combine the reviews with the meeting with the product owner, and start the next sprint on thursdays. With this structure we have just finished our sprint on the day when we meet the product owner, and can show him the result.
- The overall target is to always be flexible to changes and focus on the things that create value for our product owner and end user. In order to reach our aim we need to continue to reflect on a weekly basis, keep in touch with our product owner and end user, and make sure that everytime we identify a problem we need to address a solution to that problem. 
- We have all been using pair programming during the project. It is good for us since not all members can build the app and we can talk to each other about things we are unsure of. 
- We have had difficulties to gather the whole group since we all have different courses and therefore we have had a lot of issues when it comes to applying scrum. Since having regular meetings is important we feel that our effort has suffered from this. It has been especially difficult since some days have gone away due to holidays and such. We will have to think more on how to solve this. 
    - We wrote our solutions to this problem in question 2


### 13. The time you have spent on the course (so keep track of your hours so you can describe the current situation)
- | Name/week |        | W4 | W5   | W6 | W7 | W8 |
|-----------|--------|----|------|----|------|----|
| 1         | Timmar | 12 | 16,5 | 11 | 17.5 | 20 |
|           | Stress | 2  | 4    | 2  | 3    | 3  |
| 2         | Timmar | 9  | 9    | 13 | 15.5 | 13 |
|           | Stress | 4  | 4    | 4  | 4    | 4.5|
| 3         | Timmar | 10 | 17,5 | 14 | 18   | 18 |
|           | Stress | 3  | 4    | 4  | 4    | 4  |
| 4         | Timmar | 8  | 17,5 | 14 | 18   |18.5|
|           | Stress | 2  | 3    | 4  | 4    | 4.5|
| 5         | Timmar | 10 | 14,5 | 11 | 12   | 14 |
|           | Stress | 3  | 3    | 3  | 4    | 4  |
| 6         | Timmar | 6  | 12   | 8  | 14   | 17 |
|           | Stress | 3  | 4    | 4  | 4    | 4  |
| 7         | Timmar | 10 | 12   | 8  | 10   | 14 |
|           | Stress | 3  | 4    | 4  | 3    | 3  |
| 8         | Timmar | 7  | 9    | 13 | 15.5 |    |
|           | Stress | 2  | 3    | 4  | 4    |    |

### 14. The sprint review (either in terms of outcome of the current week's exercise or meeting the product owner)
-When talking to the tugboat operator we got a lot of positive feedback about the changes we want to make to the UI and the general user experience of the application. The operator had some problems with our current implementation of requesting tugboats regarding security and he doesn’t want to share how many tugboats he has accepted to a certain portcall. We discussed this issue and came to a solution that only an agent and the operator will be able to see this information. 
- The operator also had some feedback regarding how we display the requested tugboats and wanted to be able to respond with a “received” if a port call is preliminary. The operator also wanted to have two different views for responded requests and requests that the operated hasn't responded to yet. For example “Ongoing jobs” and “Requests”.
- When we met with the product owners, they were positive to the redesign for the UI that we showed them. They did provide some feedback on how to deal with incoming requests, that we could design the app so that when a request is received, we can check our database and provide a recommendation on the number of tugboats needed for that job.
- Last week (week 6), we did not go to the supervision, since we haven’t completed any features during this sprint and thus didn’t have anything new to show. We also feel like we have enough clarity about the current tasks from last week’s meeting.
- Week 7 we didn’t really have anything new to show to the product owners. Instead we mostly talked about what would be most valuable to produce in the time we have left. We got to the conclusion that it would be most valuable to try and focus on the ongoing view and to drop the database.
- Week 8 we showed the product owners our different views in the application, and they were satisfied. We also negotiated about which features we have time to complete in time for the presentation. They seemed to be especially interested in a feature about updating a portcall so that it would be visible on the timeline while presenting their scenario.


### 15. Best practices for using new tools and technologies (IDEs, version control, scrum boards etc.)
- Github:
    - We have started putting our meeting notes on github. 
    - We haven’t started using the Issue tracker yet, since we haven’t had any need for it.
    - We added some pages to the wiki, e.g. the social contract, meeting templates, and some other general information.
    - We have decided not to use a sub-module of the app repo in our own repo. Instead, we have copied the relevant JavaScript files into a folder in our repo. This will hopefully be easy to use.
- Trello
- Google Drive


### 16. Relation to literature and guest lectures (how do your reflections relate to what others have to say
- Our current usage of Scrum is primarily based on the Scrum lectures and exercises. 
- The changes we made in our user stories are based on the feedback we’ve gotten from previous lectures, supervisors, the product owner and the tugboat operator. 
- During the last lecture, we got crucial insights about the importance of the scope of the application and that we need to really focus on building something that is achievable. 
- We described our current work-approach to Jan-Philipp in which we received some feedback. He claimed out of experience that dividing work into vertically sliced layers usually have more advantages than disadvantages compared with horizontally sliced layers. We therefore decided to test this method for the next coming sprint.

