#dbdiagram.io


database er uniqe j column thakbe take bole primary key

database normalization:
1nf
2nf
3nf

-------
so, if we have 2 database table and one is user table and one is post table then there can be multiple user and each user can have multiple posts so that's why we'll be using the user table's user id as post table's owner and this is called one to many realationship.

so, in the table where the primary key of a table sit's in another table's column is the foreign key of that table


one single service can have multiple permissions - from service to permission is one to many and reverse is many to one
again one single permission can have multiple services attached to it.
this case is called many to many relationship

database : cardinality and ordinality - the signs are said that
there are 4 types of relation in database:
1. one to one
2. one to many
3. many to one
4. many to many




----
1 user will have 1 profile
1 profile can be assigned to many user
1 profile will have many permission
1 permission can have many service

by authorizing services we can define the routes of our controllers. who can use the routes.


Relationships:
- One-to-many relationship: If we go from below to up
- Many-to-one relationship: If we go from above to below

Normalization:
- 1NF: There should not be multiple values in a single column. Each value should be atomic.

Course Table:
- Primary key: id
- Columns: content, owner (foreign key referencing user.id)
- Sample data:

| id | content   | owner |
| -- | --------- | ----- |
| 1  | I love you | 1     |
| 2  | u r       | 2     |
| 3  | hey       | 3     |
| 4  | ggg       | 1     |

Student-Course Table:
- Columns: studentid, courses
- Sample data:

| studentid | courses      |
| --------- | ------------ |
| 1         | bangla,eng   |
| 2         | node,react   |
| 3         | mic          |
| 1         | bangla       |
| 1         | eng          |
| 2         | node         |
| 2         | react        |
| 3         | mic          |

User Table:
- Primary key: id
- Columns: name
- Sample data:

| id  | name   |
| --- | ------ |
| 1   | habib  |
| 2   | riyad  |
| 3   | ruhin  |

Inconsistency Problem:
- If we change the name of a user in the User table, the name query will not work in the Course table, leading to an inconsistency problem.






