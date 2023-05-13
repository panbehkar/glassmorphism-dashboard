export interface RouteTitle {
  title?: string;
}

export interface RouteMenu {
  icon: JSX.Element;
  text: string;
}

export interface RouteType {
  id: string;
  path: string;
  Element: ({ title }: RouteTitle) => JSX.Element;
  menu?: RouteMenu;
}
