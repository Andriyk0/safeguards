import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import emailMask from 'text-mask-addons/dist/emailMask';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {

  public createContactForm!: FormGroup;
  public emailMask = emailMask;

  constructor(
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initUserForm()
  }

  initUserForm():void{
    this.createContactForm = this.fb.group({
      fullName:[null,[Validators.required]],
      company:[null,[Validators.required]],
      phone:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      message:[null,[Validators.required]],
    })
  }

  contact():void{
    this.createContactForm.reset();
    this.goToTop();
  }

  goToTop():void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
