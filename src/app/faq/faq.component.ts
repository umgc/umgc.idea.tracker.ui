import { Component, OnInit } from '@angular/core';
import { Faq } from '../faq';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs: Faq[];

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {

    this.getFaqs();
  }

  private getFaqs(){
    this.faqService.getFaqList().subscribe(data =>{
      this.faqs = data;
    });
  }

}
