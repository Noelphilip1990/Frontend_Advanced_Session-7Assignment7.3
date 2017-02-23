import  {Routes, RouterModule} from '@angular/router';
import { InfouserComponent } from './infouser/infouser.component';

const app: Routes =
[
		{ path: "info/:role", component: InfouserComponent }
]

export const routing = RouterModule.forRoot(app);
