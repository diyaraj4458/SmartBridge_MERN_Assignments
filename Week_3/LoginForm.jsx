/* LoginForm.jsx */
import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
    };
    return (
        <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-2 w-64 border p-4 rounded-lg">
            <input 
                type="email" 
                className="border p-2" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                className="border p-2" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Login</button>
        </form>
    );
}
export default LoginForm;