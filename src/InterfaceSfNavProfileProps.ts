
interface InterfaceSfNavProfileProps {
    clickMenu: (value: any, component?: any) => void;
    toggleExpandProfile: () => void;
    toggleProfileDropdownExpandedWrap: (value: number) => void;
    setExpandProfile: (value: boolean) => void;
    getProfileDropdownExpandedWrap: () => any;
    theme:  any;
    variant: string;
    profilePicture: string;
    expandProfile: boolean;
    profilePreamble: any;
    profileComponent: any;
    profileMenu: any;
    classNameProfilePreamble: any;
    classNameProfileComponent: any;
    classNameProfilePicture: any;
    classNameProfilePictureContainer: any;
    classNameMenuMobileSelected: any;
    classNameMenuMobile: any;
    classNameSubMenuMobile: any;
    stylesProfilePreamble: any;
    stylesProfileComponent: any;
    stylesProfilePicture: any;
    stylesProfilePictureContainer: any;
    stylesMenuMobileSelected: any;
    stylesMenuMobile: any;
    stylesSubMenuMobile: any;
}


export {type InterfaceSfNavProfileProps};