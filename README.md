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
4. Generate a secure password and use it as the `jwt-secret` field
5. Generate a JWT token from jwt.io using:

- secret = the secure password generated in step 4 (not base64 encoded!)
- Payload data to be `{"role": "kanflow_user" }

6. Run postgrest `./postgrest postgrest.config`
