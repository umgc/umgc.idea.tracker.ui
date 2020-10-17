import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewadminComponent } from './newadmin/newadmin.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProposalTableComponent } from './proposal-table/proposal-table.component';
import { UpdateProjectComponent } from './update-project/update-project.component';


const routes: Routes = [
  {path: 'project', component: ProjectListComponent},
  {path: 'proposal', component: ProposalTableComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newadmin', component: NewadminComponent},
  {path: 'create-project', component: CreateProjectComponent},
  {path: "", redirectTo: 'project', pathMatch: 'full'},
  {path: 'update-project/:id', component: UpdateProjectComponent},
  {path: 'project-details/:id', component: ProjectDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
