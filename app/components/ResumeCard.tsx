import React from 'react'
import { Link } from 'react-router'
import ScoreCircle from './ScoreCircle'

const ResumeCard = ({ resume }: { resume: Resume }) => {
  return (
    <Link to={`/resumes/${resume.id}`} className="resume-card animate-in fade-in-50 slide-in-from-bottom-10 duration-750">
        <div className="resume-card-header">
            <div className="flex flex-col gap-4">
                <h2 className="text-black! font-bold text-2xl">{resume.companyName}</h2>
                <h3 className="text-black! font-semibold text-lg">{resume.jobTitle}</h3>
            </div>
            <div className="shrink-0">
                <ScoreCircle score={resume.feedback.overallScore} />
            </div>
        </div>
        <div className="gradient-border animate-in *:fade-in-50 *:slide-in-from-bottom-10 duration-750">
                <div className="w-full h-full p-4">
                    <img 
                        src={resume.imagePath}
                        alt={`${resume.companyName} Resume`}
                        className="w-full h-[300px] max-sm:h-[200px] object-cover object-top rounded-lg"
                    />
                </div>
        </div>
    </Link>
  )
}

export default ResumeCard