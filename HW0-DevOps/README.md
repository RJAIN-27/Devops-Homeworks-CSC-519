# HW0-DevOps

## Moodle Profile 

![Moodle Page screen shot](https://github.ncsu.edu/rjain27/HW0-DevOps/blob/master/Screen%20Shot%202020-01-17%20at%207.20.50%20PM.png)

## Mattermost Profile 

![First and last name in Mattermost with Profile Photo](https://github.ncsu.edu/rjain27/HW0-DevOps/blob/master/Screen%20Shot%202020-01-17%20at%205.20.12%20PM.png)

## Stackover Flow account set
![Stack Overflow](https://github.ncsu.edu/rjain27/HW0-DevOps/blob/master/Screen%20Shot%202020-01-17%20at%205.25.43%20PM.png)

## Question Posted on Stack Overflow
https://stackoverflow.com/c/ncsu/questions/1188/1203#1203

## Answers Posted on Stackover Flow
1. https://stackoverflow.com/c/ncsu/questions/1177/1179?noredirect=1#comment871_1179
2. https://stackoverflow.com/c/ncsu/questions/1184/1186?noredirect=1#comment868_1186

## Screenshot showing all the Opunit tests passing
![Opunit tests passing](https://github.ncsu.edu/rjain27/HW0-DevOps/blob/master/Screen%20Shot%202020-01-17%20at%205.39.37%20PM.png)

## Provisioning

I have tried provisioning computational resourses using 2 Cloud Providers

### 1. Amazon Web Services

For Amazon Web Services I got a free trial account for 12 months.

In case of AWS I have written a Python code that utilizes Boto3. I also had to install AWS CLI and BOTO3.

I had to create an IAM user with appropriate permissions that can launch the instance. Then I configured the credentials (Access Key Id and Secret Access Key) using the $AWS configure command.

Once that is done, we can use the "create_key_pair" API call in python code to create a key pair.

And then use this key pair while launching the instance using the API call "create_instances" in the Python Code.

I took help from the AWS Documentation and link https://blog.ipswitch.com/how-to-create-an-ec2-instance-with-python

### 2. Digital Ocean

For using Digital Ocean I used the the free promotions in https://education.github.com/pack.

In case of Digital ocean I created my own Personal Access Token and used it to provision a droplet.

I set my token in my local machine using the command - $export NCSU_DOTOKEN="xxx".

In case of digital ocean, I used "ssh-keygen -t rsa" command to generate the Public and the Private key, so that I can SSH into the instance later using the private key.

The same process has been well documented in: https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2.

Further, I edited the NodeJs code that was given in the class to launch a droplet and then fetch the DropletId. Then use this DropletId find out the IP address of the Droplet.

### Step by step process to create the AWS Instance by running the code.

###### The python code to launch the Instance can be found in the link : https://github.ncsu.edu/rjain27/HW0-DevOps/blob/master/launch-instance.py

1. You will need awscli and boto3 so run the command : "$pip install -r requirements.txt". The requirements.txt file is in the link: https://github.ncsu.edu/rjain27/HW0-DevOps/blob/master/requirements.txt .

2. Once this is done you should make an IAM user with appropriate permissions and then set the credentials using "$aws configure" command.

3. Then make a keypair so that you can use it while launching the Instance.

4. Then run the code by specifying the details of the private key in the code, like I have mentioned my key name as "ec2-keypair". You can run the code with command "python launch-instance.py"

5. This will create an Instance and then the code will fetch the IP address of this Instance.



### Step by step process to create a Droplet by using NodeJs code.

###### The NodeJs code to launch the droplet can be found in the link : https://github.ncsu.edu/rjain27/HW0-DevOps/blob/master/index.js

1. Clone the repository : "$git clone https://github.com/CSC-DevOps/Provision".

2. The go inside the Provision folder using command "$cd Provision".

3. Do "$npm install".

4. Create your own personal access token as described in the link : https://www.digitalocean.com/docs/api/create-personal-access-token/

5. Export the token using:
export NCSU_DOTOKEN="xxx"---> in MAC OS
setx NCSU_DOTOKEN xxx-----> in windows machine

6. Run the code in "index.js" using the comand "node index.js"

### Screen cast video link:
https://drive.google.com/drive/folders/1Rx-t131OBK_JnVVYnWFe2xGL_2jEYNQN?usp=sharing
