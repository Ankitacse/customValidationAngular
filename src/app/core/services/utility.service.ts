import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  convertToFormData(obj: any) {
    const fd = new FormData();
    fd.append('hello', 'world');
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        fd.append(key, obj[key].toString());
        // console.log(`${key} : ${obj[key].toString()}`);
      }
    }
    // console.log('=====', fd);
    return fd;
  }
}
