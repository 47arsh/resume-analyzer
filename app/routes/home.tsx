import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {

  return [
    { title: "ResAnalyze" },
    { name: "description", content: "Smart feedback for your resume using ResAnalyze!" },
  ];
}

export default function Home() {

    const {auth} = usePuterStore();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!auth.isAuthenticated){
            navigate("/auth?next=/");
        }
    },[auth.isAuthenticated]);

  return <main>

      <Navbar />

      <section className="main-section">
        <div className="page-heading">
          <h1>Welcome to ResAnalyze</h1>
          <h2>Track your applications and resume ratings</h2>
          <p>Get smart feedback for your resume!</p>
        </div>
        {resumes.length > 0 && (
          <div className="resume-section">
              {resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume} />
              ))}
          </div>
        )}
      </section>

  </main>;
}
