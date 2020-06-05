import { Injectable } from "@angular/core";
import { NgxImageCompressService } from "ngx-image-compress";

@Injectable()
export class CompressService {
  private imgResultAfterCompress: string;

  constructor(private imageCompress: NgxImageCompressService) {}

  public compressFile(image: string | ArrayBuffer): Promise<any> {
    return new Promise((resolve, reject) => {
      const orientation = -1;
      let sizeOfOriginalImage =
        this.imageCompress.byteCount(image) / (1024 * 1024);
      console.warn("Size in bytes is now:", sizeOfOriginalImage);
      this.imageCompress
        .compressFile(image, orientation, 50, 50)
        .then((result) => {
          this.imgResultAfterCompress = result;
          let sizeOFCompressedImage =
            this.imageCompress.byteCount(result) / (1024 * 1024);
          console.warn(
            "Size in bytes after compression:",
            sizeOFCompressedImage
          );
        })
        .catch(error => reject(error))
        .finally(() => resolve(this.imgResultAfterCompress));
    });
  }

  public createFileFromImageUrl(imageUrl: string, filename: string): File {
    console.log(imageUrl.split(",")[0]);
    // call method that creates a blob from dataUri
    const imageBlob = this.dataURItoBlob(
      imageUrl.split(",")[1]
    );
    //imageFile created below is the new compressed file which can be send to API in form data
    return new File([imageBlob], filename+".jpg", { type: "image/jpeg" });
  }

  private dataURItoBlob(dataURI: string) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: "image/jpeg" });
    return blob;
  }
}
