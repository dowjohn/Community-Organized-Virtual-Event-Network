
/** Interface for displaying and activating routes */
export interface NavigationLink {
    path: string, // routerlink path
    code: string, // unique code for filtering
    enabled: boolean, // whether the link is enabled or disabled
    show: boolean, // whether the link is shown
    title: string, // display title
    icon: string // material icon code
}
