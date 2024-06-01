import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubsribe = onAuthStateChanged(getAuth(), user => {
            setUser(user);
            setIsLoading(false);
        });

        return unsubsribe;
    }, []);

    return { user, isLoading };
}

export default useUser;