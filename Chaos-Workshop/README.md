Chaos Workshop
=========================

### We can see that the monitor is up and working
![Monitor Running for both the servers](https://github.ncsu.edu/rjain27/Chaos-Workshop/blob/master/Screen%20Shot%202020-05-02%20at%204.31.09%20PM.png)

### We can see that the latency is being increased when the seige command was run and the health of the Blue server went red.
![Increased latency when running the seige command](https://github.ncsu.edu/rjain27/Chaos-Workshop/blob/master/Screen%20Shot%202020-05-02%20at%204.34.25%20PM.png)

### Output on running the seige command without breaking any thing
![Running the Seige Command](https://github.ncsu.edu/rjain27/Chaos-Workshop/blob/master/Screen%20Shot%202020-05-02%20at%204.37.46%20PM.png)

### On addidng the CPU script to the Green server

When we increase the CPU Utilization, by running the CPU script on the green server, the latency on the green server increases because it will take time for the requests to be responded. Also, even though the CPU of one of the containers will be high in the green servers requests will go to them. So, it will take time for the response.

![cpu script in green](https://github.ncsu.edu/rjain27/Chaos-Workshop/blob/master/Screen%20Shot%202020-05-02%20at%205.57.55%20PM.png)

### On adding the Network Script

The latency on the Green server is increasing becausing we are corrupting the TCP connections. Now since TCP is a reliable service, there will be more load on the CPU of the green server to serve the requests properly. Which is why we can see an increase in the Latency for the Green Server.

![cpu script in green](https://github.ncsu.edu/rjain27/Chaos-Workshop/blob/master/Screen%20Shot%202020-05-02%20at%206.23.53%20PM.png)

We can observe the rise in latency on the green server 

### On shutting down 2 apps on the Green Server

#### On sending requests to the /work url

We can observe that the latency of the green server keeps on continuously rising. Howeever, there were a few spikes in the blue server. Since I shut down 2 containers in the green server, the latency to respond to the requests is rising. Furrher, while the test was happening I could observe that the health of the only container in green server turned red many times. Also, since there were 3 containers to handle the load in the blue server, there was less latency spike. 

Also, when I observed the output of the seige command, there were many failed transactions in case of the green server. However, there were all successful transactions in case of blue server. Hence, this can explain that although the latency was at times lesser than the blue server, the green server could definitely not handle the load properly.

Also, I feel that the failed transactions are the ones which give a status code of >=400, so there is a possibility that the green containers only container was becoming unresponsive and not giving the expected response codes.

You can checkout the output of the seige command in the below screenshot where first terminal shows for the green server and second shows for the green server.

![123](https://github.ncsu.edu/rjain27/Chaos-Workshop/blob/master/Screen%20Shot%202020-05-03%20at%201.17.15%20PM.png)

![123](https://github.ncsu.edu/rjain27/Chaos-Workshop/blob/master/Screen%20Shot%202020-05-03%20at%201.39.51%20PM.png)

#### Then I performed the same test on the  /stackless url

I could observe that the latency for the green server was relatively lower than the blue server. But, then I saw the out put of the siege command. In the case of green server there were 1004 successful transactions and 1024 failed transactions. But in the case of blue server there were more successful transactions (1355). So, there is a possibility that the green server was responding faster with failed response codes than the successful transactions done by the blue server. Is it also possible that now there is only one container in the backned of the proxy, the routing mechanism is not taking alot of time to send the request to the backend.

You can observer the same in the below images.
![123](https://github.ncsu.edu/rjain27/Chaos-Workshop/blob/master/Screen%20Shot%202020-05-03%20at%203.48.12%20AM.png) 

![123](https://github.ncsu.edu/rjain27/Chaos-Workshop/blob/master/Screen%20Shot%202020-05-03%20at%201.50.33%20PM.png)

Further, after this I performed the same test on the / url and could observe that the latency did not rise much neither in blue nor green but there were failures in case of green. 


### Squeeze test

I performed the squeeze test by constraining the CPU and memory of all the containers on the green server. 

I used the below commands:

docker run --rm --name app1 -d -p 127.0.0.1:3005:3000/tcp app-server --cpus=".5" -m 8m
docker run --rm --name app2 -d -p 127.0.0.1:3006:3000/tcp app-server --cpus=".5" -m 8m
docker run --rm --name app3 -d -p 127.0.0.1:3007:3000/tcp app-server --cpus=".5" -m 8m

I could observe that there was a camparable latency in both the cases, blue and green. The trend of both CPU and Latency was similar. Further, I saw the output of the siege command and could observe that there were no failed transactions. Hence, I could say that even though the CPU and memory was constrained the requests were successfully served.

I performed the siege test on both /work and /stackless found similar results.

In the below diagram the /work is shown in the first part and /stackless in the seconds part.

Please check them below.
![123](https://github.ncsu.edu/rjain27/Chaos-Workshop/blob/master/Screen%20Shot%202020-05-03%20at%202.10.17%20PM.png) 

![123](https://github.ncsu.edu/rjain27/Chaos-Workshop/blob/master/Screen%20Shot%202020-05-03%20at%202.11.28%20PM.png)

### Filling disks

- Inside one of the containers (e.g., using docker exec -it app3 sh), add and run the command to fill the disk: ./fill_disk.sh /fill 2G
    
    I filled the disk on the 3rd container. Then I was not able to sh into this container or any other container because the disk was full. 

- Kill the container and start it again. What happened? Try to create a file inside another container.
    
    Then I tried to delete the container and re run it and was able to sh and make files in all the containers and the host vm.

- What surprising fact did you learn?
   
   Hence, I could explain that the container was using the disk space of the host vm which was being filled up. Once that process itself was deleted,  I got no error and was successfully able to ssh and make files.

You can observe the same in the below image:

![123](https://github.ncsu.edu/rjain27/Chaos-Workshop/blob/master/Screen%20Shot%202020-05-03%20at%203.24.09%20PM.png)

### Reflection

How could you extend this workshop to collect more measures and devise an automated experiment to understand which event/failure causes the most problems?

In an automated intergarted environment chaos should work in an integrated fashion to test the particular features. A good example of how it is should be an example of how chaos monkeys work in netflix. The chaos monkey script would help in testing the infrastructure end to end. The code and infrastructure on which chaos monkey is implemented should ensure that, the code does not maintain state because in those cases it becomes more difficult to resume the services." Further, there should be clusters because in that case, the availibility would be maintained.

In order to extend the work shop to collect more measures and devise an automated experiment, I would try to use more measures that would lead to failures like the ones suggested in the chaos folder of the work shop (simulate_network_loss, killing particular processes, inducing delays etc)

So, we can chaotically send curl requests and stop or delete particular proceses that are running and stress test the software to check the failutres. Further, we can also induce delays at particular points to check if they get induced to other end points or get resolved, apart from that we can also play with the measures like jitter, network loses etc). While all the tests are being run on the server, we also run the tests on out blue server that acts as a baseline.

Now the results from the baseline server and the canary server will be taken to check if the green server on which chaos is being performed is failing or not. Further, in case of evernts where the failure cannot be observed in the metrics, we need to monitor the processes if they are running properly. If not the best idea would be to notify the people to redeploy the code in that particular module. 

