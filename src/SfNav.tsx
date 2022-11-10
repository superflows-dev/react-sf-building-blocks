import * as React from 'react'
import { useState, useEffect } from "react";
import Themes from 'react-sf-themes';
import SfButton from './SfButton';
import SfInput from './SfInput';
import { Constants } from './Constants';
// import SfButton from './SfButton';
// import Services from './Services';
// import Util from './Util';


import Util from './Util';

interface Props {
    variant?: string;
    theme?: any;
    brand?: string;
    brandLogo?: any;
    menu?: any;
    menuIcon?: any;
    backIcon?: any;
    profilePicture?: string;
    profileMenu?: any;
    profilePreamble?: any;
    profileComponent?: any;
    optionsIcon?: any;
    showBack?: boolean;
    showSearch?: boolean;
    showSignIn?: boolean;
    showProfile?: boolean;
    searchCaption?: string;
    signInCaption?: string;
    searchIcon?: any;
    stylesBrand? : any;
    stylesBrandLogo? : any;
    stylesMenu? : any;
    stylesSubMenu? : any;
    stylesMenuMobile? : any;
    stylesSubMenuMobile? : any;
    stylesMenuMobileSelected? : any;
    stylesSignIn?: any;
    stylesSearchContainer?: any;
    stylesSearchInput?: any;
    stylesContainerDesktop?: any;
    stylesContainerMobile?: any;
    stylesContainerRightMenu?: any;
    stylesProfilePicture?: any;
    stylesProfilePictureContainer?: any;
    stylesProfilePreamble?: any;
    stylesProfileComponent?: any;
    stylesBack?: any;
    classNameBrand?: any;
    classNameBrandLogo?: any;
    classNameMenu?: any;
    classNameSubMenu?: any;
    classNameMenuMobile?: any;
    classNameSubMenuMobile?: any;
    classNameMenuMobileSelected?: any;
    classNameSignIn?: any;
    classNameSearchContainer?: any;
    classNameSearchInput?: any;
    classNameContainerDesktop?: any;
    classNameContainerMobile?: any;
    classNameContainerRightMenu?: any;
    classNameProfilePicture?: any;
    classNameProfilePictureContainer?: any;
    classNameProfilePreamble?: any;
    classNameProfileComponent?: any;
    classNameBack?: any;
    onHomePressed?: () => void;
    onBackPressed?: () => void;
    onSearchPressed?: (value: string) => void;
    onSignInPressed?: () => void;
    onMenuClicked?: (value: string) => void;
}

