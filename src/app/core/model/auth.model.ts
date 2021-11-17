import { User } from './user.model';

export interface Auth {
    _id?: string;
    email: string;
    password: string;
};