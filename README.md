## XMPP Fundamentals

Map port 5222 of container running from image(used ejabberd/ecs here)

To register an user

``` bash
docker exec -it <container-name> bin/ejabberdctl register <username> <hostname> <password> 

```

Alternatively, you can do it manually inside the etc/ejabberd/ejabberd.yml file under acl > admin > user