import * as React from 'react'
import { useState, useRef } from "react";
import Themes from 'react-sf-themes';
import SfButton from './SfButton';
import Services from './Services';
import Util from './Util';

interface Props {
  variant: string;
  caption: string;
  inputType: string;
  onComplete: (value: string) => void;
  value?: string;
  onEnterPressed?: () => void;
  hint?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  mode?: string;
  theme?: any;
  icon?: React.ReactNode;
  className?: string;
  styles?: any;
}

const SfInput = ({ variant, caption, inputType, onComplete, value = "", hint = "", onEnterPressed = () => {}, disabled = false, autoFocus = false, mode=Themes.getTheme().modes.day, theme = Themes.getTheme(), icon = null, className = '', styles = {}}: Props) => {


    const [borderColor, setBorderColor] = useState('none');
    const [textColor, setTextColor] = useState('none');
    const [showCountryCodes, setShowCountryCodes] = useState(false);
    const [ipType, setIpType] = useState('text');
    const [countryCodes, setCountryCodes] = useState('[]');
    const [countryCodesSearchString, setCountryCodesSearchString] = useState('');
    const [selectedCountryCode, setSelectedCountryCode] = useState('{}')

    const refInput = useRef<any>();

    function setSelectedCountryCodeWrap(value: any) {
        setSelectedCountryCode(JSON.stringify(value));
    }

    function getSelectedCountryCodeWrap() {
        return JSON.parse(selectedCountryCode);
    }

    function setCountryCodesWrap(value: any) {
        setCountryCodes(JSON.stringify(value))
    }

    function getCountryCodesWrap() {
        return JSON.parse(countryCodes);
    }


    function resetColors() {

        if(mode == Themes.getTheme().modes.day) {
            setBorderColor(Util.shadeColor(Util.getBorderColor(theme, variant, Themes.getTheme().types.outlined), 140));
            setTextColor(Util.getTextColor(theme, variant, Themes.getTheme().types.outlined));    
        } else {
            setBorderColor(Util.getBorderColor(theme, variant, Themes.getTheme().types.outlined));
            setTextColor(Util.shadeColor(Util.getTextColor(theme, variant, Themes.getTheme().types.outlined), 140));    
        }
        
    }

    function resetType() {
        if(inputType == "name") {
            setIpType("text");
        }
    }

    function resetFocus() {
        if(autoFocus) {
            refInput.current!.focus();
        }
    }

    async function populateCountryCodes() {

        const result = await Services.getCountryCodes();
        const arr = [];

        for(var i = 0; i < result.length; i++) {

            if(result[i].name.toLowerCase().indexOf(countryCodesSearchString.toLowerCase()) >= 0) {
                arr.push(result[i]);
            }

        }

        setCountryCodesWrap(arr);
    }

    function setFocus() {

        refInput.current!.focus();
    }

    function onClickIsd() {

        if(showCountryCodes) {
            setShowCountryCodes(false)
        } else {
            setShowCountryCodes(true)
        }

    }

    function onChangeCountryCodesSearchString(e:any) {
        setCountryCodesSearchString(e.target.value);
    }

    function onSubmitCountryCode() {

        if(Util.validateMobile(refInput.current.value) && selectedCountryCode != "{}") {
            onComplete(JSON.stringify({isd: getSelectedCountryCodeWrap().dialCode, number: refInput.current.value}));
            resetColors();
        } else {
            setBorderColor(Themes.getTheme().colors.dangerBgColor);
            onComplete('');
        }

    }

    const onKeyUp = (event: any) => {

        if(inputType == Themes.getTheme().inputTypes.name) {
            if(Util.validateName(event.target.value)) {
                onComplete(event.target.value);
                resetColors();
                if(event.key == "Enter") onEnterPressed(); 
            } else {
                setBorderColor(Themes.getTheme().colors.dangerBgColor);
                onComplete('');
            }
        }

        if(inputType == Themes.getTheme().inputTypes.email) {
            if(Util.validateEmail(event.target.value)) {
                onComplete(event.target.value);
                resetColors();
                if(event.key == "Enter") onEnterPressed(); 
            } else {
                setBorderColor(Themes.getTheme().colors.dangerBgColor);
                onComplete('');
            }
        }

        if(inputType == Themes.getTheme().inputTypes.mobile) {
            if(Util.validateMobile(event.target.value) && selectedCountryCode != "{}") {
                onComplete(JSON.stringify({isd: getSelectedCountryCodeWrap().dialCode, number: event.target.value}));
                resetColors();
                if(event.key == "Enter") onEnterPressed(); 
            } else {
                setBorderColor(Themes.getTheme().colors.dangerBgColor);
                onComplete('');
            }
        }

    }

    React.useEffect(() => {

        resetColors();
        resetType();    
        resetFocus();
        if(inputType == Themes.getTheme().inputTypes.mobile) {
            populateCountryCodes();
        }

    }, [])

    React.useEffect(() => {

        if(selectedCountryCode == "{}") {

        } else {

            setCountryCodesSearchString('');
            setShowCountryCodes(false);
            onSubmitCountryCode();

        }

    }, [selectedCountryCode])

    React.useEffect(() => {

        populateCountryCodes();

    }, [countryCodesSearchString])

    return (
        <div
            className={`sf_input ${className}`}
            style={{ 
                color: textColor,
                border: 'solid 1px ' + borderColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '100%',
                padding: Themes.getTheme().spaces.ltl + 'px',
                borderRadius: Themes.getTheme().spaces.min + 'px',
                filter: disabled ? 'grayscale(70%)' : 'none',
                fontWeight: '600',
                ...styles
            }} >
                {icon != null && icon}
                {icon != null && <span>&nbsp;&nbsp;</span>}
                <span className='sf_input_caption' onClick={() => {setFocus()}}>{caption}</span>
                <span>&nbsp;&nbsp;&nbsp;</span>
                {inputType == Themes.getTheme().inputTypes.mobile && <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <SfButton variant={variant} type={'filled'} caption={selectedCountryCode == "{}" ? (showCountryCodes ? "ISD ▲" : "ISD ▼") : getSelectedCountryCodeWrap().dialCode + " " + getSelectedCountryCodeWrap().emoji  + " " + (showCountryCodes ? "▲" : "")} onClick={() => {onClickIsd()}} styles={{cursor: 'pointer', fontSize: '70%', marginRight: Themes.getTheme().spaces.ltl + 'px'}} />
                    {showCountryCodes && <div style={{
                        position: 'fixed',
                        bottom: '0px',
                        left: '0px',
                        width: '100%',
                        backgroundColor: mode == Themes.getTheme().modes.day ? '#efefef' : 'black',
                        color: mode == Themes.getTheme().modes.day ? 'black' : '#ffffff',
                        textAlign: 'left',
                        boxShadow: '0px -2px 10px #dddddd',
                        zIndex: 1999
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <input 
                                className='input_search'
                                type="text" 
                                placeholder='Search' 
                                onChange={(e: any) => {onChangeCountryCodesSearchString(e)}} 
                                style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    marginLeft: Themes.getTheme().spaces.ltl + 'px',
                                    marginTop: Themes.getTheme().spaces.ltl + 'px',
                                    marginBottom: (parseInt(Themes.getTheme().spaces.ltl)*2) + 'px',
                                    borderBottom: 'solid 1px ' + (Themes.getTheme().modes.day ? '#bbbbbb' : '#333333'),
                                    flexGrow: '1'
                                }}/>
                            <SfButton className='sf_btn_countries_close' variant={variant} type={'filled'} caption={'Close ▲'} onClick={() => {onClickIsd()}} 
                                styles={{
                                    cursor: 'pointer', 
                                    fontSize: '70%', 
                                    marginRight: Themes.getTheme().spaces.ltl + 'px',
                                    marginLeft: Themes.getTheme().spaces.ltl + 'px',
                                    marginTop: Themes.getTheme().spaces.ltl + 'px',
                                    marginBottom: (parseInt(Themes.getTheme().spaces.ltl)*2) + 'px'}} />
                        </div>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            height: '200px',
                            overflowY: 'auto',
                            textAlign: 'left',
                            alignItems: 'flex-start',
                            paddingLeft: Themes.getTheme().spaces.ltl + 'px',
                            paddingRight: Themes.getTheme().spaces.ltl + 'px',
                        }}>
                        {
                            getCountryCodesWrap().map((element: any, key: any) => {

                                return (
                                    <div 
                                    className={'div_' + element.code}
                                    key={key}
                                    style={{
                                        fontSize: '80%',
                                        fontWeight: '200',
                                        cursor: 'pointer',
                                        marginRight: Themes.getTheme().spaces.ltl + 'px',
                                        marginBottom: Themes.getTheme().spaces.ltl + 'px',
                                        backgroundColor: mode == Themes.getTheme().modes.day ? '#ffffff' : '#222222',
                                        paddingLeft: Themes.getTheme().spaces.ltl + 'px',
                                        paddingRight: Themes.getTheme().spaces.ltl + 'px',
                                        borderRadius: Themes.getTheme().spaces.min + 'px'
                                    }}
                                    onClick={() => {
                                        setSelectedCountryCodeWrap(element);
                                    }}
                                    >{element.emoji}&nbsp;&nbsp;{element.name.substr(0, 20)}</div>
                                );

                            })
                        }
                        </div>
                    </div>}
                    
                    
                </div>}
                <input 
                    className={`sf_input_${inputType}`}
                    ref={refInput} 
                    style={{
                        flexGrow: '1',
                        margin: '0',
                        borderLeft: 'none',
                        borderTop: 'none',
                        borderRight: 'none',
                        borderBottom: 'none',
                        paddingLeft: Themes.getTheme().spaces.ltl + 'px'
                        }} 
                    type={ipType} 
                    onKeyUp={onKeyUp}
                    placeholder={hint}
                    disabled={disabled}
                    defaultValue={value} />
        </div>
    )

}

export default SfInput;
