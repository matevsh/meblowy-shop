import { Controller, Get, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { FirebaseService } from "../shared/firebase/firebase.service";

@Controller('image')
export class ImageController {

  constructor(private firebaseService: FirebaseService) {}

  @Get(":fileName")
  async getImage(@Res() res: Response, @Param('fileName') fileName: string ) {
    const url = await this.firebaseService.getFile(fileName)
    res.redirect(url)
  }
}
