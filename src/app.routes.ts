import { MainComponent } from './pages/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"
import { LoginComponent } from "pages/login/login.component";
export const ROUTES: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "login"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "main",
        component: MainComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }