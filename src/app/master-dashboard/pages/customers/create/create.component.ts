import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { CustomerService } from '../customers.service';
import { Customer } from 'src/app/model/customer.model';
import { Router } from '@angular/router';
import IMask from 'imask';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  customerNumber: string;
  customerForm: FormGroup;
  unmaskedMobile: string;
  unmaskedHome: string;
  unmaskedWork: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.customerService.getCustomer().subscribe(res => {
      this.customerNumber = res.customerNumber;
    });
    this.customerForm = this.fb.group({
      _id: [''],
      customerNumber: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      // fullName: ['', [Validators.required, CustomValidators.rangeLength([3, 100])]],
      email: ['', [Validators.required]],
      emailOptIn: [false],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      birthday: [''],
      mobilePhone: ['', [Validators.required]],
      homePhone: [''],
      workPhone: [''],
      spouseFullName: [''],
      spouseBirthday: [''],
      customerType: ['', Validators.required]
    });
    this.customerForm.get('customerType').setValue('Retail');
    this.customerForm.get('mobilePhone').valueChanges.subscribe((val) => {
      this.unmaskedMobile = this.maskingInputs('maskSelector');
    });

    this.customerForm.get('homePhone').valueChanges.subscribe((val) => {
      this.unmaskedHome = this.maskingInputs('maskSelector1');
    });
    this.customerForm.get('workPhone').valueChanges.subscribe((val) => {
      this.unmaskedWork = this.maskingInputs('maskSelector2');
    });

  }

  /**
   * Maskes the input for the mobile number
   * @param selector *{string}
   * @param property *{property}
   */
  maskingInputs(selector) {
    const maskOpt = {
      mask: '(000) 000-0000'
    };
    const el = document.getElementById(
      selector
    ) as HTMLInputElement;
    const mask = IMask(el, maskOpt);
    return mask.unmaskedValue;
  }

  addCoustomer() {
    console.log('customerForm==', this.customerForm.value)
    const data = { ...this.customerForm.value, customerNumber: this.customerNumber };
    data.emailOptIn = false;
    data.mobilePhone = this.unmaskedMobile;
    data.homePhone = this.unmaskedHome;
    data.workPhone = this.unmaskedWork;
    return false;
    this.customerService.createCustomer(data).subscribe(res => {
      if (res.success) {
        this.router.navigateByUrl('/app/customers');
      }
    });
  }

}