# customers
Dockerized Node.js Express application framework for crude API testing purposes

## Running

`node index.js`
Alternatively, use its more portable form and run it as a Docker Container:
`docker run -d --rm --name customers -p 3000:3000 saltaaron/customers`

## Building

To build, tag and push  a new image, clone this repo and:

```
docker buildx build --platform linux/amd64,linux/arm64 -t <your_docker_hub_account>/customers --push .
```
