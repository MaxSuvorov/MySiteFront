import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Max Suvorov, Vladivostok</p>
            <ul className="footer-links">
                <li><a href="https://github.com/MaxSuvorov" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://vk.com/buthisatva" target="_blank" rel="noopener noreferrer">VK</a></li>
                <li><a href="https://t.me/white_thymeee">Telegram</a></li>
                <li><a href="https://www.instagram.com/white_thyme?igsh=MWN3dzNibDl1Y2trMw%3D%3D&utm_source=qr">Instagram</a></li>
            </ul>
        </footer>
    );
}