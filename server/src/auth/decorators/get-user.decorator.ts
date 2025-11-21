import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';

interface UserPayload {
  userId: string;
  email: string;
  [key: string]: any;
}

export const GetUser = createParamDecorator(
  (
    data: string | undefined,
    ctx: ExecutionContext,
  ): UserPayload | string | undefined => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const user = request.user as UserPayload;

    if (data) {
      return user?.[data] as string | undefined;
    }
    return user;
  },
);
