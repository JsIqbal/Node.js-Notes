This codebase uses Sequelize as an Object Relational Mapping (ORM) tool to define and manage the database schema. The database has the following tables and their respective relations:

## Tables
- User: stores user information such as email, first name, last name, and password. Each user can have a profile and belong to many services.
- Profile: stores profile information such as name, description, and type. Each profile can belong to many users and have many permissions.
- Permission: stores permission information such as name, description, and type. Each permission can belong to many profiles and have many services.
- Service: stores service information such as name and description. Each service can belong to many permissions and have many users.
- ServicePermission: a junction table between Service and Permission tables to represent the many-to-many relationship between them. Each service can have many permissions and each permission can be assigned to many services.
- PermissionProfile: a junction table between Permission and Profile tables to represent the many-to-many relationship between them. Each permission can be assigned to many profiles and each profile can have many permissions.

## Relations
- User has a foreign key to Profile.
- User has a many-to-many relationship with Service through the ServicePermission junction table.
- Profile has a many-to-many relationship with Permission through the PermissionProfile junction table.
- Permission has a many-to-many relationship with Service through the ServicePermission junction table.











strategy:
------------
1. strategy create hobe j route ta use korbe tar jonno.
2. strategy mane holo , ekta user already logged in kina ta check kora.
3. stretegy banano hoy user der jonno.
4. j login korbe tar jonno stretegy make kora hobe.
----

5. api/permissions api route ti j use korbe strategy ta make kora hobe tar jonno.

question: generateAccessToken can be global?


Example:

class Passport {
    
    use(x, obj) {
        this.strategyName = x;
        this.secretOrKey = obj.opt.secretOrKey;
        this.cookieExtractor = obj.opt.cookieExtractor;
        this.callback = obj.callback;
    }
    
    authenticate(stategyName, done) {
        return function (req, res, next) {
            const token = this.cookieExtractor(req);
            
            const decoded = jwt.verify(token, this.secretOrKey);
            
            this.callback(decoded, done);
        }
    }
}



passport.use("user-jwt", new Strategy({ secretOrKey, cookieExtractor }, function (payload, done) {
    const user = findUser(payload.email);
    if(user) done(null, user);
    else done(null, false);
}));



/users route -> patch method

AuthStrategy(req, res, next) {
    const auth = passport.authenticate("user-jwt", function (err, user) {
        if(!user) return res.status(401).send("Unauthenticated user");
        
        req.logIn(user, {}, function(err) {
            next();
        })
    });
    
    auth(req, res, next);
}

----------------------------------------------
