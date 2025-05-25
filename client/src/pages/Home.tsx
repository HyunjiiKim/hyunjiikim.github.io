import SkillGroup from "../components/Skills";

export default function Home() {

    const profile = {
        name: "hyunji",
        content : {
            fr: "Je suis un développeur full-stack obsédé par un style de codage hardcore. Je transforme l'imagination en réalité. En adoptant Lean Startup, Lean Thinking, les méthodologies Agile et le Pair Programming, je livre des solutions innovantes et à fort impact - et j'apprends chaque jour à relever des défis avec une clarté cristalline.",
            en: "As a full-stack developer obsessed with a hardcore coding style, I turn imagination into reality. By embracing Lean Startup, Lean Thinking, Agile methodologies, and Pair Programming, I deliver innovative, high-impact solutions—and I’m learning every day to tackle challenges with crystal-clear clarity.",
            ko: "하드코어 코딩 스타일에 집착하는 풀스택 개발자로서 상상을 현실로 바꿉니다. Lean Startup, Lean Thinking, Agile methodologies, 및 Pair Programming을 통해 혁신적이고 영향력 있는 솔루션을 제공하며 매일매일 도전과제를 명확하게 해결하기 위해 배우고 있습니다."
        }
    }

    const Specialized = [
        {
            id: "01",
            title: "Frontend",
            icon: "bi bi-code-slash",
            content: "HTML, CSS, JavaScript, TypeScript, React, Redux, Tailwind CSS"
        },
        {
            id: "02",
            title: "Backend",
            icon: "bi bi-code-slash",
            content: "Node.js, Express, NestJS, MongoDB, PostgreSQL, MySQL"
        },
        {
            id: "03",
            title: "Ui/UX",
            icon: "bi bi-display",
            content: "Figma, Tailwind CSS, UX Design, UI Design"
        }
    ]

    return (
        <div id="home">
            <div className="mx-auto max-w-[1000px] w-fit flex flex-col items-center justify-center gap-10 max-sm:p-10">
                <h1 className="text-4xl uppercase">Hi, I am <strong className="text-accent-1">{profile.name}</strong></h1>
                <p className="text-md">{profile.content.en}</p>
            </div>
            <SkillGroup />
            <div className="mx-auto max-w-[1000px] flex flex-col gap-20 items-center justify-center">
                <div className="w-fit flex flex-col items-center justify-center gap-10">
                    <h2 className="text-3xl uppercase">Skills</h2>
                    <div className="flex gap-10">
                        {Specialized.map((s) => (
                            <div key={s.id} className="flex flex-col p-2 bg-primary-4 rounded-lg aspect-square w-[200px] relative hover:scale-120">
                                <div className="absolute right-2 text-2xl text-gray-300">{s.id}</div>
                                <h3 className="text-xl uppercase">{s.title}</h3>
                                <i className={`${s.icon} text-md text-accent-1`}></i>
                                <p>{s.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="w-fit flex flex-col items-center justify-center gap-10">
                     <h2 className="text-3xl uppercase">Projects</h2>
                </div>
            </div>
        </div>
    );
}