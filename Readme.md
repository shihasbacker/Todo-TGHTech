# Todo App - Backend TGH Tech

API Documentation link : [https://docs.google.com/api_document](https://docs.google.com/document/d/1bRMYPSGNE7Qj_P54qyXKiBa6iYtgr5wG/edit?usp=sharing&ouid=112486101478760109877&rtpof=true&sd=true) \
Locally running video link : https://youtu.be/Bt4VQwrWjpU 


## 1. User Authentication
Authentication using JWT Token
### Registration
User Registration by creating the jwt token using jsonwebtoken\
URL example: http://localhost:3000/register

### Login
User Login using the registered details and creating jwt token\
URL example: http://localhost:3000/login 

## 2. Todo Tasks
Operations of todo Tasks with mongoDB Atlas and mongoose
### Create Task
Create a task with priority\
URL example: http://localhost:3000/643681193b2b1d540f8558ff/createTodo

### List Todo tasks
List the todo tasks according to priority and created date
```
await todoModel.find({ userId, userId })
.sort({ priority: 1, createdAt: -1 });
```
URL example: http://localhost:3000/643681193b2b1d540f8558ff/

### Mark Complete
Mark the todo tasks completed
```
await todoModel.updateOne({ _id: todoId, userId: userId },
{ $set: { status: "completed" } } );
```

### Cancel Task
Cancel the particular todo task
```
await todoModel.updateOne({ _id: todoId, userId: userId },
{ $set: { status: "cancelled" } } );
```

### Delete Task
Delete a particular todo task
```
await todoModel.deleteOne({ _id: todoId });
```
