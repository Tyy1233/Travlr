import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@Angular/Router';
import { TripListingComponent } from "./trip-listing/trip-listing.component";
import { AddTripComponent } from "./add-trip/add-trip.component";
import { EditTripComponent } from "./edit-trip/edit-trip.component";

const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent},
    { path: '', component: TripListingComponent, pathMatch: 'full'},
    { path: 'edit-trip', component: EditTripComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }