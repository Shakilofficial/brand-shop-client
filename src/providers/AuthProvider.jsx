import { createContext, useState } from "react";
export const AuthProvider = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const userInfo = {
        user,
    }
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;