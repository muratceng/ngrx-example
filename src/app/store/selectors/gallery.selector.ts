import { createSelector } from "@ngrx/store";
import { Gallery } from "src/app/models/gallery";
import { AppState } from "../app.state";

export const galleryRootSelector = (state:AppState) => state.gallery;

export const uniqueALbumIds = createSelector(
    galleryRootSelector,
    (gallery:Gallery[])=> {
        return [... new Set(gallery.map( _ => _.albumId))];
    }
)

export const galleryByAlbumId = (value:number) => createSelector(
    galleryRootSelector,
    (gallery: Gallery[]) => {
        if(value == -1){
            return gallery;
        }
        return gallery.filter((item) => item.albumId == value)
    }
)