import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    private _position: BehaviorSubject<Position> = new BehaviorSubject<Position>(null)
    public readonly position: Observable<Position> = this._position.asObservable()

    constructor() { }

    watchLocation() {
        navigator.geolocation.watchPosition((position) =>
            this._position.next(position))
    }
}
