import { Role } from 'common/types/role';

export interface JwtPayload {
  sub: string;
  username: string;
  role: Role | null;
}