interface ProfileProps {
    clickMenu: (value: any) => void;
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

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Profile = ({ clickMenu, toggleExpandProfile, toggleProfileDropdownExpandedWrap, getProfileDropdownExpandedWrap, setExpandProfile, theme, variant, profilePicture, expandProfile, profilePreamble, profileComponent, profileMenu, classNameProfileComponent, classNameSubMenuMobile, classNameMenuMobileSelected, classNameMenuMobile, classNameProfilePreamble, classNameProfilePicture, classNameProfilePictureContainer, stylesProfileComponent, stylesProfilePreamble, stylesMenuMobileSelected, stylesMenuMobile, stylesSubMenuMobile, stylesProfilePicture, stylesProfilePictureContainer}: ProfileProps) => {

    return (

        <div className='nav_profile_menu' style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            marginLeft: theme.spaces.mod + 'px'
        }}>
            <div className={'nav_profile_toggle ' + classNameProfilePictureContainer} onClick={(event) => {event.stopPropagation(); toggleExpandProfile()}} style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                ...stylesProfilePictureContainer
            }}>
                {profilePicture.length > 0 && <img className={classNameProfilePicture} src={profilePicture} 
                    style={{
                        height: (parseInt(theme.dimensions.navHeight) * 4)/5 + 'px',
                        marginRight: (theme.spaces.min) + 'px',
                        borderRadius: (parseInt(theme.dimensions.navHeight) * 4)/10 + 'px',
                        ...stylesProfilePicture
                        }} 
                /> }
                    <small>
                        <small>
                            {!expandProfile && '▼'}
                            {expandProfile && '▲'}
                        </small>
                    </small>
            </div>
            {expandProfile && <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                position: 'absolute',
                top: theme.dimensions.navHeight + 'px',
                right: '0px'
            }}>
                <div 
                    className='nav_div_profile_menu_overlay' 
                    style={{
                        position: 'fixed',
                        left: '0px',
                        top: '0px',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'transparent',
                        zIndex: '300'
                    }} onClick={(event) => {event.stopPropagation(); toggleProfileDropdownExpandedWrap(-1); toggleExpandProfile()}}>
                </div>

                {profilePreamble != null && <div className={'' + classNameProfilePreamble} style={{
                    borderTopLeftRadius: '5px',
                    borderTopRightRadius: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: '301',
                    backgroundColor: '#efefef',
                    ...stylesProfilePreamble
                }}>
                {profilePreamble} </div>}

                {
                    profileMenu.map((element: any, key: any) => {

                        if(Object.prototype.toString.call(element) === '[object Array]') {
                            
                            return (
                                <div key={key} style={{
                                    position: 'relative',
                                    zIndex: '301',
                                    width: theme.dimensions.menuWidth + 'px'

                                }}>
                                    {getProfileDropdownExpandedWrap()[key] && <SfButton className={'nav_profile_menu_' + key + '_expanded ' + classNameMenuMobileSelected} styles={{
                                        width: '100%',
                                        borderTopLeftRadius: profilePreamble != null ? '0px' : key === 0 ? '5px' : '0px',
                                        borderTopRightRadius: profilePreamble != null ? '0px' : key === 0 ? '5px' : '0px',
                                        borderBottomLeftRadius: profileComponent != null ? '0px' : key === profileMenu.length - 1 ? '5px' : '0px',
                                        borderBottomRightRadius: profileComponent != null ? '0px' : key === profileMenu.length - 1 ? '5px' : '0px',
                                        fontWeight: '400',
                                        marginTop: '-2px',
                                        cursor:  'pointer',
                                        justifyContent: 'flex-start',
                                        backgroundColor: Util.getTextColor(theme, variant, "filled"),
                                        boxShadow: profileComponent != null ? 'none' : key === profileMenu.length - 1 ? '0px 2px 2px #aaa' : 'none',
                                        ...stylesMenuMobileSelected
                                        }} variant={variant} type="outlined" caption={(!getProfileDropdownExpandedWrap()[key] ? '◂ ' : '◂ ') + element[0].caption}  onClick={(event) => {event.stopPropagation(); toggleProfileDropdownExpandedWrap(key)}}/>}

                                    {!getProfileDropdownExpandedWrap()[key] && <SfButton className={'nav_profile_menu_' + key + '_collapsed ' + classNameMenuMobile} styles={{
                                        width: '100%',
                                        borderTopLeftRadius: profilePreamble != null ? '0px' : key === 0 ? '5px' : '0px',
                                        borderTopRightRadius: profilePreamble != null ? '0px' : key === 0 ? '5px' : '0px',
                                        borderBottomLeftRadius: profileComponent != null ? '0px' : key === profileMenu.length - 1 ? '5px' : '0px',
                                        borderBottomRightRadius: profileComponent != null ? '0px' : key === profileMenu.length - 1 ? '5px' : '0px',
                                        fontWeight: '400',
                                        marginTop: '-2px',
                                        cursor:  'pointer',
                                        justifyContent: 'flex-start',
                                        boxShadow: profileComponent != null ? 'none' : key === profileMenu.length - 1 ? '0px 2px 2px #aaa' : 'none',
                                        zIndex: '301',
                                        ...stylesMenuMobile
                                        }} variant={variant} type="filled" caption={element[0].caption + (!getProfileDropdownExpandedWrap()[key] ? ' ▸' : ' ▸')}  onClick={(event) => {event.stopPropagation(); toggleProfileDropdownExpandedWrap(key)}}/>}

                                    {getProfileDropdownExpandedWrap()[key] && <div style={{
                                        flexDirection: 'column',
                                        position: 'absolute',
                                        right: '0px',
                                        marginRight:  (parseInt(theme.dimensions.menuWidth) + parseInt(theme.spaces.min)) + 'px',
                                        top: '0px',
                                        display: 'flex',
                                        alignItems: 'stretch',
                                        zIndex: '301'
                                    }}>
                                        {
                                            element.slice(1).map((item: any, key1: any) => {

                                                return (
                                                    <SfButton  className={'nav_profile_menu_' + key + '_' + key1 + " " + classNameSubMenuMobile} styles={{
                                                        borderTopLeftRadius: key1 === 0 ? '5px' : '0px',
                                                        borderTopRightRadius: key1 === 0 ? '5px' : '0px',
                                                        borderBottomLeftRadius: key1 === element.length - 2 ? '5px' : '0px',
                                                        borderBottomRightRadius: key1 === element.length - 2 ? '5px' : '0px',
                                                        fontWeight: '400',
                                                        marginTop: '-2px',
                                                        cursor:  'pointer',
                                                        justifyContent: 'flex-start',
                                                        width: theme.dimensions.menuWidth + 'px',
                                                        boxShadow: key1 === element.length - 1 ? '0px 2px 2px #aaa' : 'none',
                                                        ...stylesSubMenuMobile
                                                    }} key={key1} variant={variant} type="filled" caption={item.caption} onClick={(event) => {event.stopPropagation();  toggleProfileDropdownExpandedWrap(-1); setExpandProfile(false); clickMenu(item.link)}}/>
                                                )

                                            })
                                        }
                                    </div>}

                                </div>
                            );

                        } else {

                            return (
                                <div key={key} style={{
                                    zIndex: '301',
                                    width: theme.dimensions.menuWidth + 'px',
                                }}>
                                    <SfButton  className={'nav_profile_menu_' + key + ' ' + classNameMenuMobile} styles={{
                                        width: '100%',
                                        borderTopLeftRadius: profilePreamble != null ? '0px' : key === 0 ? '5px' : '0px',
                                        borderTopRightRadius: profilePreamble != null ? '0px' : key === 0 ? '5px' : '0px',
                                        borderBottomLeftRadius: profileComponent != null ? '0px' : key === profileMenu.length - 1 ? '5px' : '0px',
                                        borderBottomRightRadius: profileComponent != null ? '0px' : key === profileMenu.length - 1 ? '5px' : '0px',
                                        fontWeight: '400',
                                        marginTop: '-2px',
                                        cursor:  'pointer',
                                        justifyContent: 'flex-start',
                                        zIndex: '301',
                                        boxShadow: profileComponent != null ? 'none' : key === profileMenu.length - 1 ? '0px 2px 2px #aaa' : 'none',
                                        ...stylesMenuMobile
                                        }} key={key} variant={variant} type="filled" caption={element.caption} onClick={(event) => {event.stopPropagation(); toggleProfileDropdownExpandedWrap(-1); setExpandProfile(false); clickMenu(element.link)}}/>
                                </div>
                            );

                        }

                    })
                }

                {profileComponent != null && <div className={'' + classNameProfileComponent} style={{
                    boxShadow: '0px 2px 2px #aaa',
                    borderBottomLeftRadius: '5px',
                    borderBottomRightRadius: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: '301',
                    backgroundColor: '#efefef',
                    ...stylesProfileComponent
                    
                }}>
                {profileComponent} </div>}

            </div>}

            
        </div>

    );

}

