import { useEffect, useState } from "react";

const Sidebar = () => {
    // Task 5: Store the fetched categories using React state
    const [categories, setCategories] = useState([]);

    // Task 4: Fetch categories from the backend API
    useEffect(() => {
        fetch("https://ecommerce-backend-9jny.onrender.com/api/categories")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    return (
        <div className="card p-3 shadow-sm">
            <h5 className="mb-3">Categories</h5>
            <ul className="list-group list-group-flush">
                {/* Task 5: Use .map() to display each category inside the sidebar list */}
                {categories.length > 0 ? (
                    categories.map((category, index) => (
                        <li key={index} className="list-group-item border-0 ps-0">
                            <a href="#" className="text-decoration-none text-dark text-capitalize">
                                {category}
                            </a>
                        </li>
                    ))
                ) : (
                    // Display a fallback if no categories are found
                    <li className="list-group-item border-0 ps-0 text-muted">
                        Loading categories...
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;