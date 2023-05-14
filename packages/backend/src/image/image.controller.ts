import { Controller, Get, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { resolve } from 'path';
import { readFile } from 'node:fs/promises'

@Controller('image')
export class ImageController {

  @Get(":fileName")
  async getImage(@Res() res: Response, @Param('fileName') fileName: string ) {
    const path = `upload/${fileName}`;
    let imagePath = resolve(path);

    await readFile(path)
      .catch(() => {
        imagePath = resolve('assets/default.png');
      })

    res.sendFile(imagePath);
  }
}
