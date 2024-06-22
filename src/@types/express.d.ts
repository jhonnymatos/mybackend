import { Psych } from "../entities/Psych";
import { User } from "../entities/User";

declare global {
    namespace Express {
        export interface Request {
            user: Partial<User>;
        }
    }
    namespace Express {
        export interface Request {
            psych: Partial<Psych>;
        }
    }
}