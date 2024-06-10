import { useAppSelector } from "@shared/api";
import { selectIsAuthorized } from "@entities/auth/model/slice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function useAuthGuard() {
    const navigate = useNavigate();
    const isAuthorized = useAppSelector(selectIsAuthorized);

    useEffect(() => {
        if (!isAuthorized) navigate("/");
    }, [isAuthorized]);
}
