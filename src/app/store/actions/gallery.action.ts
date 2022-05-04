import { createAction,props } from "@ngrx/store";
import { Gallery } from "src/app/models/gallery";

export const retrievedGallery = createAction(
    '[Gallery API] API success',
    props<{allGallery:Gallery[]}>() 
);

export const invokeGalleryAPI = createAction(
    '[Gallery API] Invoke API'
);
