import { RoleType } from "@entities/role";

export type AuthState = {
    accessToken: string | null;
    roles: RoleType[];
    isAuthorized: boolean;
};

export type AuthResponse = {
    accessToken: string;
    roles: RoleType[];
};
