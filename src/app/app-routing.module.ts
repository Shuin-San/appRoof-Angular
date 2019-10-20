import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './private/homepage/homepage.component';
import { SolutionListComponent } from './private/solution-list/solution-list.component';
import { SolutionsComponent } from './private/solutions/solutions.component';
import { ProHomepageComponent } from './professional/pro-homepage/pro-homepage.component';

import { MyDerbigumAppComponent } from './myDerbigum/my-derbigum-app/my-derbigum-app.component';
import { MyLeadsComponent } from './myDerbigum/my-leads/my-leads.component';
import { SolutionStandardComponent } from './private/solution-standard/solution-standard.component';
import { OfferRequestComponent } from './private/offer-request/offer-request.component';
import { ApproofHomeComponent } from './AppRoof/approof-home/approof-home.component';
import { ApproofSolutionComponent } from './AppRoof/approof-solution/approof-solution.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'oplossingen', component: SolutionsComponent },
  { path: 'oplossingen/waterdichting', component: SolutionListComponent },
  { path: 'pro', component: ProHomepageComponent },
  { path: 'myDerbigum', component: MyDerbigumAppComponent },
  { path: 'myDerbigum/leads', component: MyLeadsComponent },
  { path: 'oplossingen/waterdichting/plat-dak', component: SolutionStandardComponent },
  { path: 'oplossingen/waterdichting/plat-dak/gratis-offerte', component: OfferRequestComponent },
  { path: 'myDerbigum/approof', component: ApproofHomeComponent },
  { path: 'myDerbigum/approof/:id', component: ApproofSolutionComponent },
  { path: 'implicit/callback', component: OktaCallbackComponent},
  { path: 'myDerbigum/pro/login', component: UserLoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export function onAuthRequired({ oktaAuth, router }) {
  router.navigate(['/myDerbigum/pro/login']);
}
