import { usersMock } from "../mocks/usersMock"

const STORAGE_KEY = "users"

export const userService = {
    getUsers() {
        const users = localStorage.getItem(STORAGE_KEY)
        if (users) {
        return JSON.parse(users)
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(usersMock))
        return usersMock
    },

    saveUsers(users) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
    },

    addUser(newUser) {
        const users = this.getUsers()
        const updated = [...users, newUser]
        this.saveUsers(updated)
        return updated
    },

    updateUser(id, updatedUser) {
        const users = this.getUsers()
        const updated = users.map(u =>
        u.id === id ? updatedUser : u
        )
        this.saveUsers(updated)
        return updated
    },

    deleteUser(id) {
        const users = this.getUsers()
        const updated = users.filter(u => u.id !== id)
        this.saveUsers(updated)
        return updated
    }

}