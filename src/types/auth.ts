export interface User {
    id: number;
    username: string;
    email: string;
    blocked: boolean;
    confirmed: boolean;
    createdAt: string;
    documentId: string;
    provider: string;
    publishedAt: string;
    updatedAt: string;
}

export interface AuthState {
    user: User | null,
    jwt: string | null,
    loading: boolean,
    error: string | null,
}

export interface RegisterData {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export interface LoginData {
    identifier: string,
    password: string,
}