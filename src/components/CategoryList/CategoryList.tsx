'use client';
import React from 'react';

interface CategoryListProps {
    categories: string[];
    setCategoryFilter: (category: string | null) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, setCategoryFilter }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-center align-items-center d-flex">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <button
                                onClick={() => setCategoryFilter(null)}
                                className="btn nav-link"
                                style={{ background: 'none', border: 'none' }}
                            >
                                All Products
                            </button>
                        </li>
                        {categories.length > 0 ? (
                            categories.map((category) => (
                                <li className="nav-item" key={category}>
                                    <button
                                        onClick={() => setCategoryFilter(category)}
                                        className="btn nav-link"
                                        style={{ background: 'none', border: 'none' }}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))
                        ) : (
                            <p>No categories available</p>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default CategoryList;

