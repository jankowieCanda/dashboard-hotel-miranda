interface AuthUser {
    isAuth: boolean,
    name: string,
    email: string
}

interface AuthContext {
    authData: AuthUser,
    dispatchSetAuthData: React.Dispatch<string>
}