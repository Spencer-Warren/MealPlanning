export class User {
    userID: number;
    username: string;
    userPassword: string;
    firstName: string;
    lastName: string;
    userEmail: string;

    constructor(userID: number, username: string, userPassword: string, firstName: string, lastName: string, userEmail: string) {
        this.userID = userID;
        this.username = username;
        this.userPassword = userPassword;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userEmail = userEmail;
    }
}