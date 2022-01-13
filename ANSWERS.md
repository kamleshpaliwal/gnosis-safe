
1. What are the tradeoffs when it comes to optimizing for availability vs consistency?

Ans - It depends on our use case. An example which i can explain for this is as below:-
   We have notification configs in our system which we define to decide what we want to send to the end users. Here whenever we are sending any communication to user instead of reading this notification configs from DB we read from Cache a s reading from DB can take time and increase latency. Whereas when operation team is working on configuration of this notification configs we show them data direct from dB as if it gets available by 100 ms also its manageable at this front.

2. In a real world scenario, if you only had to choose between availability and consistency, which criteria would you pick and why? 

Ans - it depends on the use case. let's take an example of bank here in case of transactions of amount we need consistency, and it is uttermost priority whereas as the API where are getting the total number of customers of a bank we can compromise the consistency, but we can achieve availability here.

3. Is it possible to get both - a highly available and highly consistent data all the time? If no, then why? If yes, then how? 

Ans - As per CAP theorem, three properties of shared-data systems; data consistency, system availability and tolerance to network partition one can only achieve two at any given time. For example, we have a system where we are having one master DB we are writing and four slaves which we are using to read. In this case we are making sure that data is available for read, but we are compromising consistency here as data to get replicated into all the slave instances can take time. In our system we used aurora where it used to take time get data replicated in the slaves, so we not used to read just after write we used to  do manipulation in the object itself and return that as response.
