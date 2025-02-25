import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/auth/Nav";

const CreateAddress = () => {
    const navigate = useNavigate();

    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [addressType, setAddressType] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            country,
            city,
            address1,
            address2,
            zipCode,
            addressType,
            email: "harry@gmail.com"
        };

        try {
            const response = await axios.post(
                "http://localhost:8000/api/v2/user/add-address",
                addressData,
                {
                    headers: { "Content-Type": "application/json" }
                }
            );
            if (response.status === 201) {
                alert("Address added successfully!");
                navigate("/profile");
            }
        } catch (err) {
            console.error("Error adding address:", err);
            alert("Failed to add address. Please check the data and try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields for country, city, address1, address2, zipCode, addressType */}
            <button type="submit">Add Address</button>
        </form>
    );
};

export default CreateAddress;
