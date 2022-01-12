# gnosis-safe
Prerequisite:- 
Node should be installed on your system. you can use NVM to install node on your system
Redis should be installed on your system,

clone the repo

run npm i -f

run redis-server

npm start

To get the single safe call the below API- 
http://localhost:8080/api/balance/findOne/0x89C51828427F70D77875C6747759fB17Ba10Ceb0

To get the multiple safe call the below API - 
http://localhost:8080/api/balance/findMultiple?addressList=0x89C51828427F70D77875C6747759fB17Ba10Ceb0&addressList=0xf26d1Bb347a59F6C283C53156519cC1B1ABacA51

