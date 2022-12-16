import * as React from 'react'
import { useState, useEffect } from "react";
import Themes from 'react-sf-themes';
import SfButton from './SfButton';
import SfInput from './SfInput';
import { Constants } from './Constants';
import {ContextSfNavProvider} from './ContextSfNav';
import {InterfaceNavigate} from './InterfaceNavigate';
// import SfButton from './SfButton';
// import Services from './Services';
// import Util from './Util';
import Util from './Util';
import {InterfaceSfNavProvider} from './InterfaceSfNavProvider';
import {InterfaceSfNavProps} from './InterfaceSfNavProps';
import {InterfaceSfNavProfileProps} from './InterfaceSfNavProfileProps';
import {InterfaceSfNavNotificationProps} from './InterfaceSfNavNotificationProps';
import {InterfaceSfNavBannerProps} from './InterfaceSfNavBannerProps';
import { InterfaceSfNavNotificationItem } from './InterfaceSfNavNotificationItem';


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Banner = ({variant, theme, bannerCta = Constants.DEFAULT_BANNER_CTA, bannerComponent, bannerEnableDismiss, bannerText = Constants.DEFAULT_BANNER_TEXT, showBanner, onBannerCtaPressed = () => {}, stylesBannerContainer, stylesBannerCta, stylesBannerText, classNameBannerContainer, classNameBannerCta, classNameBannerText}: InterfaceSfNavBannerProps) => {

    const [displayBanner, setDisplayBanner] = useState(true);

    return (
        <div>
            {showBanner && displayBanner && bannerComponent == null && <div className={classNameBannerContainer} style={{position: 'relative', paddingTop: theme.spaces.min + 'px', paddingBottom: theme.spaces.min + 'px', display: 'flex', alignItems: 'center',  justifyContent: 'center', fontSize: '90%', backgroundColor: Util.getBackgroundColor(theme, variant, theme.types.filled), color: Util.getTextColor(theme, variant, theme.types.filled), fontWeight: '600', ...stylesBannerContainer}}>
                    <div className={classNameBannerText} style={{marginLeft: theme.spaces.mod + 'px', marginRight: theme.spaces.mod + 'px', ...stylesBannerText}}>{bannerText}</div>
                    <div style={{display: "flex", alignItems: 'center'}}>
                        <div style={{marginLeft: theme.spaces.min + 'px', marginRight: theme.spaces.min + 'px'}}>
                            {<SfButton className={'banner_cta ' + classNameBannerCta} variant={theme.variants.light} type={theme.types.outlined} caption={bannerCta} onClick={() => {onBannerCtaPressed()}} styles={{paddingTop: '2px', paddingBottom: '2px', ...stylesBannerCta}}/>}
                        </div>
                        {bannerEnableDismiss && <div className='banner_dismiss' style={{marginLeft: theme.spaces.min + 'px', marginRight: theme.spaces.min + 'px', cursor: 'pointer'}} onClick={() => {setDisplayBanner(false)}}>✕</div>}
                    </div>
            </div>}
            {showBanner && displayBanner && bannerComponent != null && bannerComponent}
        </div>
    )
}

