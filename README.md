# PGVECTOR POC

## Description

This a proof of concept for a vector implementation in Postgres. It is based on the [pgvector-node](https://github.com/pgvector/pgvector-node/tree/master)

```sh
# to start the database
docker-compose up -d

# to add data
node addTestData.js

# to query
node index.js
```
