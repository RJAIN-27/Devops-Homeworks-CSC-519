# HW2-DevOps

## Base Requirements

1. Installing Ubuntu Server 18.04 LTS (This should be mostly done, you already have image! But can still run update/upgrade).

* This is done in the CM-Template/cm/roles/update_and_upgrade/tasks/main.yml file under the section named "update the server".

2. Installing MySQL Database Server (5.7.x is recommended)

* This is done in the CM-Template/cm/roles/update_and_upgrade/tasks/main.yml file under the section named "Installations of softwares"

* For Step 1 and Step 2 I have made a role named "update_and_upgrade"

* Further for setting up mysql as per the requirements of mattermost I have made a seperate file "CM-Template//cm/roles/MySQL_Database_Server/tasks/main.yml" under a role "MySQL_Database_Server" that I have made for MySQL.

3. Installing Mattermost Server

* This is done in the "CM-Template/cm/roles/mattermost/tasks/main.yml" file.

* For the entire configuration of Mattermost made a seperate role named "mattermost"

4. However, before doing all the above steps it was required for us to run the "cm setup" command, that helped in provisioning both the ansible-srv and mattermost-srv.


![Image that shows the execution of "cm-setup" command](https://github.ncsu.edu/rjain27/HW2-DevOps/blob/master/SC1.png)

![Iamge that shows the execution of Ansible Script](https://github.ncsu.edu/rjain27/HW2-DevOps/blob/master/SC2.png)

## Demonstrating mattermost server

1. Finalize configuring the mattermost server by browsing http://192.168.33.80:8065

![Running Mattermost server](https://github.ncsu.edu/rjain27/HW2-DevOps/blob/master/SC3.png)
 
2. Create a team and users.

![Teams and users](https://github.ncsu.edu/rjain27/HW2-DevOps/blob/master/Screen%20Shot%202020-02-12%20at%2010.03.13%20PM.png)

3. Demonstrate you can actually use mattermost by posting some messages.

![Teams and users](https://github.ncsu.edu/rjain27/HW2-DevOps/blob/master/Screen%20Shot%202020-02-12%20at%2010.04.31%20PM.png)

## Extra Requirements

1. Automate the creation of teams and other mattermost server configuration using the mattermost CLI 

* For this automation I have created a sepetare role named "automate" and made a file named "CM-Template/cm/roles/automate/tasks/main.yml" with all the details about creation of 2 users, 1 team and a channel.

* Further I have also added the users to the teams and channels

2. Complete the section "Configuring NGINX as a proxy for Mattermost Server" in mattermost instalation instructions (10 points).

* For this I have made a role named "nginx" and put the details of proxixy setup in the file "CM-Template/cm/roles/nginx/tasks/main.yml"

![Proxy for mattermost server](https://github.ncsu.edu/rjain27/HW2-DevOps/blob/master/Screen%20Shot%202020-02-12%20at%2010.13.25%20PM.png)

3. Complete the section "Configuring NGINX with SSL and HTTP/2". Note you can setup a local hosts file for enabling temporary testing of your ssl configuration. 

* This setup I have halfly done and put the content in a role named "ssl" under the file "CM-Template/cm/roles/ssl/tasks/main.yml". 

* Since this part is not fully automated using ansible, I have commented it out while the running of the playbook command.

* Please check the partial completion of work

## Important Note

##### The ansible playbook files consisted of usernames and passwords for 3 purposes
- Mattermost user (This corresponds to for_mattermost.yml file)
- Database user (This corresponds to for_mattermost.yml file)
- 2 Mattermost users who joined the team to show the sending and receiving of messages (This corresponds to for_automation.yml file)
- I have encrypted the files using ansible-vault command and stored the corresponding password used for encryption in a file named password.txt.
- In case you want to log in to the mattermost server with the users created you can use the details below:
<br>
Username: rajshree
<br>
Password: Password@123


## Screen cast to show Opunit checks

* Command : opunit verify -i test/inventory.yml

![Opunit Checks](https://github.ncsu.edu/rjain27/HW2-DevOps/blob/master/Screen%20Shot%202020-02-12%20at%2010.54.00%20PM.png)

## Link to Screen Cast
https://drive.google.com/file/d/1Mb5BmO041LDlcEzlA0KCXqLM68TjuHzW/view?usp=sharing
