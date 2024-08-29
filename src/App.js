import SkillList from './SkillList'

function App() {
  return (
    <div className="card">
      <img
        src={`${process.env.PUBLIC_URL}/myImage.jpeg`}
        alt="Youssef's"
        className="avatar"
      ></img>
      <div className="data">
        <h1>Youssef Nabil</h1>
        <p>
          Student @ computer science and AI Cairo university, now iam learning
          react.js, i need to enter the CS department
        </p>
        <SkillList/>
      </div>
    </div>
  );
}

export default App;
