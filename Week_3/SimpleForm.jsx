/* SimpleForm.jsx */
import { useState } from "react";

function SimpleForm() {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    };
    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input 
                type="text" 
                className="border p-2" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white p-2 ml-2">Submit</button>
        </form>
    );
}
export default SimpleForm;