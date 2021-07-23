# customers
Dockerized Node.js Express application framework for crude API testing purposes

## Running

`node index.js`
Alternatively, use its more portable form and run it as a Docker Container:
`docker run -d --rm --name customers -p 3000:3000 saltaaron/customers`

## Building your own

To build and tag a new image, clone this repo and:

```
docker build -t <your_docker_hub_account>/customers:1.0 -t <your_docker_hub_account>/customers:latest .
```

Once you tag and build, upload to `hub.docker.com`: `docker push <your_docker_hub_account>/customers:latest <your_docker_hub_account>/customers:1.0`

