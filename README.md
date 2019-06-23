# ProjectionDBExpress
## This is the repository for the ProjectionDB migration

### commands for migrations
- knex migrate:make users: creates a migration file to work with
- knex migrate:latest: migrates the migraton.js files
- knex migrate:rollback: rollsback last migration
- seed:make 01_users creates a seed file for querying the database
- knex seed:run: runs the seed and executes the query
- This command was used to restart all data of our tables TRUNCATE users RESTART IDENTITY CASCADE;
