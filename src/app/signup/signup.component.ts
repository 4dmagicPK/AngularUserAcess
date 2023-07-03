import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName: string | undefined;
  lastName: string | undefined;
  username: string | undefined;
  email: string | undefined;
  brandName: string | undefined;
  department: string | undefined;
  mobileNumber: string | undefined;
  telephoneNumber: string | undefined;
  deliveryStreet: string | undefined;
  deliveryHouseNr: string | undefined;
  deliveryPostcode: string | undefined;
  deliveryCity: string | undefined;
  deliveryCountry: string | undefined;
  billingStreet: string | undefined;
  billingHouseNr: string | undefined;
  billingPostcode: string | undefined;
  billingCity: string | undefined;
  billingCountry: string | undefined;
  billingDifferent: boolean = false;
  contactPersons: any[] = [{ name: '', telefone: '', mobile: '', email: '' }];
  submitted: boolean = false;

  addContactPerson() {
    if (this.contactPersons.length < 5) {
      this.contactPersons.push({ name: '', telefone: '', mobile: '', email: '' });
    }
  }

  removeContactPerson(index: number) {
    this.contactPersons.splice(index, 1);
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }


  onSubmit() {
    this.submitted = true;
    if (!this.isFormValid()) {
      return;
    }
  }

  isFormValid(): boolean {
    // Perform validation for required fields and email
    const requiredFields = [
      this.firstName, this.lastName, this.username, this.email, this.brandName, this.department,
      this.telephoneNumber, this.deliveryStreet, this.deliveryHouseNr, this.deliveryPostcode,
      this.deliveryCity, this.deliveryCountry, this.billingStreet, this.billingHouseNr,
      this.billingPostcode, this.billingCity, this.billingCountry, this.contactPersons[0]?.name
    ];

    for (const field of requiredFields) {
      if (!field) {
        return false;
      }
    }

    if (this.email && !this.validateEmail(this.email)) {
      return false;
    }

    return true; // Return true if all validations pass
  }


  constructor() { }

  ngOnInit(): void {
  }

}
