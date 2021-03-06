export interface Roles { 
    subscriber?: boolean;
    editor?: boolean;
    admin?: boolean;
    reader?: boolean;
 }
  
export interface User {
    uid: string;
    email: string;
    displayName: string;
    roles: Roles;
}