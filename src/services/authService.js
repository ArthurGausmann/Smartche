import {usersMock} from "../mocks/usersMock"

export const authService = {
    login(email, password) {
        const user = usersMock.find(
            u => u.email === email && u.password_hash === password
        )

        if (!user) {
            throw new Error("Usuário inválido")
        }

        // Verifica se ativo
        if (!user.is_active) {
            throw new Error("Usuário inativo")
        }

        // Salvar sessão no local storage
        localStorage.setItem("user", JSON.stringify(user))

        return user
    },

    logout() {
        localStorage.removeItem("user")
    },

    getUser() {
        const user = localStorage.getItem("user")
        return user ? JSON.parse(user) : null
    }
}