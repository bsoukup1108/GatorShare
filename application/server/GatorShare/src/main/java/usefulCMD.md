### CP from local machine to AWS instance 

SCP 
usage example :- scp -i GatorShare.pem underBuilding.jar ec2-user@ec2-54-193-53-30.us-west-1.compute.amazonaws.com:~/.

### run inside the virtual server and record the logo
nohup 
usage example:- nohup java -jar <the jar file> > filename.log &

### kill the PID and re-run the updated jar file
first get the PID number  ps -ax or to be fancy ps -ax pipe then grep the specifc PID then terminate using kill. 
Usage example:- kill -9 <PID>