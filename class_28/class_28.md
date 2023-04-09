# dbdiagram.io

Database ER:
- Unique column will be the primary key of the table.

Database Normalization:
- 1NF
- 2NF
- 3NF

Relationships under posts and user table:
- Many-to-one relationship: If we go from above to below
- One-to-many relationship: If we go from below to up

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


Inconsistency Problem:
- If we change the name of a user in the User table, the name query will not work in the Course table, leading to an inconsistency problem. that's why we are using foreign key.

Student-Course Table:
- Columns: studentid, courses
- Sample data:

| studentid | courses      |
| --------- | ------------ |
| 1         | bangla,eng   |
| 2         | node,react   |
| 3         | mic          |


| studentid | courses      |
| --------- | ------------ |
| 1         | bangla       |
| 1         | eng          |
| 2         | node         |
| 2         | react        |
| 3         | mic          |

* On the above tabe we have maintained normalization that each field will only have singular value

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


# Explaination of the dbdiagram:

# User-Profile-Permission-Service Relationships

There will be multiple types of users, but each user will have only one profile. A profile will be made up of multiple permissions, and a permission can be in multiple profiles. A permission will be made with multiple services, and a service can be in multiple permissions.

## Relationships
- One-to-one relationship: User to Profile
- One-to-many relationship: Profile to Permission, Permission to Service
- Many-to-many relationship: Permission to Profile, Service to Permission

## Schema

### User
- Primary key: id
- Columns: (other user information)

### Profile
- Primary key: id
- Columns: (other profile information)

### Permission
- Primary key: id
- Columns: (other permission information)

### Service
- Primary key: id
- Columns: (other service information)

### User-Profile Table
- Columns: user_id (foreign key referencing User.id), profile_id (foreign key referencing Profile.id)

### Profile-Permission Table
- Columns: profile_id (foreign key referencing Profile.id), permission_id (foreign key referencing Permission.id)

### Permission-Service Table
- Columns: permission_id (foreign key referencing Permission.id), service_id (foreign key referencing Service.id)


























