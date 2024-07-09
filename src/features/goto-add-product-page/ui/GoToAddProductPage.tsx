import React from "react";
import { StyledDiv } from "./GoToAddProductPage.styles";
import { useNavigate } from "react-router-dom";

export const GoToAddProductPage = () => {
    const navigate = useNavigate();

    return <StyledDiv onClick={() => navigate("/product/add")} />;
};
