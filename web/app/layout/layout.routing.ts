import {RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {
  ModalComponent,
  MainComponent,
  InputComponent,
  InfoBoxComponent,
  ModificableListComponent,
  SpinnerComponent,
  FooterComponent
} from '../+examples';
import {InfoCardComponent} from '../+examples/info-card/info-card.component';

export const routing = RouterModule.forChild([
  {
    path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'main' },
    { path: 'main', component: MainComponent },
    { path: 'modal', component: ModalComponent },
    { path: 'input', component: InputComponent },
    { path: 'info-box', component: InfoBoxComponent },
    { path: 'spinner', component: SpinnerComponent },
    { path: 'modificable-list', component: ModificableListComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'info-card', component: InfoCardComponent }
  ]
  }
]);
