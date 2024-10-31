import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { EmployeeJSON } from "../types";

const fetchEmployees = async (): Promise<EmployeeJSON[]> => {
    const response = await axios.get("http://localhost:8080/api/employees");
    return response.data._embedded.employees;
};

const EmployeeTable: React.FC = () => {
    const { isLoading, error, data } = useQuery<EmployeeJSON[], Error>("employees", fetchEmployees);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                <thead>
                    <tr style={{ backgroundColor: "#ffffff", textAlign: "left" }}>
                        <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd", color: "#000" }}>Name</th>
                        <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd", color: "#000" }}>Email</th>
                        <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd", color: "#000" }}>Department</th>
                        <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd", color: "#000" }}>Position</th>
                        <th style={{ padding: "0.5rem", borderBottom: "1px solid #ddd", color: "#000" }}>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((employee: EmployeeJSON) => (
                            <tr key={employee._links.self.href}>
                                <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{employee.name}</td>
                                <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{employee.email}</td>
                                <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{employee.department}</td>
                                <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{employee.position}</td>
                                <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{employee.salary}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} style={{ padding: "0.5rem", textAlign: "center" }}>No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;
