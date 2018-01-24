/**
 * Created by gaole on 2018/1/23.
 */
import {NgModule} from "@angular/core";
import {NgaComponent} from "./nga.component";
import {Name2AvatarPipe} from "./pipes/name2Avatar/name2Avatar.pipe";

@NgModule({
  declarations:[
    NgaComponent,
    Name2AvatarPipe,
  ],
  imports:[],
  entryComponents:[

  ],
  exports:[
    Name2AvatarPipe,
  ]
})

export class NgaModule{}
