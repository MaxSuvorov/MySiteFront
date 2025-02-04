import '../styles/Home.css'
import profilePhoto from '../assets/Me.jpg'

export default function Home() {
    return (
        <section id="home" className="home-section">
            <div className="intro">
                <h1>My name: Maxim</h1>
                <h1>Sex: Male</h1>
                <h1>Age: 20</h1>
                <h1>City: Vladivostok</h1>
                <h1>Role: FEFU Student</h1>
                

            </div>
            <div className="home-image">
                <img src={profilePhoto}/>
            </div>
        
        </section>
    );
}