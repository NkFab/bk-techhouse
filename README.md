## Welcome to Simple Job Application System - BK Techkhouse challenge.

This is the repo of the backend that manages data for the the simple job application system web app. 

[![Build Status](https://travis-ci.com/NkFab/bk-techhouse.svg?branch=main)](https://travis-ci.com/NkFab/bk-techhouse)
[![Coverage Status](https://coveralls.io/repos/github/NkFab/bk-techhouse/badge.svg?branch=main)](https://coveralls.io/github/NkFab/bk-techhouse?branch=main)
## Setup

1. Clone the app from github using the following commands:
-  `git clone git@github.com:NkFab/bk-techhouse.git` (SSH)
- `https://github.com/NkFab/bk-techhouse.git` (HTTPS)
2. Change your current working directory to **bk-techhouse** by running `cd bk-techhouse/  `.
3. Insall the dependencies by running `npm i` or `yarn i`.
4. Check the `.env.example` to get a hint of environment variables to set.

## Handy commands

- `npm run test` or `yarn test` to run tests.
- `npm run dev` or `yarn dev` to run the development environment.
- `npm run build` or `yarn build` to build for deployment.
- `npm run start` or `yarn start` to start the built app. 

## API Endpoints

We have 4 API endpoints plus a base endpoint `GET /api`. There is an endpoint for creating an job application, one for viewing the candidates, one for viewing a particular candidate and another for updating the candidate's job application status. They will be listed respective of the order they were mentioned above.

1. Create a job application 
	`POST /api/candidates`
	***Required request body:** first_name, last_name, phone_number, cv*
``` 
  {
    
    "first_name":  "Fab",
    "last_name":  "Rice",
    "email":  "manzinkaka@gmail.cmm",
    "phone_number":  7861558712,
    "cv":  "some cvss"
 
  }
```
2. Get all the candidates details
	`GET /api/candidates`
```	
  {
    "applicants":  {
    "docs": [
    {   
     "status":  "pending",   
     "_id":  "60edf97ba9c8b0d7d928293d",   
     "first_name":  "Fab",   
     "last_name":  "Rice",   
     "email":  "manzinkaka@gmail.cmm",   
     "phone_number":  7861558712,   
     "cv":  "some cvss"
    },
    {   
     "status":  "passed",   
     "_id":  "60edebfe479ecec8521ea253",   
     "first_name":  "Nkaka",   
     "last_name":  "Fabrice",   
     "email":  "manzi@gmail.cmm",   
     "phone_number":  7861558710,  
     "cv":  "some cv"
     }
   ], 
   "total":  2,
   "limit":  10,
   "page":  1,
   "pages":  1
  }
```
3. Get a candidate's details
	`GET /candidates/:id`
```
   { 
    "applicant":  {
     "status":  "passed",
     "_id":  "60edebfe479ecec8521ea253",
     "first_name":  "Nkaka",
     "last_name":  "Fabrice",
     "email":  "manzi@gmail.cmm",   
     "phone_number":  7861558710,   
     "cv":  "some cv"   
    }
   }
```
4. Update a candidate's application status
	`PUT /candidates/:id`
		***Required request body:** status*
```
    {
      "status":  "passed"
    }
```

## Tech stack

- Node Js with Express Js
- MongoDB with Mongoose
- Jest with Supertest

## Contributors

Nkaka Manzi Fabrice - [@nkfab](https://github.com/NkFab)


