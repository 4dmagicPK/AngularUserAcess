
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userRole!: string;

  constructor() { /* TODO document why this constructor is empty */  }

  setUserRole(role: string) {
    this.userRole = role;
  }

  getUserRole(): string {
    return this.userRole;
  }

  isLoggedIn(): boolean {
    return !!this.userRole;
  }

  isUser(): boolean {
    return this.userRole === 'user';
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  isSuperAdmin(): boolean {
    return this.userRole === 'super-admin';
  }
}

