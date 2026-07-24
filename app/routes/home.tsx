import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResAnalyze" },
    { name: "description", content: "Smart feedback for your resume using ResAnalyze!" },
  ];
}

export default function Home() {
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
