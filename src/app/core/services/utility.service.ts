import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  /**
   * @description Convert object to FormData
   * @param obj form object
   */
  convertToFormData(obj: any) {
    const fd = new FormData();

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        fd.append(key, obj[key].toString());
      }
    }
    return fd;
  }
}
