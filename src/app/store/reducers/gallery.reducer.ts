import { createReducer,on } from "@ngrx/store";
import { Gallery } from "src/app/models/gallery";
import { retrievedGallery } from "../actions/gallery.action";

export const initialState : Gallery[] = [];

const _galleryReducer =createReducer(
    initialState,
    on(retrievedGallery,(state,{allGallery})=>{
        return [...allGallery];
    })
)

export function galleryReducer(state:any,actions:any){
    return _galleryReducer(state,actions)
}
