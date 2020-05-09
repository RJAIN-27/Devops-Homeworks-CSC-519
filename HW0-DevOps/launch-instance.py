import boto3
ec2 = boto3.resource('ec2')
client = boto3.client('ec2')
# create a new EC2 instance
instances = ec2.create_instances(
     ImageId='ami-0217a85e28e625474',
     MinCount=1,
     MaxCount=1,
     InstanceType='t2.micro',
     KeyName='ec2-keypair'
 )

s = str(instances[0])
print s[16:-1]

ans = client.describe_instances(
    InstanceIds=[s[17:-2]]
)

print "Above Instance has IP address:" 
print ans['Reservations'][0]['Instances'][0]['PublicIpAddress']