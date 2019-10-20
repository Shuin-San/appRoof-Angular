// core imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { OktaAuthModule } from '@okta/okta-angular';


// services and shared
import { FilterPipe } from './shared/filter.pipe';

// private pages
import { NavbarComponent } from './private/navbar/navbar.component';
import { HeadCtaComponent } from './private/head-cta/head-cta.component';
import { SecondaryNavigationComponent } from './private/secondary-navigation/secondary-navigation.component';
import { HomepageComponent } from './private/homepage/homepage.component';
import { JumbotronComponent } from './private/jumbotron/jumbotron.component';
import { ReferencePanelComponent } from './private/reference-panel/reference-panel.component';
import { FindDacComponent } from './private/find-dac/find-dac.component';
import { BlogComponent } from './private/blog/blog.component';
import { FooterComponent } from './private/footer/footer.component';
import { SolutionsComponent } from './private/solutions/solutions.component';
import { DbgadvantagesComponent } from './private/dbgadvantages/dbgadvantages.component';
import { SolutionListComponent } from './private/solution-list/solution-list.component';
import { OverDerbigumComponent } from './private/over-derbigum/over-derbigum.component';
import { MainBodyComponent } from './private/main-body/main-body.component';
import { SolutionStandardComponent } from './private/solution-standard/solution-standard.component';
import { OfferRequestComponent } from './private/offer-request/offer-request.component';
import { OfferFormComponent } from './private/offer-form/offer-form.component';




// pro pages
import { TcInfoComponent } from './professional/tc-info/tc-info.component';
import { ProHomepageComponent } from './professional/pro-homepage/pro-homepage.component';
import { ProNavbarComponent } from './professional/pro-navbar/pro-navbar.component';
import { ProSecondNavbarComponent } from './professional/pro-second-navbar/pro-second-navbar.component';
import { ProHeadctaComponent } from './professional/pro-headcta/pro-headcta.component';
import { ProJumbotronComponent } from './professional/pro-jumbotron/pro-jumbotron.component';
import { ProfessionalTypeComponent } from './professional/professional-type/professional-type.component';
import { ProDbgAdvantagesComponent } from './professional/pro-dbg-advantages/pro-dbg-advantages.component';
import { FindDealerComponent } from './professional/find-dealer/find-dealer.component';


// my derbigum
import { MyDerbigumAppComponent } from './myDerbigum/my-derbigum-app/my-derbigum-app.component';
import { MyLeadsComponent } from './myDerbigum/my-leads/my-leads.component';
import { ApproofHomeComponent } from './AppRoof/approof-home/approof-home.component';
import { ApproofSolutionComponent } from './AppRoof/approof-solution/approof-solution.component';
import { EscapeHtmlPipe } from './shared/keep-html.pipe';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './myDerbigum/user-profile/user-profile.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadCtaComponent,
    SecondaryNavigationComponent,
    HomepageComponent,
    JumbotronComponent,
    ReferencePanelComponent,
    FindDacComponent,
    BlogComponent,
    FooterComponent,
    FilterPipe,
    SolutionsComponent,
    DbgadvantagesComponent,
    OverDerbigumComponent,
    MainBodyComponent,
    SolutionListComponent,
    TcInfoComponent,
    ProHomepageComponent,
    ProNavbarComponent,
    ProSecondNavbarComponent,
    ProHeadctaComponent,
    ProJumbotronComponent,
    ProfessionalTypeComponent,
    ProDbgAdvantagesComponent,
    FindDealerComponent,
    MyDerbigumAppComponent,
    MyLeadsComponent,
    SolutionStandardComponent,
    OfferRequestComponent,
    OfferFormComponent,
    ApproofHomeComponent,
    EscapeHtmlPipe,
    ApproofSolutionComponent,
    LoginComponent,
    UserLoginComponent,
    UserProfileComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'XyfKcXLLtEJmmkerGrBh'
    }),
    OktaAuthModule.initAuth({
      issuer: 'https://dev-681251.okta.com/oauth2/default',
      redirectUri: 'http://localhost:4200/implicit/callback',
      clientId: '0oaqy7najBJmlYsjr356'
    })
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
