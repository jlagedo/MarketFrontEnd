import { Component, OnInit, OnDestroy } from "@angular/core";
import { ToasterConfig } from "angular2-toaster";
import { Subscription } from "rxjs/Subscription";
import { OidcSecurityService } from "angular-auth-oidc-client";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthorizedSubscription: Subscription | undefined;
  isAuthorized = false;

  onChecksessionChanged: Subscription | undefined;
  checksession = false;

  name = "none";
  userDataSubscription: Subscription | undefined;
  userData = false;

  public config: ToasterConfig = new ToasterConfig({
    showCloseButton: false,
    tapToDismiss: true,
    timeout: 5000,
    positionClass: "toast-bottom-center",
    animation: "slideUp"
  });

  constructor(public oidcSecurityService: OidcSecurityService) {
    if (this.oidcSecurityService.moduleSetup) {
      this.doCallbackLogicIfRequired();
    } else {
      this.oidcSecurityService.onModuleSetup.subscribe(() => {
        this.doCallbackLogicIfRequired();
      });
    }
  }

  ngOnInit() {
    this.isAuthorizedSubscription = this.oidcSecurityService
      .getIsAuthorized()
      .subscribe((isAuthorized: boolean) => {
        this.isAuthorized = isAuthorized;
      });

    this.userDataSubscription = this.oidcSecurityService
      .getUserData()
      .subscribe((userData: any) => {
        if (userData !== "") {
          this.name = userData.name;
          console.log(userData);
        }

        console.log("userData getting data");
      });
  }

  ngOnDestroy(): void {
    if (this.isAuthorizedSubscription) {
      this.isAuthorizedSubscription.unsubscribe();
    }

    if (this.isAuthorizedSubscription) {
      this.isAuthorizedSubscription.unsubscribe();
    }

    this.oidcSecurityService.onModuleSetup.unsubscribe();
    this.oidcSecurityService.onCheckSessionChanged.unsubscribe();
    this.oidcSecurityService.onAuthorizationResult.unsubscribe();
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff();
  }

  private doCallbackLogicIfRequired() {
    if (window.location.hash) {
      this.oidcSecurityService.authorizedCallback();
    }
  }
}
