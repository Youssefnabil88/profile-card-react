export default function Skill( {mySkill} ){
    const {skill, color, level} = mySkill;

    return <div className="skill" style={{backgroundColor:`${color}`}}>
        <span>{skill}</span>
        <span>{level === "beginner" ? "👶": level=== "intermediate"? "👍":"💪"}</span>
    </div>
}