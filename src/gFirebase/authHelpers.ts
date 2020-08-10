import { UserInfo } from "@typings/user";

export const LOCAL_STORAGE_KEY = "firebaseUser";

export function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function setUser(user: UserInfo | null): void {
  if (!user) {
    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
    return;
  }
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
}

export function getUser(): UserInfo | null {
  return isBrowser() && window.localStorage.getItem(LOCAL_STORAGE_KEY)
    ? JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) ?? "")
    : "";
}

export function isLoggedIn(): boolean {
  const user = getUser();
  return !!user;
}

export function logOut(): void {
  setUser(null);
}
