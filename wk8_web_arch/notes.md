# Arch

## Web
- Use all the CPU cores, with puma, cluster or some other supervisor.
- Scale vertically first. More CPU/Memory on one machine.
- Horizontal scaling means we need a Load Balancer
- http://stackoverflow.com/questions/11707879/difference-between-scaling-horizontally-and-vertically-for-databases

## Load Balancer
- Starts off as one server that sends requests to your many web servers.
 - Can do Round Robin, or some are smart enough to choose a server that is not as busy.
 - HAProxy, Apache (great for SSL terminated traffic), Varnish (only with some abuse, but you get a caching server too!)
 - EC2 on AWS also provides Load Balancers.
 - With multiple load balancers we can use DNS to balance requests to each load balancer
 - Or; do regional routing so traffic that is closer to one load balancer prefers that over further ones.
  - This uses BGP routing and various other standards.

## CDN
- Service that can fetch your static resources once and server them many times to web clients.
- Saves your web servers from having to deal with requests for static assets, freeing them up to do the dynamic content
- Can be configured infront of your webapp/load balancer to cache pages as well. See cloudflare for an example.
- Regionally server static assets, so they load faster

## DB
- You can scale a DB vertically for quite a while.
- If your site is more read than write (which most web apps are), you can make some read "minions". Sending read queries to those and insert/updates/deletes to the "overseer".
- At some point you probably have more data than can possibly fit on a server, so you split the rows up and make clusters of "shards".
- Shards are assigned rows in various ways, mod of an id, chronologically, etc. Queries that span shards require all the services to coordinate more.
- In theory, you can shard by physical region
- DBA's live for figuring out how to scale up over time without interrupting services. Probably not true that they "live" for it, but they are alive while doing it.

## Caching
- Often we can scale caching by going vertical.
- We often keep our sessions in a different kind of cache that is a little slower but persistent.
- We want machine with lots of RAM, so we can access everything as fast as possible.

## Micro services
- Further separation of concerns via services
- Make your website API driven
- Async tasks done by specalized services
- Maybe one day, everything will be small little programs that do one thing really well!
- http://gosparta.io/

## Queues/Async work
- Why hold up a web request for something that may take a while?
- Lots of patterns for queuing. Basically first request in is the first processed.
- Usually involves some concepts of a worker that takes a job from the queue, does the job and reports back the result.
- Common to store the result of a queue work in bucket (S3) or perhaps a database entry.
- Many queue implementations can full the publish/subscribe model for notifications of work to do and work complete.
