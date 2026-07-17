export const DB_NAME='pico-tamachibi-faithful';
export const DB_VERSION=1;
let db=null;
export function openDB(){return new Promise((resolve,reject)=>{const r=indexedDB.open(DB_NAME,DB_VERSION);r.onupgradeneeded=()=>{const d=r.result;if(!d.objectStoreNames.contains('kv'))d.createObjectStore('kv');if(!d.objectStoreNames.contains('tracks'))d.createObjectStore('tracks',{keyPath:'id',autoIncrement:true});};r.onsuccess=()=>{db=r.result;resolve(db)};r.onerror=()=>reject(r.error);});}
export function getDB(){return db;}
export function idbGet(store,key){return new Promise((res,rej)=>{const r=db.transaction(store).objectStore(store).get(key);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});}
export function idbPut(store,value,key){return new Promise((res,rej)=>{const s=db.transaction(store,'readwrite').objectStore(store);const r=key===undefined?s.put(value):s.put(value,key);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});}
export function idbDelete(store,key){return new Promise((res,rej)=>{const r=db.transaction(store,'readwrite').objectStore(store).delete(key);r.onsuccess=()=>res();r.onerror=()=>rej(r.error);});}
export function idbAll(store){return new Promise((res,rej)=>{const r=db.transaction(store).objectStore(store).getAll();r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});}
export function idbClear(store){return new Promise((res,rej)=>{const r=db.transaction(store,'readwrite').objectStore(store).clear();r.onsuccess=()=>res();r.onerror=()=>rej(r.error);});}
