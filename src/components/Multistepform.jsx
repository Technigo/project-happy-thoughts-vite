import React, { useEffect, useState } from "react";
import "./index.css";
import "./components/styleForm.css"
import { HeaderText } from "./components/header.jsx";
import { Comment } from "./components/Form";

export const MultistepForm = () => {
    const [formData, setFormData] = useState({
        comment: "",
    })
}
const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }))
}