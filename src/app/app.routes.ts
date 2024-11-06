import { Routes } from '@angular/router';

import { AutorComponent } from "./components/autor/autor.component";
import { LivroComponent } from "./components/livro/livro.component";
import { HomeComponent } from "./components/home/home.component";
import { InfoAudiobookComponent } from "./components/info-audiobook/info-audiobook.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'autor', component: AutorComponent },
  { path: 'livro', component: LivroComponent },
  { path: 'info-audiobook', component: InfoAudiobookComponent },
  { path: '**', redirectTo: '' }
];