const Profile = ({ clickMenu, toggleExpandProfile, toggleProfileDropdownExpandedWrap, getProfileDropdownExpandedWrap, setExpandProfile, theme, variant, profilePicture, expandProfile, profilePreamble, profileComponent, profileMenu, classNameProfileComponent, classNameSubMenuMobile, classNameMenuMobileSelected, classNameMenuMobile, classNameProfilePreamble, classNameProfilePicture, classNameProfilePictureContainer, stylesProfileComponent, stylesProfilePreamble, stylesMenuMobileSelected, stylesMenuMobile, stylesSubMenuMobile, stylesProfilePicture, stylesProfilePictureContainer}: InterfaceSfNavProfileProps) => {

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
                        zIndex: '198'
                    }} onClick={(event) => {event.stopPropagation(); toggleProfileDropdownExpandedWrap(-1); toggleExpandProfile()}}>
                </div>

                {profilePreamble != null && <div className={'' + classNameProfilePreamble} style={{
                    borderTopLeftRadius: '5px',
                    borderTopRightRadius: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: '199',
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
                                    zIndex: '199',
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
                                        zIndex: '199',
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
                                        zIndex: '199'
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
                                                    }} key={key1} variant={variant} type="filled" caption={item.caption} onClick={(event) => {event.stopPropagation();  toggleProfileDropdownExpandedWrap(-1); setExpandProfile(false); clickMenu(item.link, item.component)}}/>
                                                )

                                            })
                                        }
                                    </div>}

                                </div>
                            );

                        } else {

                            return (
                                <div key={key} style={{
                                    zIndex: '199',
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
                                        zIndex: '199',
                                        boxShadow: profileComponent != null ? 'none' : key === profileMenu.length - 1 ? '0px 2px 2px #aaa' : 'none',
                                        ...stylesMenuMobile
                                        }} key={key} variant={variant} type="filled" caption={element.caption} onClick={(event) => {event.stopPropagation(); toggleProfileDropdownExpandedWrap(-1); setExpandProfile(false); clickMenu(element.link, element.component)}}/>
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
                    zIndex: '199',
                    backgroundColor: '#efefef',
                    ...stylesProfileComponent
                    
                }}>
                {profileComponent} </div>}

            </div>}

            
        </div>

    );

}

const NotificationMenu = ({variant = Themes.getTheme().variants.primary, theme = Themes.getTheme(), notificationList, toggleNotificationMenu, onViewAllNotificationsClicked, onNotificationClicked, classNameNotificationListContainer, classNameNotificationRead, classNameNotificationUnRead, stylesNotificationListContainer, stylesNotificationRead, stylesNotificationUnRead, stylesNotificationViewAll, classNameNotificationViewAll}: InterfaceSfNavNotificationProps) => {

    return (
        <div className={'nav_div_notif_menu '} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            position: 'absolute',
            right: theme.spaces.ltl + 'px',
            top: (parseInt(theme.dimensions.navHeight)) + 'px',
        }}>
            <div 
                className='nav_div_notif_menu_overlay' 
                style={{
                    position: 'fixed',
                    left: '0px',
                    top: '0px',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'transparent',
                    zIndex: '198'
                }} onClick={() => {toggleNotificationMenu()}}>
            </div>

            <div style={{
                zIndex: '199',
                position: 'relative'
            }}>

                <div 
                className={classNameNotificationListContainer}
                style={{
                    flexDirection: 'column',
                    display: 'flex',
                    alignItems: 'stretch',
                    backgroundColor: 'white',
                    maxHeight: '400px',
                    overflowY: 'auto',
                    position: 'relative',
                    ...stylesNotificationListContainer
                }}>

                    {
                        notificationList.map((item: any, key1: any) => {

                        const styleNotification = (item.read ? stylesNotificationRead : stylesNotificationUnRead);

                        return (
                            <div 
                                onClick={() => {onNotificationClicked(item); toggleNotificationMenu();}}
                                className={'nav_notif_list_' + key1 + " " + (item.read ? classNameNotificationRead : classNameNotificationUnRead )}
                                key={key1}
                                style={{
                                    borderTopLeftRadius: key1 === 0 ? '5px' : '0px',
                                    borderTopRightRadius: key1 === 0 ? '5px' : '0px',
                                    borderBottomLeftRadius: key1 === notificationList.length - 1 ? '5px' : '0px',
                                    borderBottomRightRadius: key1 === notificationList.length - 1 ? '5px' : '0px',
                                    fontWeight: '400',
                                    marginBottom: theme.spaces.min + 'px',
                                    cursor:  'pointer',
                                    justifyContent: 'flex-start',
                                    width: theme.dimensions.notificationListWidth + 'px',
                                    boxShadow: '0px 2px 2px #aaa',
                                    backgroundColor: Util.getBackgroundColor(theme, item.read ? "secondary" : variant, theme.types.filled),
                                    color:  Util.getTextColor(theme, variant, theme.types.filled),
                                    paddingTop: theme.spaces.ltl + 'px',
                                    paddingBottom: theme.spaces.ltl + 'px',
                                    paddingLeft: theme.spaces.ltl + 'px',
                                    paddingRight: theme.spaces.ltl + 'px',
                                    ...styleNotification
                                }}>
                                    <div style={{fontSize: '90%', fontWeight: '400'}}>{item.title}</div>
                                    <div style={{fontSize: '70%', fontWeight: '400', marginTop: '4px'}}>{item.description}</div>
                                    <div style={{fontSize: '50%', fontWeight: '400', marginTop: '8px', textAlign: 'right'}}>{item.timestampReceived}</div>
                            </div>
                        )

                        })
                    }
                    
                </div>

                <div className={'div_viewall_notif ' + classNameNotificationViewAll} style={{
                    textAlign: 'right',
                    fontSize: '70%',
                    fontWeight: '800',
                    cursor: 'pointer',
                    ...stylesNotificationViewAll 
                }} onClick={(e) => {
                    toggleNotificationMenu();
                    onViewAllNotificationsClicked();
                    e.stopPropagation();
                }}>View All ▶</div>

            </div>
        </div>
    );

}

