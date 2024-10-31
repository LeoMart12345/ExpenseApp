import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { CategoryJSON } from "../types";

const fetchCategories = async (): Promise<CategoryJSON[]> => {
    const response = await axios.get("http://localhost:8080/api/categories");
    return response.data._embedded.categories;
};

const CategoryTable: React.FC = () => {
    const { isLoading, error, data } = useQuery<CategoryJSON[], Error>("categories", fetchCategories);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                <thead>
                    <tr style={{ backgroundColor: "#ffffff", textAlign: "left" }}>
                        <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd", color: "#000" }}>Name</th>
                        <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd", color: "#000" }}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((category: CategoryJSON) => (
                            <tr key={category._links.self.href}>
                                <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{category.name}</td>
                                <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{category.description}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={2} style={{ padding: "0.5rem", textAlign: "center" }}>No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryTable;
