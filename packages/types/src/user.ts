export interface User {
  id: string;
  email: string;
  createdAt: Date;
}

// Ce qu'on envoie au login
export interface LoginDto {
  email: string;
  password: string;
}

// Ce qu'on envoie à l'inscription
export interface RegisterDto {
  email: string;
  password: string;
}

// Ce que l'API renvoie après auth
export interface AuthResponse {
  accessToken: string;
  user: User;
}
