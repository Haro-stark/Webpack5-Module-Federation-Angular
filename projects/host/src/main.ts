// import('./bootstrap')
// 	.catch(err => console.error(err));
import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
    loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:5000/mfe1remoteEntry.js'})
])
.then(() => import('./bootstrap'))
.catch(err => console.error('error', err));
