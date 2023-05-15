import { getStorage, ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto'
import { extension } from 'mime-types'

@Injectable()
export class FirebaseService {
  async upload(file: Express.Multer.File[]) {
    const storage = getStorage();
    const fileNames: string[] = []

    const fileSaving = file.map((item) => {
      const metadata = { contentType: item.mimetype }

      const path = `${randomUUID()}.${extension(item.mimetype)}`
      fileNames.push(path)

      const storageRef = ref(storage, `uploads/${path}`);
      return uploadBytes(storageRef, item.buffer, metadata)
    })

    await Promise.all(fileSaving);
    return fileNames
  }

  async getFile (path: string) {
    const storage = getStorage()

    return await getDownloadURL(ref(storage, `uploads/${path}`))
  }
}
