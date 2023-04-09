# dbdiagram.io

Database ER:
- Unique column will be the primary key of the table.

Database Normalization:
- 1NF
- 2NF
- 3NF

Relationships under posts and user table:
- One-to-many relationship: If we go from below to up
- Many-to-one relationship: If we go from above to below

POsts Table:
- Primary key: id
- Columns: content, owner (foreign key referencing user.id)
- Sample data:

| id | content   | owner |
| -- | --------- | ----- |
| 1  | I love you | 1     |
| 2  | u r       | 2     |
| 3  | hey       | 3     |
| 4  | ggg       | 1     |

User Table:
- Primary key: id
- Columns: name
- Sample data:

| id  | name   |
| --- | ------ |
| 1   | habib  |
| 2   | riyad  |
| 3   | ruhin  |

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


Inconsistency Problem:
- If we change the name of a user in the User table, the name query will not work in the Course table, leading to an inconsistency problem.

Cardinality and Ordinality:
- The signs represent the following types of relationships:
  - One-to-one
  - One-to-many
  - Many-to-one
  - Many-to-many

There are 4 types of relationships in a database:
- One-to-one
- One-to-many
- Many-to-one
- Many-to-many

Permissions and Services:
- One single service can have multiple permissions (one-to-many)
- One single permission can have multiple services (many-to-many)
