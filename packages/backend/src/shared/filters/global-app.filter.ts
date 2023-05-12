import {
  ArgumentsHost,
  Catch,
  ConflictException,
  ExceptionFilter,
  InternalServerErrorException,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';

@Catch()
export class GlobalAppFilter
  extends BaseExceptionFilter
  implements ExceptionFilter
{
  catch(exception: unknown, host: ArgumentsHost) {
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      exception.code === 'P2002'
        ? (exception = new ConflictException(
            `Przedmiot o takiej nazwie już istnieje ${JSON.stringify(
              exception.meta,
            )}`,
          ))
        : (exception = new InternalServerErrorException(
            'Wewnętrzny błąd serwera, spróbuj ponowie później',
          ));
    }

    super.catch(exception, host);
  }
}
