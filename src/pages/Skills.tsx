import '../styles/Skills.css'
import CodePhoto from '../assets/Code.jpg'

export default function Skills() {

    return (
        <section id="skills" className="skills-section">
    <h2>Навыки</h2>
    <div className="skills-list">
        <h1>• Python</h1>
        <h1>• C++</h1>
        <h1>• C</h1>
        <h1>• 1C</h1>
        <h1>• Excel hahahhahh</h1>
        <h1>• Word ahhahha</h1>
    </div>
    <div className="home-image">
                <img src={CodePhoto}/>
    </div>
</section>
    );
}