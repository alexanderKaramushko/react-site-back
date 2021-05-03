import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from 'utils';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {

  // eslint-disable-next-line no-unused-vars
  constructor(private reflector: Reflector) {
    super();
  }
  
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
  
    if (isPublic) {
      return true;
    }
  
    return super.canActivate(context);
  }

}