const SfNav = ({variant = Themes.getTheme().variants.primary, theme = Themes.getTheme(), brand = Constants.DEFAULT_BRAND_NAME, stylesBrand = {}, brandLogo = Constants.DEFAULT_BRAND_ICON, stylesBrandLogo = {}, menu = Constants.DEFAULT_MENU, profilePicture = Constants.DEFAULT_PROFILE_PICTURE, profileMenu = {}, profilePreamble = null, profileComponent = null,  showProfile = false, showSearch = true, showSignIn = true, showBack = false, onMenuClicked = () => {}, onHomePressed = () => {}, onSearchPressed = () => {}, onSignInPressed = () => {}, onBackPressed = () => {}, signInCaption = "Sign In", searchCaption = "Search", searchIcon = null, menuIcon = null, backIcon = null, optionsIcon = null, classNameBrand = "", classNameBrandLogo = "", classNameMenu = "", classNameSubMenu = "", classNameMenuMobile = "", classNameSubMenuMobile = "", classNameMenuMobileSelected = "", classNameSignIn = "", classNameSearchContainer = "", classNameSearchInput = "", classNameContainerDesktop = "", classNameContainerMobile = "", classNameContainerRightMenu = "", classNameProfilePreamble = "", classNameProfileComponent = "", classNameProfilePicture = "", classNameProfilePictureContainer = "", classNameBack = "", stylesMenu = {}, stylesSubMenu = {}, stylesMenuMobile = {}, stylesSubMenuMobile = {}, stylesMenuMobileSelected = "", stylesSignIn = {}, stylesSearchContainer = {}, stylesSearchInput = {}, stylesContainerDesktop = {}, stylesContainerMobile = {}, stylesContainerRightMenu = {}, stylesProfilePreamble = {}, stylesProfileComponent = {}, stylesProfilePicture = {}, stylesProfilePictureContainer = {}, stylesBack = {}}: Props) => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [searchString, setSearchString] = useState('');
    const [dropdownExpanded, setDropdownExpanded] = useState('[]');
    const [profileDropdownExpanded, setProfileDropdownExpanded] = useState('[]');
    const [showLeftMenu, setShowLeftMenu] = useState(false);
    const [showRightMenu, setShowRightMenu] = useState(false);
    const [expandProfile, setExpandProfile] = useState(false);

    function toggleExpandProfile() {
        setExpandProfile(!expandProfile);
    }

    function toggleLeftMenu() {
        setShowLeftMenu(!showLeftMenu)
    }

    function toggleRightMenu() {
        setShowRightMenu(!showRightMenu)
    }

    function clickMenu(link: string) {
        onMenuClicked(link);
    }

    function toggleDropdownExpandedWrap(index: number) {
        let arr = getDropdownExpandedWrap();

        if(index === -1) {
            for(let i = 0; i < arr.length; i++) {
                arr[i] = false;
            }
            setDropdownExpanded(JSON.stringify(arr));
        } else {
            if(arr[index]) {
                arr[index] = !arr[index];
            } else {
                for(let i = 0; i < arr.length; i++) {
                    arr[i] = false;
                }
                arr[index] = true;
            }
            setDropdownExpanded(JSON.stringify(arr));
        }

        
    }

    function getDropdownExpandedWrap() {
        return JSON.parse(dropdownExpanded);
    }

    function toggleProfileDropdownExpandedWrap(index: number) {
        let arr = getProfileDropdownExpandedWrap();

        if(index === -1) {
            for(let i = 0; i < arr.length; i++) {
                arr[i] = false;
            }
            setProfileDropdownExpanded(JSON.stringify(arr));
        } else {
            if(arr[index]) {
                arr[index] = !arr[index];
            } else {
                for(let i = 0; i < arr.length; i++) {
                    arr[i] = false;
                }
                arr[index] = true;
            }
            setProfileDropdownExpanded(JSON.stringify(arr));
        }

        
    }

    function getProfileDropdownExpandedWrap() {
        return JSON.parse(profileDropdownExpanded);
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div style={{
            color: Util.getTextColor(theme, variant == theme.variants.dark ? theme.variants.light :  variant == theme.variants.light ? theme.variants.dark : variant, theme.types.outlined)
        }}>
            {windowDimensions.width <= theme.breakpoints.tablet && <div style={{position: 'relative'}}>
                
                <div 
                className={classNameContainerMobile}
                style={{
                    position: 'relative',
                    height: theme.dimensions.navHeight + 'px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: theme.spaces.big + 'px',
                    paddingRight: theme.spaces.big + 'px',
                    ...stylesContainerMobile
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>

                        {showBack && <div className={'nav_back_menu ' + classNameBack} onClick={() => {onBackPressed()}} style={{
                            paddingRight: theme.spaces.ltl + 'px',
                            fontWeight: '800',
                            ...stylesBack
                            }}><b>{backIcon == null ? '‹' : backIcon}</b></div>}
                        
                        {!showBack && <div className='nav_left_menu' onClick={() => {toggleLeftMenu()}} style={{
                            paddingRight: theme.spaces.ltl + 'px',
                            fontWeight: '800'
                            }}><b>{menuIcon == null ? '☰' : menuIcon}</b></div>}
                        
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '800'
                        }}>
                            {(brandLogo != null && brandLogo != "") && <img 
                            className={`nav_brand_logo ` + classNameBrandLogo}
                            src={brandLogo} 
                            onClick={() => {onHomePressed()}}
                            style={{
                                cursor: 'pointer',
                                height: (parseInt(theme.dimensions.navHeight) * 8)/10 + 'px',
                                paddingRight: theme.spaces.ltl + 'px',
                                ...stylesBrandLogo
                            }}/>}
                            {brand != "" && <div 
                            onClick={() => {onHomePressed()}}
                            className={'nav_brand ' + classNameBrand}
                            style={{
                                cursor: 'pointer',
                                fontSize: '120%',
                                ...stylesBrand
                            }}>{brand}</div>}
                        </div>                    
                    </div>
                    
                    <div 
                        className='nav_right_menu'
                        onClick={() => {toggleRightMenu()}} 
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: theme.spaces.ltl + 'px',
                            }}>
                        
                        {showSignIn && <SfButton className={'btn_signin_portrait ' + classNameSignIn} styles={{marginRight: Themes.getTheme().spaces.mod + 'px', height: '30px', fontSize: '90%',  ...stylesSignIn}} variant={variant == theme.variants.dark ? theme.variants.light : variant == theme.variants.light ? theme.variants.dark : variant} type={theme.types.filled} caption={signInCaption} onClick={(event) => {onSignInPressed(); event.stopPropagation()}} />}

                        <span style={{fontWeight: '800'}}><b>{optionsIcon == null ? '⋮' : optionsIcon}</b></span>
                    
                        {showProfile && <Profile clickMenu={clickMenu} toggleExpandProfile={toggleExpandProfile} toggleProfileDropdownExpandedWrap={toggleProfileDropdownExpandedWrap} setExpandProfile={setExpandProfile} getProfileDropdownExpandedWrap={getProfileDropdownExpandedWrap } theme={theme} variant={variant} profilePicture={profilePicture} expandProfile={expandProfile} profilePreamble={profilePreamble} profileComponent={profileComponent} profileMenu={profileMenu} classNameProfilePreamble={classNameProfilePreamble} classNameProfileComponent={classNameProfileComponent} classNameMenuMobileSelected={classNameMenuMobileSelected} classNameMenuMobile={classNameMenuMobile} classNameSubMenuMobile={classNameSubMenuMobile} classNameProfilePicture={classNameProfilePicture} classNameProfilePictureContainer={classNameProfilePictureContainer} stylesProfilePreamble={stylesProfilePreamble} stylesProfileComponent={stylesProfileComponent} stylesMenuMobileSelected={stylesMenuMobileSelected} stylesMenuMobile={stylesMenuMobile} stylesSubMenuMobile={stylesSubMenuMobile} stylesProfilePicture={stylesProfilePicture} stylesProfilePictureContainer={stylesProfilePictureContainer}/>}
                    
                    </div>

                    
                {showLeftMenu && <div className='nav_div_left_menu' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    position: 'absolute',
                    left: theme.spaces.ltl + 'px',
                    backgroundColor: Util.getTextColor(theme, variant, "filled"),
                    top: (parseInt(theme.dimensions.navHeight)) + 'px',
                }}>
                    
                    <div className='nav_div_left_menu_overlay' style={{
                        position: 'fixed',
                        left: '0px',
                        top: '0px',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'transparent',
                        zIndex: '300'
                    }} onClick={() => {toggleDropdownExpandedWrap(-1); toggleLeftMenu()}}>
                    </div>

                    {
                        menu.map((element: any, key: any) => {

                            if(Object.prototype.toString.call(element) === '[object Array]') {
                                
                                return (
                                    <div key={key} style={{
                                        position: 'relative',
                                        zIndex: '1999',
                                        width: theme.dimensions.menuWidth + 'px',
                                    }}>
                                        {getDropdownExpandedWrap()[key] && <SfButton className={'nav_left_menu_' + key + '_expanded ' + classNameMenuMobileSelected} styles={{
                                            width: '100%',
                                            borderTopLeftRadius: key === 0 ? '5px' : '0px',
                                            borderTopRightRadius: key === 0 ? '5px' : '0px',
                                            borderBottomLeftRadius: key === menu.length - 1 ? '5px' : '0px',
                                            borderBottomRightRadius: key === menu.length - 1 ? '5px' : '0px',
                                            fontWeight: '400',
                                            marginTop: '-2px',
                                            cursor:  'pointer',
                                            justifyContent: 'flex-start',
                                            boxShadow: key === menu.length - 1 ? '0px 2px 2px #aaa' : 'none',
                                            backgroundColor: Util.getTextColor(theme, variant, "filled"),
                                            ...stylesMenuMobileSelected
                                            }} variant={variant} type="outlined" caption={element[0].caption + (!getDropdownExpandedWrap()[key] ? ' ▸' : ' ▸')}  onClick={() => {toggleDropdownExpandedWrap(key)}}/>}

                                        {!getDropdownExpandedWrap()[key] && <SfButton className={'nav_left_menu_' + key + '_collapsed ' + classNameMenuMobile} styles={{
                                            width: '100%',
                                            borderTopLeftRadius: key === 0 ? '5px' : '0px',
                                            borderTopRightRadius: key === 0 ? '5px' : '0px',
                                            borderBottomLeftRadius: key === menu.length - 1 ? '5px' : '0px',
                                            borderBottomRightRadius: key === menu.length - 1 ? '5px' : '0px',
                                            fontWeight: '400',
                                            marginTop: '-2px',
                                            cursor:  'pointer',
                                            justifyContent: 'flex-start',
                                            boxShadow: key === menu.length - 1 ? '0px 2px 2px #aaa' : 'none',
                                            zIndex: '301',
                                            ...stylesMenuMobile
                                            }} variant={variant} type="filled" caption={element[0].caption + (!getDropdownExpandedWrap()[key] ? ' ▸' : ' ▸')}  onClick={() => {toggleDropdownExpandedWrap(key)}}/>}

                                        {getDropdownExpandedWrap()[key] && <div style={{
                                            width: theme.dimensions.menuWidth + 'px',
                                            flexDirection: 'column',
                                            position: 'absolute',
                                            left: '105%',
                                            top: '0px',
                                            display: 'flex',
                                            alignItems: 'stretch',
                                            zIndex: '301',
                                            backgroundColor: Util.getTextColor(theme, variant, "filled"),
                                        }}>
                                            {
                                                element.slice(1).map((item: any, key1: any) => {

                                                    return (
                                                        <SfButton  className={'nav_left_menu_' + key + '_' + key1 + " " + classNameSubMenuMobile} styles={{
                                                            width: '100%',
                                                            borderTopLeftRadius: key1 === 0 ? '5px' : '0px',
                                                            borderTopRightRadius: key1 === 0 ? '5px' : '0px',
                                                            borderBottomLeftRadius: key1 === element.length - 2 ? '5px' : '0px',
                                                            borderBottomRightRadius: key1 === element.length - 2 ? '5px' : '0px',
                                                            fontWeight: '400',
                                                            marginTop: '-2px',
                                                            cursor:  'pointer',
                                                            justifyContent: 'flex-start',
                                                            boxShadow: key1 === element.length - 1 ? '0px 2px 2px #aaa' : 'none',
                                                            ...stylesSubMenuMobile
                                                        }} key={key1} variant={variant} type="filled" caption={item.caption} onClick={() => { toggleDropdownExpandedWrap(-1); setShowLeftMenu(false); clickMenu(item.link)}}/>
                                                    )

                                                })
                                            }
                                        </div>}

                                    </div>
                                );

                            } else {

                                return (
                                    <div key={key} style={{
                                        zIndex: '301',
                                        width: theme.dimensions.menuWidth + 'px',
                                    }}>
                                        <SfButton  className={'nav_left_menu_' + key + ' ' + classNameMenuMobile} styles={{
                                            width: '100%',
                                            borderTopLeftRadius: key === 0 ? '5px' : '0px',
                                            borderTopRightRadius: key === 0 ? '5px' : '0px',
                                            borderBottomLeftRadius: key === menu.length - 1 ? '5px' : '0px',
                                            borderBottomRightRadius: key === menu.length - 1 ? '5px' : '0px',
                                            fontWeight: '400',
                                            marginTop: '-2px',
                                            cursor:  'pointer',
                                            justifyContent: 'flex-start',
                                            zIndex: '301',
                                            ...stylesMenuMobile
                                            }} key={key} variant={variant} type="filled" caption={element.caption} onClick={() => {toggleDropdownExpandedWrap(-1); setShowLeftMenu(false); clickMenu(element.link)}}/>
                                    </div>
                                );

                            }

                        })
                    }
                </div>} 

                {showRightMenu && <div 
                className={'nav_div_right_menu '} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    position: 'absolute',
                    right: theme.spaces.ltl + 'px',
                    top: (parseInt(theme.dimensions.navHeight)) + 'px',
                }}>
                    <div 
                    className='nav_div_right_menu_overlay' 
                    style={{
                        position: 'fixed',
                        left: '0px',
                        top: '0px',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'transparent',
                        zIndex: '300'
                    }} onClick={() => {toggleRightMenu()}}>
                    </div>

                    <div 
                    className={classNameContainerRightMenu}
                    style={{
                        flexDirection: 'column',
                        display: 'flex',
                        alignItems: 'stretch',
                        border: 'solid 1px' + Util.getBorderColor(theme, variant, "outlined"),
                        backgroundColor: Util.getTextColor(theme, variant, "filled"),
                        borderRadius: parseInt(theme.spaces.min) + 'px',
                        padding: parseInt(theme.spaces.min) + 'px',
                        zIndex: '301',
                        ...stylesContainerRightMenu
                    }}>

                        {showSearch && <SfInput classNameContainer={classNameSearchContainer} classNameInput={classNameSearchInput} stylesContainer={stylesSearchContainer} stylesInput={stylesSearchInput} variant={variant == theme.variants.dark ? theme.variants.light : variant == theme.variants.light ? theme.variants.dark : variant} caption={searchCaption} icon={searchIcon != null ? searchIcon : null} inputType={theme.inputTypes.name} onComplete={(value) => {setSearchString(value)}} onEnterPressed={() => {toggleRightMenu(); onSearchPressed(searchString)}} />}
                        
                    </div>

                </div>}


                </div>

            </div>}
            {windowDimensions.width > theme.breakpoints.tablet && <div 
            className={classNameContainerDesktop}
            style={{
                height: theme.dimensions.navHeight + 'px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: theme.spaces.big + 'px',
                paddingRight: theme.spaces.big + 'px',
                ...stylesContainerDesktop
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>

                    {showBack && <div className={'nav_back_menu ' + classNameBack} onClick={() => {onBackPressed()}} style={{paddingRight: theme.spaces.ltl + 'px', cursor: 'pointer', ...stylesBack}}><b>{backIcon == null ? '‹' : backIcon}</b></div>}

                     {(brandLogo != null && brandLogo != "") && <img 
                     className={'nav_brand_logo ' + classNameBrandLogo}
                     src={brandLogo} 
                     onClick={() => {onHomePressed()}}
                     style={{
                        cursor: 'pointer',
                        height: (parseInt(theme.dimensions.navHeight) * 10)/10 + 'px',
                        paddingRight: theme.spaces.ltl + 'px',
                        ...stylesBrandLogo
                    }}/>}
                    {brand != "" && <div 
                    className={'nav_brand ' + classNameBrand}
                    onClick={() => {onHomePressed()}}
                    style={{
                        cursor: 'pointer',
                        fontWeight: 800,
                        fontSize: '150%',
                        ...stylesBrand
                    }}>{brand}</div>}
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    {
                        menu.map((element: any, key: any) => {

                            let arr = getDropdownExpandedWrap();
                            arr.push(false);

                            if(Object.prototype.toString.call(element) === '[object Array]') {

                                return (
                                    <div key={key} style={{
                                        position: 'relative',
                                        fontWeight: '500',
                                        marginLeft: theme.spaces.big + 'px',
                                        cursor: 'pointer',
                                    }}>
                                        <div className={'nav_menu_'+key + ' ' + classNameMenu} style={{display: 'flex', alignItems: 'center', ...stylesMenu}} onClick={() => {toggleDropdownExpandedWrap(key)}}>{element[0].caption}&nbsp;<small><small>{!getDropdownExpandedWrap()[key] && '▼'}{getDropdownExpandedWrap()[key] && '▲'}</small></small></div>
                                        {getDropdownExpandedWrap()[key] && <div style={{
                                                position: 'absolute',
                                                top: '30px',
                                                left: '0px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'stretch',
                                            }}>

                                                <div className='nav_menu_overlay' style={{
                                                    position: 'fixed',
                                                    left: '0px',
                                                    top: '0px',
                                                    width: '100%',
                                                    height: '100%',
                                                    backgroundColor: 'transparent',
                                                    zIndex: '300'
                                                }} onClick={() => {toggleDropdownExpandedWrap(key)}}>
                                                </div>
                                                {
                                                    element.slice(1).map((item: any, key1: any) => {

                                                        return (
                                                            <SfButton className={'nav_menu_' + key + '_' + key1 + ' ' + classNameSubMenu} styles={{
                                                                borderTopLeftRadius: key1 === 0 ? '5px' : '0px',
                                                                borderTopRightRadius: key1 === 0 ? '5px' : '0px',
                                                                borderBottomLeftRadius: key1 === element.length - 2 ? '5px' : '0px',
                                                                borderBottomRightRadius: key1 === element.length - 2 ? '5px' : '0px',
                                                                fontWeight: '400',
                                                                marginTop: '-2px',
                                                                cursor:  'pointer',
                                                                zIndex: '301',
                                                                width: theme.dimensions.menuWidth + 'px',
                                                                ...stylesSubMenu
                                                            }} key={key1} variant={variant} type="filled" caption={item.caption} onClick={() => {toggleDropdownExpandedWrap(key); clickMenu(item.link)}}/>
                                                        )

                                                    })
                                                }    
                                        </div>}
                                    </div>
                                   
                                )

                            } else {

                                arr.push(0);

                                return (
                                    <div className={'nav_menu_' + key + ' ' + classNameMenu} key={key} style={{
                                        cursor: 'pointer',
                                        fontWeight: '500',
                                        marginLeft: theme.spaces.big + 'px',
                                        ...stylesMenu
                                    }} onClick={() => {
                                        clickMenu(element.link);
                                    }}>{element.caption}</div>
                                )
                            }

                        })
                    }
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    {showSearch && <SfInput classNameContainer={classNameSearchContainer} classNameInput={classNameSearchInput} stylesContainer={stylesSearchContainer} stylesInput={stylesSearchInput} variant={variant == theme.variants.dark ? theme.variants.light : variant == theme.variants.light ? theme.variants.dark : variant} caption={searchCaption} icon={searchIcon != null ? searchIcon : null} inputType={theme.inputTypes.name} onComplete={(value) => {setSearchString(value)}} onEnterPressed={() => {onSearchPressed(searchString)}} />}
                    {showSignIn && <SfButton className={'nav_signin_button ' + classNameSignIn} styles={{height: '40px', fontSize: '90%', marginLeft: theme.spaces.mod + 'px', ...stylesSignIn}} variant={variant == theme.variants.dark ? theme.variants.light : variant == theme.variants.light ? theme.variants.dark : variant} type={theme.types.filled} caption={signInCaption} onClick={() => {onSignInPressed()}} />}
                    {showProfile && <Profile clickMenu={clickMenu} toggleExpandProfile={toggleExpandProfile} toggleProfileDropdownExpandedWrap={toggleProfileDropdownExpandedWrap} setExpandProfile={setExpandProfile} getProfileDropdownExpandedWrap={getProfileDropdownExpandedWrap } theme={theme} variant={variant} profilePicture={profilePicture} expandProfile={expandProfile} profilePreamble={profilePreamble} profileComponent={profileComponent} profileMenu={profileMenu} classNameProfilePicture={classNameProfilePicture} classNameProfilePreamble={classNameProfilePreamble} classNameProfileComponent={classNameProfileComponent} classNameMenuMobileSelected={classNameMenuMobileSelected} classNameMenuMobile={classNameMenuMobile} classNameSubMenuMobile={classNameSubMenuMobile} classNameProfilePictureContainer={classNameProfilePictureContainer} stylesProfilePreamble={stylesProfilePreamble} stylesProfileComponent={stylesProfileComponent} stylesMenuMobileSelected={stylesMenuMobileSelected} stylesMenuMobile={stylesMenuMobile} stylesSubMenuMobile={stylesSubMenuMobile} stylesProfilePicture={stylesProfilePicture} stylesProfilePictureContainer={stylesProfilePictureContainer}/>}
                </div>
            </div>}
        </div>
    )

}

export default SfNav;
