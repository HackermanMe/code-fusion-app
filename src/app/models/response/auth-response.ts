import { UserResponse } from "./user-response";

export interface AuthResponse {

    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    tokenType: string;
    user: UserResponse;
    message: string;

}
