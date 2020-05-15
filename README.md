
### Run this on your command line

After cloning this project, run these commands:

```bash
docker build --tag ui-automation-demo .
docker run --publish 8080:8080 --detach --name demo ui-automation-demo
```

You don't know how to setup docker on your environment? follow the quick start guide:
https://docs.docker.com/get-started/
