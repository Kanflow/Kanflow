# Kanflow

A kanban application focussed on flow

## Installation

### Create a Postgres database (Docker)

1. Pull the Posgres docker image `docker pull postgres`
2. Run the image `docker run -p 5432:5432 --name kanflow -e POSTGRES_PASSWORD=mysecretpassword -d postgres`

### Configure db-migrate

1. Copy `database.json.template` to `database.json`
2. Update username, password and host those configured in the docker container
3. Run `db-migrate up` to run the schema migration

### Create the endpoints

1. Copy `postgrest.config.template` to `postgrest.config`
2. Update the `db_uri` username and password
3. Download and install postgrest (http://postgrest.org/en/v5.1/install.html)
