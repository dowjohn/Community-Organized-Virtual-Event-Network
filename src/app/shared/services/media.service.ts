import { Injectable } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable, BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class MediaService {
    private _isHandset: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    public readonly isHandset: Observable<boolean> = this._isHandset.asObservable()

    private _isTablet: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    public readonly isTablet: Observable<boolean> = this._isTablet.asObservable()

    private _isWeb: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    public readonly isWeb: Observable<boolean> = this._isWeb.asObservable()

    // TODO alter to observe breakpoints individually
    constructor(private breakpointObserver: BreakpointObserver) {
        this.breakpointObserver.observe([
            Breakpoints.Handset,
            Breakpoints.Tablet,
            Breakpoints.Web
        ]).subscribe(result => {
            this._isHandset.next(result.matches)
            this._isTablet.next(result.breakpoints[Breakpoints.Tablet])
            this._isWeb.next(result.breakpoints[Breakpoints.Web])
        })
    }
}
