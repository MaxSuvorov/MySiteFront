import {Route, Routes, NavLink} from "react-router-dom"
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Skills from "../pages/Skills.tsx";
import Projects from "../pages/Projects.tsx";
import Contact from "../pages/Contact.tsx";
import '../styles/Header.css'

export default function Header() {
    return (
        <>
            <header>
                <ul className='nav'>
                    <li className='nav-item'><NavLink to="/">Главная страница</NavLink></li>
                    <li className='nav-item'><NavLink to="/about">Здесь инфа обо мне</NavLink></li>
                    <li className='nav-item'><NavLink to="/skills">Мои навыки</NavLink></li>
                    <li className='nav-item'><NavLink to="/projects">Мои проекты</NavLink></li>
                    <li className='nav-item'><NavLink to="/contacts">Связаться со мной</NavLink></li>
                </ul>

            </header>
            <Routes>
                    <Route  path="/" element={<Home />}/>
                    <Route  path="/about" element={<About />}/>
                    <Route  path="/skills" element={<Skills />}/>
                    <Route  path="/projects" element={<Projects />}/>
                    <Route  path="/contacts" element={<Contact />}/>
            </Routes>
        </>
    )
}