// SkillGroup.jsx
export default function SkillGroup() {
  const skills = [
    "HTML","CSS","Tailwind CSS","JavaScript","TypeScript","React",
    "Node.js","Express","NestJS", "RESTful API", "MongoDB","PostgreSQL","MySQL",
    "PHP","R","Docker","Git","GitHub","Figma",
    "Agile","Lean Startup","Lean Thinking","Pair Programming",
    "Scrum","Kanban","UX Design","UI Design","Web Design",
    "Responsive Web Design","Cross-Browser Compatibility","Performance Optimization",
    
  ];

  const all = [...skills, ...skills];

  return (
    <div className="overflow-hidden whitespace-nowrap relative bg-primary-4 w-screen py-4 my-4">
      <div className="animate-[marquee_40s_linear_infinite] flex gap-10">
        {all.map((s,i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
}
