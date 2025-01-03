interface InteractionRule {
  action: "open" | "close";
  affectedComponents: string[];
  priority?: number;
}

export interface INavigationComponentRules {
  autoClose: string[];           // Components to auto-close when this component is opened
  preventOpenIf: string[];       // Components that prevent this component from opening
  autoCloseWith?: string[];      // Optional: Components to auto-close with this component
  canBeOpenWith?: string[];      // Optional: Components that can be opened with this component
  interactionRules?: InteractionRule[]; // Optional list of specific interaction rules
  defaultBehavior?: { [action: string]: string[] }; // Default behaviors if no interaction rules apply
}

export interface INavigationMenu {
  types: boolean,
  theme: boolean,
}

export type INavigationMenuKeys = keyof INavigationMenu;

export interface INavigationState {
  navState: INavigationMenu;
  componentRules: { [component in INavigationMenuKeys]?: INavigationComponentRules };
}
