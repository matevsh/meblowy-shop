import {
  HttpStatus,
  ParseFilePipeBuilder,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

export const File = (fieldName: string) =>
  UseInterceptors(FilesInterceptor(fieldName));

export const ValidateFile = () =>
  UploadedFile(
    new ParseFilePipeBuilder()
      .addFileTypeValidator({
        fileType: /(jpg|jpeg|png)$/,
      })
      .addMaxSizeValidator({
        maxSize: 5_000_000,
      })
      .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
  );
