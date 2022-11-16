import dotenv from 'dotenv';
dotenv.config();

module.exports = {
    credentials : {
        username: process.env.USER_NAME,
        password: process.env.PASSWORD,
        lockeUsername : process.env.LOCK_USER_NAME
    },
    messages : {
        error: {
            requiredUsername: 'Username is required',
            lockedUsername: 'Sorry, this user has been locked out.',
            requiredPassword: 'Password is required',
            wrongCredentials: 'Provided credentials do not match any user in this service.'
        }
    }
}