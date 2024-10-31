import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { ExpenseJSON } from "../types"; // Import your ExpenseJSON type definition

const fetchExpenses = async (): Promise<ExpenseJSON[]> => {
    const response = await axios.get("http://localhost:8080/api/expenses");
    return response.data._embedded.expenses;
};

const ExpenseTable: React.FC = () => {
    const { isLoading, error, data } = useQuery<ExpenseJSON[], Error>("expenses", fetchExpenses);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                <thead>
                    <tr style={{ backgroundColor: "#ffffff", textAlign: "left" }}>
                        <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd", color: "#000" }}>Amount</th>
                        <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd", color: "#000" }}>Description</th>
                        <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd", color: "#000" }}>Date</th>
                        <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd", color: "#000" }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((expense: ExpenseJSON) => (
                            <tr key={expense._links.self.href}>
                                <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{expense.amount}</td>
                                <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{expense.description}</td>
                                <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{expense.date}</td>
                                <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{expense.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} style={{ padding: "0.5rem", textAlign: "center" }}>No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseTable;
