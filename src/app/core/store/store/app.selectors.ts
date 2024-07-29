import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../Entites/AppState";



export const header_themes_states = createFeatureSelector<AppState>('app_state');


