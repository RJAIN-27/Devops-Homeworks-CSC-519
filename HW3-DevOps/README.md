Infrastructure Components
=========================

![build](https://travis-ci.org/CSC-DevOps/Queues.svg?branch=master)

In this workshop, we'll cover the basics of adding infrastructure components to a web application.

In particular, we will focus on using redis to construct basic infrastructure components, such as a cache and queue, and intergrating them into a web application.

## Workshop

### Task 1

Implemented the /set and /get functionality in the /bakerx/basics/index.js file.

![Set](https://github.ncsu.edu/rjain27/HW3-DevOps/blob/master/Screen%20Shot%202020-04-07%20at%2012.04.04%20AM.png)

![Get](https://github.ncsu.edu/rjain27/HW3-DevOps/blob/master/Screen%20Shot%202020-04-07%20at%2012.04.09%20AM.png)

### Task 2

![Recent](https://github.ncsu.edu/rjain27/HW3-DevOps/blob/master/Screen%20Shot%202020-04-07%20at%2012.04.14%20AM.png)

### Task 3

![Cache for facts](https://github.ncsu.edu/rjain27/HW3-DevOps/blob/master/Screen%20Shot%202020-04-07%20at%2010.36.08%20PM.png)

### Task 4

![5 images from cache](https://github.ncsu.edu/rjain27/HW3-DevOps/blob/master/Screen%20Shot%202020-04-07%20at%2010.39.09%20PM.png)

![Reduced time by using Cache for Task3 and Task4](https://github.ncsu.edu/rjain27/HW3-DevOps/blob/master/Screen%20Shot%202020-04-07%20at%2012.11.41%20AM.png)

### Task 5
![Images uploaded to queue](https://github.ncsu.edu/rjain27/HW3-DevOps/blob/master/Screen%20Shot%202020-04-07%20at%2010.42.00%20PM.png)

### Conceptual Questions

1) Describe three desirable properties for infrastructure.

    Three desirable properties of an Infrastructure are as follows:
    
  - Available
    
    Availibility is the property of an infrastructure or a system that will help a system in being operational all the time. Further, this will also ensure that there is no or limited interruption to provided services in the infrastructure that we are having.
    
  - Scalable 
    
    Scalability of an infrastructure will ensure that we can increase the specific units in response to demand. Having a scalable infrastructure will allow us to add workload for more computation and traffic without hampering the existing infrastructure.
  
  - Resilient
  
    A resilient architecture will allow the infrastructure or application to recover from many types of failures and even then remain functional for the consumers to use flawlessly. Further, the infrastructure will have the ability to take in a load of disturbance and still maintain the infrastructure having the basic functionality and structural capacity. This will help in planning and management of sustainable, resilient and reliable infrastructures.
    
2) Describe some benefits and issues related to using Load Balancers.

    There are various benefits of using Load Banalners:

  - When we use load balancers for our application we can ensure that we have a highly available infrastructure that is resilient. This is because in case ine server stops bworking due to some reason, the incoming requests would be handled by the other backend servers. Also, by having a load balancer, we can ensure that the load gets distributed. Like the requests will not be constantly served by a particular server. The requests will go to the backend on the basis of the algorithm like least outstanding request algorithm or round robin etc. Hence we need not worry if one server goes down.

  - We can load balance almost all kind of services there days, like TCP applications or UDP applications. Hence based on the requirement we can select the type of load balancing we might need. Further, load balancing will also ensure Scalability. When more traffic load on the load balancer is expected, we can easily depoly extra servers of same configuration behind the load balancers quickly and seamlessly.

  - Using load balancers helps in planned maintainence. The entire network need not go down and become irresponsive. We can keep a few servers online in odd hours and proceed with the maintainence tasks.

  - Hence, load balancers might help in handling all of the following performance, availability and economy.

    A few disadvantages of load balancing are as follows:
    
  - At times the load might not be distributed evenly due to issues like sticky sessions or the particular nature of the requetss. In that case particular backend servers might be excessively hit by traffic. Also in case of TCP connections we have something called the long lived connections  that might lead to traffic imbalance on the backend servers.
  
 - Also, another issue that I feel with load balancing is that when there are multiple servers present, a particular users information during a users session might get stored in different backend servers. Hence this would hamper ths users session. Having the information on one backend server is always efficient. Hence, all the users should be encouraged to use stickiness and even the load balancer should be configured in a similar way.
 
 
3) What are some reasons for keeping servers in seperate availability zones?

    There are various benefits of using seperate availability zones. 
    
    Ensuring to have availability zones, means create pools or zones of your production environment that are isolated from other instances so that we can prevent cascading failures, avoid slow spin up and anticipate large traffic boost any time.
    
    We can design and deploy our infrastructure in such a way that all the services are distributed over multiple availability zones. This will ensure that in case one Avaliability Zone fails the servers in the other availability Zone will become active and contunue to serve the requests until the failed AZ comes up. Hence it will help in dealing with outages in a better way.
    
    Multi AZ deployment is also very useful as we can have a replica of our original service in some other AZ. Once the primary service fails or is down for maintainence, the replica in the other AZ can come up and serve the purpose. 
    
    While we are using multiple availability zones, we can also ensure that, we can deploy newer versions on a particular AZ by switching the requests to a new AZ.
    
4) Describe the Circuit Breaker and Bulkhead pattern.

    Circuit breaker patterns can be really helpful in scanarios when there are huge infrastructures in distributed environments.There might be a possibility that the remote calls to various services or microservices might fail due reasons like network failures, intermittent failures, timeouts, or the resources being overused and then becoming unavailable temporarily. Now the good thing is that these faults might be able to fix by themselves, because of the cloud infrastructure which are generally built to handle such errors by using various mechanisms like retry etc. 
    However, if these failures are not restricted to that point they might take alot longer to fix the issue. This can hence lead to partial or total loss of service. Further, it might also lead to cascading failures and breaking of various other dependent micro services.
    
    Hence, a solution to this problem can be a Circuit Breaker pattern. It can prevent an application from again and again wanting to tasks or make calls that are apparently going to fail. This pattern tries to allow waiting for the error to be fixed or tries to see if the fault is long existing or not. The circuilt builder pattern also involves a mechanism that tries to check if the issue is resolved or not. Once we get to know that the issue is fixed, the services becomes ready to be invoked again. The circuit breaker patter basically tries to prevent any application to perform a call that is going to fail.
    Further, the circuit breaker pattern would act as a proxy or middle man for checking operations that might. fail. It would keep a track of the failures and try to determine if an action can be performed or we the application should simply return an exception. 
    
    The very basic idea is that we try to put in a function that monitors for failures. Once failures reach a kcirtain threshold, the circuit breaker trips and all the further calls are igored till recovery.
    I found a few online notes and video lectures that helped me in understanding the Circuit builder pattern.
  - https://www.youtube.com/watch?v=ADHcBxEXvFA&t=591s
  - https://docs.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker
  - https://martinfowler.com/bliki/CircuitBreaker.html
  
    Now coming to the Bulkhead Pattern.
  
    The Bulkhead pattern is different from the Circuit breaker pattern as this kind of application design that is tolerant of failure. In this kind of design pattern different components of a particular application are isolated into different parts. The main idea behind this is that in case one of the parts fails the others independently continue to function.
  
    Now, coming on to what kind of problems can be solved by this pattern. So in the Cloud based infrastructures each service is consumed by numerous consumers. There might be times when the service does bot respond. In this case the consumers resourses would not be freed on time and that might lead to exaustion of the resources. Hence the Bulkhead pattern, divided the service instances into different groups. This division is dependent on the load, availability requiremebt etc. Hence, through this kind of design we can isolate failures and also we sustain particular functionalities for particular consumers in times of failures.
  
    In addition to partitioning the service, the consumer might also want to partition their own resources. This would ensure that the resources or softwares he is using to call one service do not impact the resources that are there to call the second service.
  
    A very good link that helped me understand the Bulk head pattern is:
   - https://docs.microsoft.com/en-us/azure/architecture/patterns/bulkhead
  
  
  ### Screencast
   - https://drive.google.com/drive/folders/1Y9xzqRZnq3el5c-N-8c6LTz91xy4Q4uZ?usp=sharing
  
  

:crystal_ball:	
I am using professors blessing

Please grade the homework, I finished it on time but I did not know if, I should remove the blessing symbol
