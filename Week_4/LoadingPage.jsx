import React from "react";

function LandingPage() {
    return (
        <div>
            <section className="text-center py-10 bg-gray-100">
                <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
                <p className="text-lg mt-2">Find the best products at unbeatable prices.</p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {[1, 2, 3].map((id) => (
                    <div key={id} className="border p-4 rounded-lg shadow-lg">
                        <img src={`https://via.placeholder.com/150`} alt="Product" className="w-full" />
                        <h2 className="text-lg font-semibold mt-2">Product {id}</h2>
                        <p className="text-gray-600">$10.00</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
export default LandingPage;