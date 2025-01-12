export interface User {
     id: string;
     email: string;
     password: string;
     name: string;
}
export const users: User[] = [
    

];

export function findUser(id: string): User | undefined {
     
     return users.find((u) => u.id === id);
     
}
export function getUserByEmail(email: string): User | undefined {
     return users.find((user) => user.email === email);
}
export function getUserByName(name: string): User | undefined {
     return users.find((user) => user.name === name);
}
export function getAllUsers(): User[] {
     return users;
}
export function createUser(user: User): User {
     users.push(user);
     return user;
}
export function updateUser(user: User): User | undefined {
     const index = users.findIndex((u) => u.id === user.id);
     if (index === -1) {
          return undefined;
     }
     users[index] = user;
     return user;
}
export function deleteUser(id: number): User | undefined {
     const index = users.findIndex((u) => u.id === id);
     if (index === -1) {
          return undefined;
     }
     const deletedUser = users[index];
     users.splice(index, 1);
     return deletedUser;
}

export function deleteAllUsers(): User[] {
     const deletedUsers = users.slice();
     users.length = 0;
     return deletedUsers;
}
export function searchUsers(query: string): User[] {
     return users.filter((user) => user.name.includes(query));
}
export function sortUsers(sortBy: string): User[] {
     return users.sort((a, b) => {
          if (sortBy === "name") {
               return a.name.localeCompare(b.name);
          } else if (sortBy === "email") {
               return a.email.localeCompare(b.email);
          }
          return 0;
     });
}
export function filterUsers(filterBy: string): User[] {
     return users.filter((user) => user.name.includes(filterBy));
}
export function paginateUsers(page: number, pageSize: number): User[] {
     const startIndex = (page - 1) * pageSize;
     const endIndex = startIndex + pageSize;
     return users.slice(startIndex, endIndex);
}
export function login(email: string, password: string): User | undefined {
     return users.find((user) => user.email === email && user.password === password);
}
