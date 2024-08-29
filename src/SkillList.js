import Skill from "./Skill";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "red",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

export default function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((el) => (
        <Skill mySkill={el} key={el.skill} />
      ))}
    </div>
  );
}
