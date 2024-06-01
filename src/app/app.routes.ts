import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './layouts/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { DataComponent } from './pages/data/data.component';
import { MailComponent } from './pages/mail/mail.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { SettingComponent } from './pages/setting/setting.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'discount',
                component: DiscountComponent
            },
            {
                path: 'data',
                component: DataComponent
            },
            {
                path: 'mail',
                component: MailComponent
            },
            {
                path: 'notification',
                component: NotificationComponent
            },
            {
                path: 'setting',
                component: SettingComponent
            },
        ]
    }
];
