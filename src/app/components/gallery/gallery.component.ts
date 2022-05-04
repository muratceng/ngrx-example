import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Gallery } from "src/app/models/gallery";
import { GalleryService } from "src/app/services/gallery.service";
import { invokeGalleryAPI, retrievedGallery } from "src/app/store/actions/gallery.action";
import { galleryByAlbumId, uniqueALbumIds } from "src/app/store/selectors/gallery.selector";

@Component({
    templateUrl:'./gallery.component.html',
    selector:'gallery'
})
export class GalleryComponent implements OnInit{
    albumIds = this.store.pipe(select(uniqueALbumIds)); 
    albumSelectedId = -1;
    allAlbum = this.store.pipe(select(galleryByAlbumId(this.albumSelectedId)))

    constructor(private store:Store<{gallery:Gallery[]}>, private gallerService:GalleryService){}

    ngOnInit(): void {
        // this.gallerService.loadGallery().subscribe((res)=>{
        //     this.store.dispatch(retrievedGallery({allGallery: [...res as Gallery[]]}));
        // });
        this.store.dispatch(invokeGalleryAPI());
    }

    onAlbumChange(value:number){
        this.allAlbum = this.store.pipe(select(galleryByAlbumId(this.albumSelectedId)))
    }
}