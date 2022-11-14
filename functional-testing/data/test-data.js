import dotenv from 'dotenv';
dotenv.config();

module.exports = {
    credentials : {
        username: process.env.USER_NAME,
        password: process.env.PASSWORD,
        lockeUsername : 'alice@example.com'
    },
    messages : {
        error: {
            requiredUsername: 'Username is required',
            lockedUsername: 'Sorry, this user has been locked out.'
        }
    }
}