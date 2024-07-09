import { RoleType } from "@entities/role";

export type AuthState = {
    accessToken: string | null;
    isAdmin: boolean;
    isAuthorized: boolean;
};

export type AuthResponse = {
    accessToken: string;
    roles: RoleType[];
};
