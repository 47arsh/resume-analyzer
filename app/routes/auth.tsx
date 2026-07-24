import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => {
    [
        {title: "ResAnalyze | Auth"},
        {name: "description", content: "Log in to your account to access ResAnalyze and get smart feedback for your resume!"}
    ]
}
const auth = () => {

    const {isLoading , auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split("?next=")[1] || "/";
    const navigate = useNavigate();

    useEffect(()=>{
        if(auth.isAuthenticated){
            navigate(next);
        }
    },[auth.isAuthenticated, next]);

  return (
    <main className="bg-center h-screen flex items-center justify-center">
        <div className="gradient-border p-[2px] rounded-lg animate-in fade-in-50 slide-in-from-bottom-10 duration-750">
            <section className="flex flex-col gap-4 bg-white p-8 rounded-lg w-[400px] max-sm:w-[300px]">
                <div className="flex flex-col items-center gap-2 text-2xl font-bold text-center">
                    <h1>
                        Welcome!
                    </h1>
                    <h2>
                        Log in to your account to access ResAnalyze and get smart feedback for your resume!
                    </h2>
                </div>
                <div>
                    {
                        isLoading ? (
                            <button className="auth-button animate-pulse w-full">
                                <p>Signing you in...</p>
                            </button>
                        ) : (
                            <>
                               {auth.isAuthenticated ? (
                                 <button className="auth-button w-full" onClick={() => auth.signOut()}>
                                    <p>Log Out</p>
                                 </button>
                               ) : (
                                 <button className="auth-button w-full" onClick={() => auth.signIn()}>
                                    <p>Log In</p>
                                 </button>
                               )
                               }
                            </>
                        )
                    }
                </div>
            </section>
        </div>
    </main>
  )
}

export default auth