const ErrorNotFound = () => {

    return (<div style={{textAlign: 'center', color: 'gray'}}><br /><br />
        <b><h1>Page Not Found</h1></b>
        <b>There is nothing here...</b>
        <br /><br /><br /></div>);

}

const SfNav = ({variant = Themes.getTheme().variants.primary, theme = Themes.getTheme(), brand = Constants.DEFAULT_BRAND_NAME, stylesBrand = {}, brandLogo = Constants.DEFAULT_BRAND_ICON, stylesBrandLogo = {}, menu = Constants.DEFAULT_MENU, profilePicture = Constants.DEFAULT_PROFILE_PICTURE, profileMenu = [], notificationDetailsMenu = {caption: "", link: "", component: null}, notificationListMenu = {caption: "", link: "", component: null}, profilePreamble = null, homeMenu = {caption: "", link: "", component: null}, profileComponent = null, bannerComponent = null, bannerComponentMobile = null, enableRouting = false, showProfile = false, showSearch = true, showSignIn = true, showBack = false, showNotification = false, showBanner = false, onMenuClicked = () => {}, onHomePressed = () => {}, onSearchPressed = () => {}, onSignInPressed = () => {}, onBackPressed = () => {}, onViewAllNotificationsClicked = () => {}, onNotificationClicked = () => {}, onBannerCtaPressed = () => {}, signInCaption = "Sign In", searchCaption = "Search", bannerText = Constants.DEFAULT_BANNER_TEXT, bannerTextMobile = "", bannerCta = Constants.DEFAULT_BANNER_CTA, bannerCtaMobile = "", bannerEnableDismiss = true, searchIcon = null, menuIcon = null, backIcon = null, notificationIcon = null, optionsIcon = null, notificationList=Constants.DEFAULT_NOTIFICATION_LIST, classNameBrand = "", classNameBrandLogo = "", classNameMenu = "", classNameSubMenu = "", classNameMenuMobile = "", classNameSubMenuMobile = "", classNameMenuMobileSelected = "", classNameSignIn = "", classNameSearchContainer = "", classNameSearchInput = "", classNameContainerDesktop = "", classNameContainerMobile = "", classNameContainerRightMenu = "", classNameProfilePreamble = "", classNameProfileComponent = "", classNameProfilePicture = "", classNameProfilePictureContainer = "", classNameBack = "", classNameNotificationIcon = "", classNameNotificationBadge = "", classNameNotificationListContainer = "", classNameNotificationRead = "", classNameNotificationUnRead = "", classNameNotificationViewAll = "", classNameBannerContainer = "", classNameBannerText = "", classNameBannerCta = "", stylesMenu = {}, stylesSubMenu = {}, stylesMenuMobile = {}, stylesSubMenuMobile = {}, stylesMenuMobileSelected = "", stylesSignIn = {}, stylesSearchContainer = {}, stylesSearchInput = {}, stylesContainerDesktop = {}, stylesContainerMobile = {}, stylesContainerRightMenu = {}, stylesProfilePreamble = {}, stylesProfileComponent = {}, stylesProfilePicture = {}, stylesProfilePictureContainer = {}, stylesBack = {}, stylesNotificationIcon = {}, stylesNotificationBadge = {}, stylesNotificationListContainer = {}, stylesNotificationRead = {}, stylesNotificationUnRead = {}, stylesNotificationViewAll = {}, stylesBannerContainer = {}, stylesBannerCta = {}, stylesBannerText = {}}: InterfaceSfNavProps) => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [searchString, setSearchString] = useState('');
    const [dropdownExpanded, setDropdownExpanded] = useState('[]');
    const [profileDropdownExpanded, setProfileDropdownExpanded] = useState('[]');
    const [showLeftMenu, setShowLeftMenu] = useState(false);
    const [showRightMenu, setShowRightMenu] = useState(false);
    const [showNotificationMenu, setShowNotificationMenu] = useState(false);
    const [expandProfile, setExpandProfile] = useState(false);
    const [notificationListStr, setNotificationListStr] = useState("[]");
    const [history, setHistory] = useState<InterfaceNavigate[]>([])

    const interfaceSfNavProvider : InterfaceSfNavProvider = {
        navigateTo: navigateTo,
        navigationData: history[history.length - 1]
    };

    function setNotificationListStrWrap(list: any) {
        setNotificationListStr(JSON.stringify(list));
    }

    function getNotificationListStrWrap() {
        return JSON.parse(notificationListStr);
    }

    function notificationListContainsUnRead() {
        if(JSON.parse(notificationListStr).length === 0) {
            return false;
        } else {
            let unRead = false;
            for(let i  = 0; i < getNotificationListStrWrap().length; i++) {
                if(!getNotificationListStrWrap()[i].read) {
                    return true;
                }
            }
            return unRead;
        }
    }

    function toggleExpandProfile() {
        setExpandProfile(!expandProfile);
    }

    function toggleLeftMenu() {
        setShowLeftMenu(!showLeftMenu)
    }

    function toggleRightMenu() {
        setShowRightMenu(!showRightMenu)
    }

    function toggleNotificationMenu() {
        setShowNotificationMenu(!showNotificationMenu)
    }

    function clickHome() {

        const interfaceNavigate : InterfaceNavigate = {
            link: homeMenu.link,
            component: homeMenu.component,
            args: null
        };
        navigateTo(interfaceNavigate);

    }

    function clickMenu(link: string, component: any = null, args: any = null) {

        if(enableRouting) {

            if(component != null) {
                const interfaceNavigate : InterfaceNavigate = {
                    link: link,
                    component: component,
                    args: args
                };
                navigateTo(interfaceNavigate);
            } else {
                onMenuClicked(link);
            }

        } else {
            onMenuClicked(link);
        }
         
    }

    function navigateTo(component: InterfaceNavigate) {
        console.log('navigating to', component, "/" + component.link + (component.args == null ? "" : component.args.length === 0 ? "" : "/" + component.args.join("/")) );
        console.log('push state', "/" + (component.link == "" ? "" : (component.link + (component.args == null ? "" : component.args.length === 0 ? "" : "/" + component.args.join("/")))));
        //if(history.length > 0 && history[history.length - 1].link != component.link) {
            window.history.pushState({}, "", "/" + component.link == "" ? "" : (component.link + (component.args == null ? "" : component.args.length === 0 ? "" : "/" + component.args.join("/"))));
        //}
        setHistory(history => [...history, component]);
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

    function onClickNotification(item: InterfaceSfNavNotificationItem) {

        console.log('notification item', item);

        if(enableRouting) {

            if(notificationDetailsMenu.component == null) {
                onNotificationClicked(item.id)
            } else {
                const interfaceNavigate : InterfaceNavigate = {
                    link: notificationDetailsMenu.link,
                    component: notificationDetailsMenu.component,
                    args: [item.id > 0 ? item.id : ""]
                };
                navigateTo(interfaceNavigate);
            }

        } else {
            onNotificationClicked(item.id)   
        }

    }

    function onClickNotificationViewAll() {

        console.log('inside view all');

        if(enableRouting) {

            console.log('inside view all enable routing');

            if(notificationListMenu.component == null) {
                console.log('inside view all enable routing component null');
                onViewAllNotificationsClicked();
            } else {
                console.log('inside view all enable routing component not null');
                const interfaceNavigate : InterfaceNavigate = {
                    link: notificationListMenu.link,
                    component: notificationListMenu.component,
                    args: null
                };
                navigateTo(interfaceNavigate);
            }

        } else {

            console.log('inside view all not enable routing');

            onViewAllNotificationsClicked();
        }

    }

    useEffect(() => {
        setNotificationListStrWrap(notificationList);
    }, [notificationList])

    useEffect(() => {

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    useEffect(() => {

        if(enableRouting) {

            const urlComponents = window.location.href.split("/");
            const screenComponent = urlComponents[3];
            //const args = urlComponents.slice(4);

            console.log('url components', urlComponents);
            console.log('screen component', screenComponent);
            console.log('screen component home menu', homeMenu);
    
            // First check if it is the home link

            if(homeMenu.link == screenComponent && homeMenu.component != null) {
                clickHome()
                return;
            }

            // Then check if it is the notification details link

            console.log('screen component notif details menu', notificationDetailsMenu.link);
    
            if(notificationDetailsMenu.link == screenComponent && notificationDetailsMenu.component != null) {

                onClickNotification({id: urlComponents[4] != null ? parseInt(urlComponents[4]) : -1, description: "", read: false, timestampReceived: "", title: ""})
                return;
            }
    
            // Then check if it is the notification view all link

            console.log('screen component notif list menu', notificationListMenu.link);

            if(notificationListMenu.link == screenComponent && notificationListMenu.component != null) {
                onClickNotificationViewAll();
                return;
            }
    
            // Then check if it is any of the menu pages

            for(var i = 0; i < menu.length; i++) {
                console.log('menu[i]', menu[i], screenComponent);
                if(menu[i].constructor.name == "Array") {
    
                    for(var j = 1; j < menu[i].length; j++) {
    
                        if(menu[i][j].link == screenComponent && menu[i][j].component != null) {
                            clickMenu(menu[i][j].link, menu[i][j].component)
                            return;
                        }
                    }
                } else {
    
                    console.log('menu[i]', menu[i], "link=", menu[i].link, "screen=", screenComponent );
                    if(menu[i].link == screenComponent && menu[i].component != null) {
                        clickMenu(menu[i].link, menu[i].component)
                        return;
                    }
                }
                
            }


            // then check if it is in the profile menus
            
            if(showProfile) {
                for(var i = 0; i < profileMenu.length; i++) {
                    if(profileMenu[i].constructor.name == "Array") {
        
                        for(var j = 1; j < profileMenu[i].length; j++) {
        
                            if(profileMenu[i][j].link == screenComponent && profileMenu[i][j].component != null) {
                                clickMenu(profileMenu[i][j].link, profileMenu[i][j].component);
                                return;
                            }
                        }
                    } else {
        
                        if(profileMenu[i].link == screenComponent && profileMenu[i].component != null) {
                            clickMenu(profileMenu[i].link, profileMenu[i].component);
                            return;
                        }
                    }
                    
                }
            }

            // Then check if the link is blank and home component is provided

            if(screenComponent == "" && homeMenu.component != null) {
                clickHome();
                return;
            }

            navigateTo({component: <ErrorNotFound/>, link: "errornotfound", args: null});

        }

    }, [menu])

    return (

        <div>

            <div style={{
                color: Util.getTextColor(theme, variant == theme.variants.dark ? theme.variants.light :  variant == theme.variants.light ? theme.variants.dark : variant, theme.types.outlined)
            }}>
                {windowDimensions.width <= theme.breakpoints.tablet && <div style={{position: 'relative'}}>
                    
                    <Banner variant={variant} theme={theme} bannerComponent={bannerComponentMobile == null ? bannerComponent : bannerComponentMobile} bannerCta={bannerCtaMobile == "" ? bannerCta : bannerCtaMobile} bannerEnableDismiss={bannerEnableDismiss} bannerText={bannerTextMobile == "" ? bannerText : bannerTextMobile} onBannerCtaPressed={onBannerCtaPressed} showBanner={showBanner} stylesBannerContainer={stylesBannerContainer} stylesBannerCta={stylesBannerCta} stylesBannerText={stylesBannerText} classNameBannerContainer={classNameBannerContainer} classNameBannerCta={classNameBannerCta} classNameBannerText={classNameBannerText} />

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
                                onClick={() => {
                                    if(enableRouting) {
                                        if(homeMenu.component == null) 
                                        {
                                            onHomePressed()
                                        } else {
                                            const interfaceNavigate : InterfaceNavigate = {
                                                link: homeMenu.link,
                                                component: homeMenu.component,
                                                args: null
                                            };
                                            navigateTo(interfaceNavigate);
                                        }
                                    } else {
                                        onHomePressed()
                                    }
                                }}
                                style={{
                                    cursor: 'pointer',
                                    height: (parseInt(theme.dimensions.navHeight) * 8)/10 + 'px',
                                    paddingRight: theme.spaces.ltl + 'px',
                                    ...stylesBrandLogo
                                }}/>}
                                {brand != "" && <div 
                                onClick={() => {
                                    if(enableRouting) {
                                        if(homeMenu.component == null) 
                                        {
                                            onHomePressed()
                                        } else {
                                            const interfaceNavigate : InterfaceNavigate = {
                                                link: homeMenu.link,
                                                component: homeMenu.component,
                                                args: null
                                            };
                                            navigateTo(interfaceNavigate);
                                        }
                                    } else {
                                        onHomePressed();
                                    }
                                }}
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
                            
                            {showSignIn && <SfButton className={'btn_signin_portrait ' + classNameSignIn} styles={{marginRight: theme.spaces.ltl + 'px', height: '30px', fontSize: '90%',  ...stylesSignIn}} variant={variant == theme.variants.dark ? theme.variants.light : variant == theme.variants.light ? theme.variants.dark : variant} type={theme.types.filled} caption={signInCaption} onClick={(event) => {onSignInPressed(); event.stopPropagation()}} />}

                            {showNotification && <div className={'btn_notif_icon ' + classNameNotificationIcon} style={{display: 'flex', marginRight: theme.spaces.ltl + 'px', alignItems: 'center', ...stylesNotificationIcon}} onClick={(e) => {toggleNotificationMenu(); e.stopPropagation()}}><div>{notificationIcon != null ? notificationIcon : "🔔"}</div>{notificationListContainsUnRead() && <div className={classNameNotificationBadge} style={{fontSize: '70%', width: '10px', height: '10px', backgroundColor: 'red', color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', marginBottom: '15px', marginLeft: '-8px', fontWeight: '800', ...stylesNotificationBadge}}><div>0</div></div>}</div>}

                            {showSearch && <span style={{fontWeight: '800'}}><b>{optionsIcon == null ? '⋮' : optionsIcon}</b></span>}
                        
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
                                zIndex: '198'
                            }} onClick={() => {toggleDropdownExpandedWrap(-1); toggleLeftMenu()}}>
                            </div>

                            {
                                menu.map((element: any, key: any) => {

                                    if(Object.prototype.toString.call(element) === '[object Array]') {
                                        
                                        return (
                                            <div key={key} style={{
                                                position: 'relative',
                                                zIndex: '199',
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
                                                    zIndex: '199',
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
                                                    zIndex: '199',
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
                                                                }} key={key1} variant={variant} type="filled" caption={item.caption} onClick={() => { toggleDropdownExpandedWrap(-1); setShowLeftMenu(false); clickMenu(item.link, item.component)}}/>
                                                            )

                                                        })
                                                    }
                                                </div>}

                                            </div>
                                        );

                                    } else {

                                        return (
                                            <div key={key} style={{
                                                zIndex: '199',
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
                                                    zIndex: '199',
                                                    ...stylesMenuMobile
                                                    }} key={key} variant={variant} type="filled" caption={element.caption} onClick={() => {toggleDropdownExpandedWrap(-1); setShowLeftMenu(false); clickMenu(element.link, element.component)}}/>
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
                                zIndex: '198'
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
                                zIndex: '199',
                                ...stylesContainerRightMenu
                            }}>

                                {showSearch && <SfInput classNameContainer={classNameSearchContainer} classNameInput={classNameSearchInput} stylesContainer={stylesSearchContainer} stylesInput={stylesSearchInput} variant={variant == theme.variants.dark ? theme.variants.light : variant == theme.variants.light ? theme.variants.dark : variant} caption={searchCaption} icon={searchIcon != null ? searchIcon : null} inputType={theme.inputTypes.name} onComplete={(value) => {setSearchString(value)}} onEnterPressed={() => {toggleRightMenu(); onSearchPressed(searchString)}} />}
                                
                            </div>

                        </div>}

                        {showNotificationMenu && <NotificationMenu variant={variant} theme={theme} notificationList={notificationList}  toggleNotificationMenu={toggleNotificationMenu} onViewAllNotificationsClicked={onClickNotificationViewAll} onNotificationClicked={onClickNotification} stylesNotificationListContainer={stylesNotificationListContainer} stylesNotificationRead={stylesNotificationRead} stylesNotificationUnRead={stylesNotificationUnRead} classNameNotificationListContainer={classNameNotificationListContainer} classNameNotificationRead={classNameNotificationRead} classNameNotificationUnRead={classNameNotificationUnRead} stylesNotificationViewAll={stylesNotificationViewAll} classNameNotificationViewAll={classNameNotificationViewAll} />}

                    </div>

                </div>}
                {windowDimensions.width > theme.breakpoints.tablet && 
                <div>
                    <Banner variant={variant} theme={theme} bannerComponent={bannerComponent} bannerCta={bannerCta} bannerEnableDismiss={bannerEnableDismiss} bannerText={bannerText} onBannerCtaPressed={onBannerCtaPressed} showBanner={showBanner} stylesBannerContainer={stylesBannerContainer} stylesBannerCta={stylesBannerCta} stylesBannerText={stylesBannerText} classNameBannerContainer={classNameBannerContainer} classNameBannerCta={classNameBannerCta} classNameBannerText={classNameBannerText} />
                    <div 
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
                            onClick={() => {
                                if(enableRouting) {
                                    if(homeMenu.component == null) 
                                    {
                                        onHomePressed()
                                    } else {
                                        const interfaceNavigate : InterfaceNavigate = {
                                            link: homeMenu.link,
                                            component: homeMenu.component,
                                            args: null
                                        };
                                        navigateTo(interfaceNavigate);
                                    }
                                } else {
                                    onHomePressed();
                                }
                            }}
                            
                            style={{
                                cursor: 'pointer',
                                height: (parseInt(theme.dimensions.navHeight) * 10)/10 + 'px',
                                paddingRight: theme.spaces.ltl + 'px',
                                ...stylesBrandLogo
                            }}/>}
                            {brand != "" && <div 
                            className={'nav_brand ' + classNameBrand}
                            onClick={() => {
                                if(enableRouting) {
                                    if(homeMenu.component == null) 
                                    {
                                        onHomePressed()
                                    } else {
                                        const interfaceNavigate : InterfaceNavigate = {
                                            link: homeMenu.link,
                                            component: homeMenu.component,
                                            args: null
                                        };
                                        navigateTo(interfaceNavigate);
                                    }
                                } else {
                                    onHomePressed();
                                }
                            }}
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
                                                            zIndex: '198'
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
                                                                        zIndex: '199',
                                                                        width: theme.dimensions.menuWidth + 'px',
                                                                        ...stylesSubMenu
                                                                    }} key={key1} variant={variant} type="filled" caption={item.caption} onClick={() => {toggleDropdownExpandedWrap(key); clickMenu(item.link, item.component)}}/>
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
                                                clickMenu(element.link, element.component);
                                            }}>{element.caption}</div>
                                        )
                                    }

                                })
                            }
                        </div>
                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            {showSearch && <SfInput classNameContainer={classNameSearchContainer} classNameInput={classNameSearchInput} stylesContainer={{...stylesSearchContainer}} stylesInput={stylesSearchInput} variant={variant == theme.variants.dark ? theme.variants.light : variant == theme.variants.light ? theme.variants.dark : variant} caption={searchCaption} icon={searchIcon != null ? searchIcon : null} inputType={theme.inputTypes.name} onComplete={(value) => {setSearchString(value)}} onEnterPressed={() => {onSearchPressed(searchString)}} />}
                            {showSignIn && <SfButton className={'nav_signin_button ' + classNameSignIn} styles={{height: '30px', fontSize: '90%', marginLeft: theme.spaces.mod + 'px', ...stylesSignIn}} variant={variant == theme.variants.dark ? theme.variants.light : variant == theme.variants.light ? theme.variants.dark : variant} type={theme.types.filled} caption={signInCaption} onClick={() => {onSignInPressed()}} />}
                            {showNotification && <div className={'btn_notif_icon ' + classNameNotificationIcon} style={{display: 'flex', marginLeft: theme.spaces.mod + 'px', alignItems: 'center', cursor: 'pointer', ...stylesNotificationIcon}} onClick={(e) => {toggleNotificationMenu(); e.stopPropagation()}}><div>{notificationIcon != null ? notificationIcon : "🔔"}</div>{notificationListContainsUnRead() && <div className={classNameNotificationBadge} style={{fontSize: '70%', width: '10px', height: '10px', backgroundColor: 'red', color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', marginBottom: '15px', marginLeft: '-8px', fontWeight: '800', ...stylesNotificationBadge}}><div>0</div></div>}</div>}
                            {showProfile && <Profile clickMenu={clickMenu} toggleExpandProfile={toggleExpandProfile} toggleProfileDropdownExpandedWrap={toggleProfileDropdownExpandedWrap} setExpandProfile={setExpandProfile} getProfileDropdownExpandedWrap={getProfileDropdownExpandedWrap } theme={theme} variant={variant} profilePicture={profilePicture} expandProfile={expandProfile} profilePreamble={profilePreamble} profileComponent={profileComponent} profileMenu={profileMenu} classNameProfilePicture={classNameProfilePicture} classNameProfilePreamble={classNameProfilePreamble} classNameProfileComponent={classNameProfileComponent} classNameMenuMobileSelected={classNameMenuMobileSelected} classNameMenuMobile={classNameMenuMobile} classNameSubMenuMobile={classNameSubMenuMobile} classNameProfilePictureContainer={classNameProfilePictureContainer} stylesProfilePreamble={stylesProfilePreamble} stylesProfileComponent={stylesProfileComponent} stylesMenuMobileSelected={stylesMenuMobileSelected} stylesMenuMobile={stylesMenuMobile} stylesSubMenuMobile={stylesSubMenuMobile} stylesProfilePicture={stylesProfilePicture} stylesProfilePictureContainer={stylesProfilePictureContainer}/>}

                            {showNotificationMenu && <NotificationMenu variant={variant} theme={theme} notificationList={notificationList}  toggleNotificationMenu={toggleNotificationMenu} onViewAllNotificationsClicked={onClickNotificationViewAll} onNotificationClicked={onClickNotification} stylesNotificationListContainer={stylesNotificationListContainer} stylesNotificationRead={stylesNotificationRead} stylesNotificationUnRead={stylesNotificationUnRead} classNameNotificationListContainer={classNameNotificationListContainer} classNameNotificationRead={classNameNotificationRead} classNameNotificationUnRead={classNameNotificationUnRead} stylesNotificationViewAll={stylesNotificationViewAll} classNameNotificationViewAll={classNameNotificationViewAll} />}

                        </div>
                    </div>
                </div>
                }
            </div>

            <ContextSfNavProvider value={interfaceSfNavProvider}>
                {(enableRouting && history.length > 0) && history[history.length - 1].component}
            </ContextSfNavProvider>
    
        </div>
    
    )

}

export default SfNav;
