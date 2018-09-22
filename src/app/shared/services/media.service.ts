import { Injectable } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable, BehaviorSubject } from 'rxjs'

const SCREEN_CODES = {
    WEB: 'web',
    TABLET: 'tablet',
    MOBILE: 'mobile'
}

@Injectable({
    providedIn: 'root'
})

/**
 * Service for detecting current screen dimensions
 */
export class MediaService {
    private _isMobile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    public readonly isMobile: Observable<boolean> = this._isMobile.asObservable()

    private _isTablet: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    public readonly isTablet: Observable<boolean> = this._isTablet.asObservable()

    private _isWeb: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    public readonly isWeb: Observable<boolean> = this._isWeb.asObservable()

    constructor(private breakpointObserver: BreakpointObserver) {
        this.breakpointObserver.observe([
            Breakpoints.Handset,
        ]).subscribe(result => {
            this._isMobile.next(result.matches)
            console.log(result.matches)
        })

        this.breakpointObserver.observe([
            Breakpoints.Tablet,
        ]).subscribe(result =>
            this._isTablet.next(result.matches))

        this.breakpointObserver.observe([
            Breakpoints.Web
        ]).subscribe(result =>
            this._isWeb.next(result.matches))
    }


}
