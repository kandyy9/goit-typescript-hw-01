type User = {
 name: string;
 surname: string;
 email: string;
 password: string;
}

function createOrUpdateUser(initialValues: Partial<User>):User {
    return {
    name: initialValues.name || 'Default Name',
    surname: initialValues.surname || 'Default Surname', 
    email: initialValues.email || '', 
    password: initialValues.password || '', 
  } as User;
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
