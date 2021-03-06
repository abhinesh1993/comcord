import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./admin/login/login.component";

const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },

    {
        path: 'global',
        loadChildren: './global/global.module#GlobalModule'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }