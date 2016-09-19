import { Component, ViewEncapsulation } from '@angular/core';
import { StFooterLink } from '../../../../components';

@Component({
  selector: 'footer-example',
  template: require('./footer.component.html'),
  styles: [require('./footer.component.scss')],
  encapsulation: ViewEncapsulation.None
})

export class FooterComponent {

  private rightsText: string;
  private links: Array<StFooterLink> = new Array<StFooterLink>();

  constructor() {
    this.rightsText = '© Stratio Big Data Inc. All Rights Reserved';
    this.links.push({
      title: 'Legal Terms',
      url: 'http://www.google.es'
    });
    this.links.push({
      title: 'Help',
      url: 'http://www.google.es'
    });
  }
}
