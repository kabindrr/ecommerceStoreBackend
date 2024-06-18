# Login Registration Workflow

The workFlow below explains steps how to build robust user registration process step by step

## Step 1

    Creating user and sending verification link to the user email

    1. FE: Send user form to backend
    2. BE: receive user and do the followings:
        2.1 get the password and encrypt
        2.2 create unique code and store it in the session table with email
        2.3 format url like ` https://yourdomain.com/verify-user?c=sdfg12345sdf=user@email.com
        2.4 send the above link to the user email

    3. BE:insert user in the user table
    4. BE:Response user saying check their email to verify the account

## Step 2

    For user,  opening email and following instruction to click the link received.

    1. FE:User clicks on the link in their email and redirected to our webpage ` https://yourdomain.com/verify-user?c=sdfg12345sdf=user@email.com`
    2. FE:With in our `verify-user` page, receive the `c` & `e` form the query string
    3. FE:Send the `c` & `e` to the server to verify
    4. BE: create new api endpoint to receive the `{c,e}`
    5. BE: verify `{c,e}` is exist in the session table and validate
        5.1 if valid, update user status to active and also `isEmailVarified:true`
        5.2 then, send email notifying the account has been activated and they can sign in now
        5.3 response user the same
        5.4 Else, the linke is invalid
