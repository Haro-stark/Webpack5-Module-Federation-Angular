import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  lookup(): Promise<Microfrontend[]>{
    return Promise.resolve([
      {
        // For Loading
        type: "module",
        remoteEntry: "http://localhost:5000/mfe1remoteEntry.js",
        exposedModule: "./MfefeatureModule",
        // For Routing
        displayName: "MFE1 App",
        routePath: "mfe1",
        ngModuleName: "MfefeatureModule"
      }
    ] as Microfrontend[]) 
  }
}
