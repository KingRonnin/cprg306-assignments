"use client"

import { useState, useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [window, setWindow] = useState(false);

    const handleSignIn = async () => {
        setWindow(true);
        try {
            await gitHubSignIn();
        } catch (err) {
            console.error('Something is not working', error);
        } finally {
            setWindow(false);
        }
    };

    const handleSignOut = async () => {
        setWindow(true);
        try {
            await firebaseSignOut();
        } catch (err) {
            console.error('Something is not working', error);
        } finally {
            setWindow(false);
        }
    };

    return (
        <div>
            { 
                window ? (
                        <h1>Welcome to the Login Page!</h1>
                    ) : user ? (
                        <p>Welcome, {user.displayName} ({user.email})</p>
                    ) : (
                        <h1>What are you DOING?!?!</h1>
                    )
            }
            <button onClick={handleSignIn}>Sign In </button>
            <button onClick={handleSignOut}> Sign Out</button>
        </div>
    );
}