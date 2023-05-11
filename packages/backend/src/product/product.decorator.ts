import {
  HttpStatus,
  ParseFilePipeBuilder,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

export const Files = (fieldName: string) =>
  UseInterceptors(FilesInterceptor(fieldName));

export const ValidateFiles = () =>
  UploadedFiles(
    new ParseFilePipeBuilder()
      .addFileTypeValidator({
        fileType: /(jpg|jpeg|png)$/,
      })
      .addMaxSizeValidator({
        maxSize: 5_000_000,
      })
      .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
  );
