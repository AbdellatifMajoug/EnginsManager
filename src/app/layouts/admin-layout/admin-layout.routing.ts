import { Routes } from '@angular/router';

import { TypographyComponent } from '../../typography/typography.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { DahsboardAssistantComponent } from 'app/dahsboard-assistant/dahsboard-assistant.component';
import { AjoutDemandeComponent } from 'app/ajout-demande/ajout-demande.component';

export const AdminLayoutRoutes: Routes = [
    
    { path: 'demandeur/dashboard', component: DashboardComponent },
    { path: 'assistant/dashboard', component: DahsboardAssistantComponent },
    { path: 'ajoutDemande',   component: AjoutDemandeComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
