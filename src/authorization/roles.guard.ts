import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from 'auth/auth.service';
import { Role } from 'common/types/role';
import { ROLES_KEY } from 'utils';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(
    // eslint-disable-next-line no-unused-vars
    private reflector: Reflector,
    // eslint-disable-next-line no-unused-vars
    private authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }
  
    const { user } = context.switchToHttp().getRequest();

    if (!user) {
      return false;
    }

    const userProfile = await this.authService.getProfile(user.username);

    return requiredRoles.some((role) => userProfile.role?.includes(role));
  }

}