// User
exports.User = class User {
    constructor(userId, firstName, lastName, fullName) {
        this.userId = userId;
        this.firstName = firstName
        this.lastName = lastName;
        this.fullName = fullName;
    }
}