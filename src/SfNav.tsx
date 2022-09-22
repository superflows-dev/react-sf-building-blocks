import * as React from 'react'
import { useState } from "react";
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
    optionsIcon?: any;
    showSearch?: boolean;
    showSignIn?: boolean;
    searchCaption?: string;
    searchIcon?: any;
    stylesBrand? : any;
    stylesBrandLogo? : any;
    stylesSignIn?: any;
    stylesSearchContainer?: any;
    stylesSearchInput?: any;
    stylesContainerDesktop?: any;
    stylesContainerMobile?: any;
    stylesContainerRightMenu?: any;
    onHomePressed?: () => void;
    onSearchPressed?: (value: string) => void;
    onSignInPressed?: () => void;
    onMenuClicked?: (value: string) => void;
}

const SfNav = ({variant = Themes.getTheme().variants.primary, theme = Themes.getTheme(), brand = Constants.DEFAULT_BRAND_NAME, stylesBrand = {}, brandLogo = Constants.DEFAULT_BRAND_ICON, stylesBrandLogo = {}, menu = Constants.DEFAULT_MENU, showSearch = true, showSignIn = true, onMenuClicked = () => {}, onHomePressed = () => {}, onSearchPressed = () => {}, onSignInPressed = () => {}, searchCaption = "Search", searchIcon = null, menuIcon = null, optionsIcon = null, stylesSignIn = {}, stylesSearchContainer = {}, stylesSearchInput = {}, stylesContainerDesktop = {}, stylesContainerMobile = {}, stylesContainerRightMenu = {}}: Props) => {

    const [searchString, setSearchString] = useState('');
    const [dropdownExpanded, setDropdownExpanded] = useState('[]');
    const [showLeftMenu, setShowLeftMenu] = useState(false);
    const [showRightMenu, setShowRightMenu] = useState(false);

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

    
    return (
        <div style={{
            color: Util.getTextColor(theme, variant, Themes.getTheme().types.outlined)
        }}>
            {Util.getWindowDimensions().height > Util.getWindowDimensions().width && <div style={{position: 'relative'}}>
                
                <div style={{
                    position: 'relative',
                    height: Themes.getTheme().dimensions.navHeight + 'px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: Themes.getTheme().spaces.big + 'px',
                    paddingRight: Themes.getTheme().spaces.big + 'px',
                    ...stylesContainerMobile
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <div className='nav_left_menu' onClick={() => {toggleLeftMenu()}} style={{
                            paddingRight: Themes.getTheme().spaces.ltl + 'px',
                            fontWeight: '800'
                            }}><b>{menuIcon == null ? '☰' : menuIcon}</b></div>
                        
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '800'
                        }}>
                            {(brandLogo != null && brandLogo != "") && <img 
                            className='nav_brand_logo' 
                            src={brandLogo} 
                            onClick={() => {onHomePressed()}}
                            style={{
                                cursor: 'pointer',
                                height: (parseInt(Themes.getTheme().dimensions.navHeight) * 8)/10 + 'px',
                                paddingRight: Themes.getTheme().spaces.ltl + 'px',
                                ...stylesBrandLogo
                            }}/>}
                            {brand != "" && <div 
                            onClick={() => {onHomePressed()}}
                            className='nav_brand' 
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
                            paddingLeft: Themes.getTheme().spaces.ltl + 'px',
                            fontWeight: '800'
                            }}><b>{optionsIcon == null ? '⋮' : optionsIcon}</b>
                    </div>

                </div>

                {showLeftMenu && <div className='nav_div_left_menu' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    position: 'absolute',
                    left: Themes.getTheme().spaces.ltl + 'px',
                    top: (parseInt(Themes.getTheme().dimensions.navHeight)) + 'px',
                }}>
                    
                    <div className='nav_div_left_menu_overlay' style={{
                        position: 'fixed',
                        left: '0px',
                        top: '0px',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'transparent',
                        zIndex: '1998'
                    }} onClick={() => {toggleDropdownExpandedWrap(-1); toggleLeftMenu()}}>
                    </div>

                    {
                        menu.map((element: any, key: any) => {

                            if(Object.prototype.toString.call(element) === '[object Array]') {
                                
                                return (
                                    <div key={key} style={{
                                        position: 'relative',
                                        zIndex: '1999'
                                    }}>
                                        {getDropdownExpandedWrap()[key] && <SfButton className={'nav_left_menu_' + key + '_expanded'} styles={{
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
                                            }} variant={variant} type="outlined" caption={element[0].caption + (!getDropdownExpandedWrap()[key] ? ' ▸' : ' ▸')}  onClick={() => {toggleDropdownExpandedWrap(key)}}/>}

                                        {!getDropdownExpandedWrap()[key] && <SfButton className={'nav_left_menu_' + key + '_collapsed'} styles={{
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
                                            zIndex: '1999'
                                            }} variant={variant} type="filled" caption={element[0].caption + (!getDropdownExpandedWrap()[key] ? ' ▸' : ' ▸')}  onClick={() => {toggleDropdownExpandedWrap(key)}}/>}

                                        {getDropdownExpandedWrap()[key] && <div style={{
                                            flexDirection: 'column',
                                            position: 'absolute',
                                            left: '105%',
                                            top: '0px',
                                            display: 'flex',
                                            alignItems: 'stretch',
                                            zIndex: '1999'
                                        }}>
                                            {
                                                element.map((item: any, key1: any) => {

                                                    return (
                                                        <SfButton  className={'nav_left_menu_' + key + '_' + key1} styles={{
                                                            borderTopLeftRadius: key1 === 0 ? '5px' : '0px',
                                                            borderTopRightRadius: key1 === 0 ? '5px' : '0px',
                                                            borderBottomLeftRadius: key1 === element.length - 1 ? '5px' : '0px',
                                                            borderBottomRightRadius: key1 === element.length - 1 ? '5px' : '0px',
                                                            fontWeight: '400',
                                                            marginTop: '-2px',
                                                            cursor:  'pointer',
                                                            justifyContent: 'flex-start',
                                                            boxShadow: key1 === element.length - 1 ? '0px 2px 2px #aaa' : 'none'
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
                                        zIndex: '1999'
                                    }}>
                                        <SfButton  className={'nav_left_menu_' + key} styles={{
                                            width: '100%',
                                            borderTopLeftRadius: key === 0 ? '5px' : '0px',
                                            borderTopRightRadius: key === 0 ? '5px' : '0px',
                                            borderBottomLeftRadius: key === menu.length - 1 ? '5px' : '0px',
                                            borderBottomRightRadius: key === menu.length - 1 ? '5px' : '0px',
                                            fontWeight: '400',
                                            marginTop: '-2px',
                                            cursor:  'pointer',
                                            justifyContent: 'flex-start',
                                            zIndex: '1999'
                                            }} key={key} variant={variant} type="filled" caption={element.caption} onClick={() => {toggleDropdownExpandedWrap(-1); setShowLeftMenu(false); clickMenu(element.link)}}/>
                                    </div>
                                );

                            }

                        })
                    }
                </div>} 

                {showRightMenu && <div className='nav_div_right_menu' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    position: 'absolute',
                    right: Themes.getTheme().spaces.ltl + 'px',
                    top: (parseInt(Themes.getTheme().dimensions.navHeight)) + 'px',
                }}>
                    <div className='nav_div_right_menu_overlay' style={{
                        position: 'fixed',
                        left: '0px',
                        top: '0px',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'transparent',
                        zIndex: '1998'
                    }} onClick={() => {toggleRightMenu()}}>
                    </div>

                    <div style={{
                        flexDirection: 'column',
                        display: 'flex',
                        alignItems: 'stretch',
                        border: 'solid 1px' + Util.getBorderColor(theme, variant, "outlined"),
                        backgroundColor: Util.getTextColor(theme, variant, "filled"),
                        borderRadius: parseInt(Themes.getTheme().spaces.min) + 'px',
                        padding: parseInt(Themes.getTheme().spaces.min) + 'px',
                        zIndex: '1999',
                        ...stylesContainerRightMenu
                    }}>

                        {showSearch && <SfInput stylesContainer={stylesSearchContainer} stylesInput={stylesSearchInput} variant={variant} caption={searchCaption} icon={searchIcon != null ? searchIcon : null} inputType={Themes.getTheme().inputTypes.name} onComplete={(value) => {setSearchString(value)}} onEnterPressed={() => {toggleRightMenu(); onSearchPressed(searchString)}} />}
                        {showSignIn && <SfButton className='btn_signin_portrait' styles={{height: '40px', fontSize: '90%', marginTop: Themes.getTheme().spaces.min + 'px', ...stylesSignIn}} variant={variant} type={Themes.getTheme().types.filled} caption="Sign In" onClick={() => {toggleRightMenu(); onSignInPressed();}} />}
                        
                    </div>

                </div>}

            </div>}
            {Util.getWindowDimensions().height < Util.getWindowDimensions().width && <div style={{
                height: Themes.getTheme().dimensions.navHeight + 'px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: Themes.getTheme().spaces.big + 'px',
                paddingRight: Themes.getTheme().spaces.big + 'px',
                ...stylesContainerDesktop
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                     {(brandLogo != null && brandLogo != "") && <img 
                     className='nav_brand_logo'
                     src={brandLogo} 
                     onClick={() => {onHomePressed()}}
                     style={{
                        cursor: 'pointer',
                        height: (parseInt(Themes.getTheme().dimensions.navHeight) * 10)/10 + 'px',
                        paddingRight: Themes.getTheme().spaces.ltl + 'px',
                        ...stylesBrandLogo
                    }}/>}
                    {brand != "" && <div className='nav_brand' 
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
                                        marginLeft: Themes.getTheme().spaces.big + 'px',
                                        cursor: 'pointer',
                                    }}>
                                        <div className={'nav_menu_'+key} style={{display: 'flex', alignItems: 'center'}} onClick={() => {toggleDropdownExpandedWrap(key)}}>{element[0].caption}&nbsp;<small><small>{!getDropdownExpandedWrap()[key] && '▼'}{getDropdownExpandedWrap()[key] && '▲'}</small></small></div>
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
                                                    zIndex: '1998'
                                                }} onClick={() => {toggleDropdownExpandedWrap(key)}}>
                                                </div>
                                                {
                                                    element.map((item: any, key1: any) => {

                                                        return (
                                                            <SfButton className={'nav_menu_' + key + '_' + key1} styles={{
                                                                borderTopLeftRadius: key1 === 0 ? '5px' : '0px',
                                                                borderTopRightRadius: key1 === 0 ? '5px' : '0px',
                                                                borderBottomLeftRadius: key1 === element.length - 1 ? '5px' : '0px',
                                                                borderBottomRightRadius: key1 === element.length - 1 ? '5px' : '0px',
                                                                fontWeight: '400',
                                                                marginTop: '-2px',
                                                                cursor:  'pointer',
                                                                zIndex: '1999'
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
                                    <div className={'nav_menu_' + key} key={key} style={{
                                        cursor: 'pointer',
                                        fontWeight: '500',
                                        marginLeft: Themes.getTheme().spaces.big + 'px',
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
                    {showSearch && <SfInput stylesContainer={stylesSearchContainer} stylesInput={stylesSearchInput} variant={variant} caption={searchCaption} icon={searchIcon != null ? searchIcon : null} inputType={Themes.getTheme().inputTypes.name} onComplete={(value) => {setSearchString(value)}} onEnterPressed={() => {onSearchPressed(searchString)}} />}
                    {showSignIn && <SfButton className='nav_signin_button' styles={{height: '40px', fontSize: '90%', marginLeft: Themes.getTheme().spaces.mod + 'px', ...stylesSignIn}} variant={variant} type={Themes.getTheme().types.filled} caption="Sign In" onClick={() => {onSignInPressed()}} />}
                </div>
            </div>}
        </div>
    )

}

export default SfNav;
