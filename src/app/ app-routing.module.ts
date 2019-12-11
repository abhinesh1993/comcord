import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./admin/login/login.component";

const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },

    // {
    //     path: 'error',
    //     loadChildren: './error/error.module.ts#ErrorModule'
    // }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }