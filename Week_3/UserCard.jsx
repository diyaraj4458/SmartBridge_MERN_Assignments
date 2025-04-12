/* UserCard.jsx */
function UserCard({ name, email }) {
    return (
        <div className="border p-4 rounded-lg shadow-md w-64">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-gray-600">{email}</p>
        </div>
    );
}
export default UserCard;