export class User {
    userID: number;
    userName: string;
    userPassword: string;
    firstName: string;
    lastName: string;
    userEmail: string;

    constructor(userID: number, userName: string, userPassword: string, firstName: string, lastName: string, userEmail: string) {
        this.userID = userID;
        this.userName = userName;
        this.userPassword = userPassword;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userEmail = userEmail;
    }
}