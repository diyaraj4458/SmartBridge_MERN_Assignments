/* CustomButton.jsx */
function CustomButton() {
    return (
        <button 
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
            onClick={() => console.log("Button clicked!")}
        >
            Click Me
        </button>
    );
}
export default CustomButton;