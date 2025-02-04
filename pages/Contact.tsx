
import React, { useState } from 'react';

export const Contact: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { name?: string; email?: string; message?: string } = {};

        if (!name) {
            newErrors.name = 'Имя обязательно для заполнения';
        }
        if (!email) {
            newErrors.email = 'Email обязателен для заполнения';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Некорректный email';
        }
        if (!message) {
            newErrors.message = 'Сообщение обязательно для заполнения';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitted(false); 
            return;
        }

        console.log('Отправка формы:', { name, email, message });

        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitted(true);
        setErrors({});
    };

    return (
        <div className="contact-container">
            <h2>Свяжись со мной</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Имя:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="message">Сообщение:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <button type="submit">Отправить</button>
            </form>
            {isSubmitted && <p className="success">Спасибо за ваше сообщение!</p>}
        </div>
    );
};
