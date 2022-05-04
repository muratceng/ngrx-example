import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { galleryReducer } from './store/reducers/gallery.reducer'
import { HttpClientModule } from '@angular/common/http'
import { GalleryService } from './services/gallery.service'
import { GalleryComponent } from './components/gallery/gallery.component'
import { EffectsModule } from '@ngrx/effects'
import { GalleryEffects } from './store/effects/gallery.effect'

@NgModule({
  declarations: [AppComponent, GalleryComponent],
  imports: [BrowserModule, FormsModule, EffectsModule.forRoot([GalleryEffects]), HttpClientModule, StoreModule.forRoot({gallery:galleryReducer})],
  providers:[GalleryService],
  bootstrap: [AppComponent],
})
export class AppModule {}