# HW1-DevOps

## Base Requirements

1. Add a NIC with NAT networking - Done - can be seen in up.js code in customize function.

2. Add a port forward from 2800 => 22 for guestssh - Done - Can be seen in up.js code in customize function.

3. Add a port forward from 8080 => 9000 for a node application - Done - Can be seen in up.js code in customize function.

![NIC with NAT and port forwarding](https://github.ncsu.edu/rjain27/HW1-DevOps/blob/master/Screen%20Shot%202020-01-31%20at%2011.49.05%20PM.png)

## Post-Configuration

1. Install nodejs, npm, git - Done - Please check the postconfiguration function in the code up.js.
 
2. Clone https://github.com/CSC-DevOps/App - Done - Please check the postconfiguration function in the code up.js.

3. Install the npm packages - Done - Please check the postconfiguration function in the code up.js.

## SSH and App

1. Implement and demonstrate running v ssh - Done - Please check ssh.js code.

![Being able to SSH using ssh.js code in commands folder - Interactive Shell](https://github.ncsu.edu/rjain27/HW1-DevOps/blob/master/Screen%20Shot%202020-01-31%20at%2011.45.37%20PM.png)

2. Manually run node main.js start 9000 - Done - Demonstrated in the Screen cast.

![Server runnning on VM](https://github.ncsu.edu/rjain27/HW1-DevOps/blob/master/Screen%20Shot%202020-01-31%20at%2011.52.40%20PM.png)


3. Demonstrate you can visit localhost:8080 to see your running App - Done - Demonstrated in the Screen cast.

![Access of the server from Local Machine using localhost:8888](https://github.ncsu.edu/rjain27/HW1-DevOps/blob/master/Screen%20Shot%202020-01-31%20at%2011.54.15%20PM.png)

## Extra Requirements

1. Create a second NIC with either host-only or bridged networking enabled. Demonstrate that you can use your IP address to visit <address>:9000 to see your running App - Done - Check the code up.js in the customize function.
 
 ![Access of the server using IP:9000](https://github.ncsu.edu/rjain27/HW1-DevOps/blob/master/Screen%20Shot%202020-01-31%20at%2011.56.04%20PM.png)
 
2. Create a shared sync folder - Done - Check the up.js code in the Customize function for creation of share point. Further, mounting of share point is done in the postconfiguration function.

3. The Demonstration that I can use the IP:9000 address to access the VM Webserver is in the Screen Cast.

4. The Demonstration of sharefolder is in the Screen cast.

## Answer a question on Stack Overflow

1. https://stackoverflow.com/c/ncsu/questions/1317/1360#1360

2. https://stackoverflow.com/c/ncsu/questions/1328/1359#1359

## Link to Screen Cast
https://drive.google.com/file/d/1gsMnhofaxwJSX91ybolCOy-dqSsEQ8Ve/view?usp=sharing
