Monitoring Workshop and Homework
=========================


## Workshop

#### Task 1, Task 2, Task 3, Task5:
![Monitor Dashboard](https://github.ncsu.edu/rjain27/HW4-DevOps/blob/master/Screen%20Shot%202020-04-22%20at%204.33.11%20PM.png)

#### Load Test on URL1,2,3:
![Monitor Dashboard](https://github.ncsu.edu/rjain27/HW4-DevOps/blob/master/Screen%20Shot%202020-04-22%20at%208.47.53%20PM.png)

ncsu.edu/rjain27/HW4-DevOps/blob/master/Screen%20Shot%202020-04-19%20at%202.38.52%20AM.png)

![Monitor Dashboard](https://github.ncsu.edu/rjain27/HW4-DevOps/blob/master/Screen%20Shot%202020-04-22%20at%204.35.17%20PM.png)

### Conceptual Questions

1) Compare a channel deployment model with a ring deployment model.

Channel Deployment model is one of the models that is used in Mozzila. In this model the changes are tested in a particular channel and then after approximately 2 weeks these changes promoted to next channel, unless they are fast tracked or booted by release engineer. Further, I read that though the rapid release cycles lead to a faster user feedback adn are easier to plan and develop they might also have important repercussions on the software quality. This might lead to consequences where they company might lack time to stabalize their platforms and upgrades. But this model proves effectively well settled and leads to better bug fixing and software advancement. The firefox rapid release model has  every Firefox version flowing through four release nightly, aurora (alpha), beta and main. Further, every version of Firefox was followed by a long series of minor versions, each containing bug fixes or minor updates over the previous version. 

  ![Rapid Release](https://github.ncsu.edu/rjain27/HW4-DevOps/blob/master/new_versions.png)

Professor provided us with 2 really good links to study about channel deployment in the lecture:
* http://swat.polymtl.ca/~foutsekh/docs/PID2891705.pdf

* https://www.aosabook.org/en/ffreleng.html

Now, coming to the rind deployment model, works in a way that all the changes are promoted from internal users to the early adopters and then used by wider and wider group of users. Hence the product phase might stay in the ring for longer and longer time periods. This is an approach used by microsoft as their deployment model. The type of users are as follows in the ring:
* Canaries are people who voluntarily test bleeding edge features as soon as they are available.
* Early adopters who voluntarily preview releases, considered more refined than the canary bits.
* Users who consume the products, after passing through canaries and early adopters.

  ![Ring Deployment](https://github.ncsu.edu/rjain27/HW4-DevOps/blob/master/phase-rollout-with-rings-pipeline.png)
  
 An important thing to note about Ring Deployment is that instead of deploying your the feature to all of your data centers/servers/environments in one go, it is split up in multiple rings and deploy them one by one.
 
 Links:
 * https://docs.microsoft.com/en-us/azure/devops/migrate/phase-rollout-with-rings?view=azure-devops
 * https://wouterdekort.com/2018/01/19/learned-microsoft-devops-part-8-deploying-continuous-delivery-cloud-world-deploy-monday-morning/

2) Identify 2 situations where an expand/contract deployment could be useful.

Two situations where expand/contract deployment could be useful are places where you would require to do parallel changes or co changes. A classic example is making changes on databases. When you need to make changes to your data base also change the way the application accesses the databases. You cannot use the database until both the changes are made.

So let us say we need to change a column name, we will make a new column while keeping the old column intact. Then now since the application would want to wrrite to this new column. We would want to make the application write to the old and the new column. Now we can remove the old column and start reading the data from the new column. Hence the changes have been coordinated. 

Expand contract changes might also be helpful when there is a change to be deployed in a website that is already running and it might be difficult to stop it for miantainence. What we can do is have the old application running while the new appliication is being deployed. Once the traffic successfully starts going to the new machine we can slowly slowly reduce the traffic on the old machine and transfer the entire traffic to the new one. 
 
3) What are some tradeoffs associated with dark launches?
 
Some tradeoffs related with the dark launches are as follows:
* Economic Loss - Dark launches and feature flags might be problammatic as the software might have alot of feature flags and when you try to do a manual or runbook kind of deployment, there might be a risk of deploying the old feature by mistake. This might create confusion when there are alot of features and not every one might be able to understand.
* Mixed Experiences - There can be mixed experiences as there cane be alot of features and this might even lead to dissatisfaction.
* Alot of permutions of the features mif=gfht lead to higher engineering costs and more management and technical support.
* Apart from this, there might be other issues related to dark launches in technical aspects. There is a possibility that 2 pages are kept separete but both of them are live for some reason. There is a possibility that a common bug occurs twice and is being looked into twice to be figured out. The understanding of the software or the code might also get confusing due to unnecessary linked features and cross pages and test flows.

4) Describe the Netflix style green-blue deployment. What can canary analysis tell us?

It is a technique that will help in reducing the down time of an application and also reduce the risk by running 2 identical applications hence reducing the risk of failure. One environment will be the blue environment and one environment will be the green environment. Blue environment will be the one that would be current. Green will be the new version that we would be deploying.

The steps in the blue green deployment would be as follows:
* You start with the blue version in production.
* Deploy the green version to the same environment as the blue version. Run any smoke tests, as necessary.
* Connect router traffic to the new version alongside the old version (the blue version)
* Disconnect router traffic from the old version.

Canary Analysis - Canary analysis is a good way to determine the trend and analyse the live traffic that is coming on the service. Further, the Mann-Whitney U test is used to classify whether a major change that exists between the canary and baseline metrics. The major steps to analyse the canary scores would include:
Metric Retrieval
Judgment
Data Validation
Data Cleaning
Metric Comparison
Score Computation
Reporting
 
  ### Screencast
   - https://drive.google.com/drive/folders/1ox07CAZRJNBKqKEmd9nN0c6-V2TNnmbX?usp=sharing
  
  
