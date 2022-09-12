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
  value?: any;
  onEnterPressed?: () => void;
  hint?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  mode?: string;
  theme?: any;
  icon?: React.ReactNode;
  classNameContainer?: string;
  classNameInput?: string;
  stylesContainer?: any;
  stylesInput?: any;
}

const SfInput = ({ variant, caption, inputType, onComplete, value = "", hint = "", onEnterPressed = () => {}, disabled = false, autoFocus = false, mode=Themes.getTheme().modes.day, theme = Themes.getTheme(), icon = null, classNameContainer = '', classNameInput = '', stylesContainer = {}, stylesInput = {}}: Props) => {


    const [borderColor, setBorderColor] = useState('none');
    const [textColor, setTextColor] = useState('none');
    const [showCountryCodes, setShowCountryCodes] = useState(false);
    const [ipType, setIpType] = useState('text');
    const [countryCodes, setCountryCodes] = useState('[]');
    const [countryCodesSearchString, setCountryCodesSearchString] = useState('');
    const [selectedCountryCode, setSelectedCountryCode] = useState('{}')
    const [prefillLoaded, setPrefillLoaded] = useState(false);

    const [dd, setDD] = useState('');
    const [mm, setMM] = useState('');
    const [yyyy, setYYYY] = useState('');
    const [lastKey, setLastKey] = useState('');

    const refInput = useRef<any>();
    const refInputDD = useRef<any>();
    const refInputMM = useRef<any>();
    const refInputYYYY = useRef<any>();

    function setShowCountryCodesWrap(value: boolean) {
        setTimeout(() => { setShowCountryCodes(value) }, 200);
    }

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
        if(inputType == Themes.getTheme().inputTypes.name) {
            setIpType("text");
        }
        if(inputType == Themes.getTheme().inputTypes.email) {
            setIpType("email");
        }
        if(inputType == Themes.getTheme().inputTypes.mobile) {
            setIpType("number");
        }
        if(inputType == Themes.getTheme().inputTypes.dateOfBirth) {
            setIpType("number");
        }
    }

    function resetFocus() {
        if(autoFocus) {
            if(Themes.getTheme().inputTypes.dateOfBirth == inputType) {
                refInputDD.current!.focus();
            } else {
                refInput.current!.focus();
            }
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
            setShowCountryCodesWrap(false)
        } else {
            setShowCountryCodesWrap(true)
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

        if(inputType == Themes.getTheme().inputTypes.dateOfBirth) {
            if(Util.validateDDMMYYYY(dd, mm, yyyy)) {
                const dateVal = parseInt((Date.parse(yyyy + "-" + mm + "-" + dd)/1000) + "");
                onComplete(dateVal + "");
                if(lastKey == "Enter") onEnterPressed(); 
                resetColors();
            } else {
                if(dd == "" && mm == "" && yyyy == "") {
                    resetColors();
                } else {
                    setBorderColor(Themes.getTheme().colors.dangerBgColor);
                }
                onComplete("");
            }
        }

    }

    const onKeyUpDD = (event: any) => {
        setLastKey(event.key);
        setDD(event.target.value + "");
        onKeyUp(event);
    }

    const onKeyUpMM = (event: any) => {
        setLastKey(event.key);
        setMM(event.target.value + "");
        onKeyUp(event);
    }

    const onKeyUpYYYY = (event: any) => {
        setLastKey(event.key);
        setYYYY(event.target.value + "");
        onKeyUp(event);
    }

    React.useEffect(() => {
        if(inputType == Themes.getTheme().inputTypes.dateOfBirth) {
            onKeyUp(null);
        }
    },[dd, mm, yyyy])

    React.useEffect(() => {

        if(!prefillLoaded) {
            if(value.isd != null) {
                for(var i = 0; i < getCountryCodesWrap().length; i++) {
                    if(value.isd == getCountryCodesWrap()[i].dialCode) {
                        setSelectedCountryCodeWrap(getCountryCodesWrap()[i]);
                        setPrefillLoaded(true);
                        break;
                    }
                }
            }
        }


    }, [countryCodes])

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
            setShowCountryCodesWrap(false);
            onSubmitCountryCode();

        }

    }, [selectedCountryCode])

    React.useEffect(() => {

        populateCountryCodes();
        
    }, [countryCodesSearchString])

    return (
        <div
            className={`sf_input ${classNameContainer}`}
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
                ...stylesContainer
            }} >
                {icon != null && icon}
                {icon != null && <span>&nbsp;&nbsp;</span>}
                <span className='sf_input_caption' onClick={() => {setFocus()}}>{caption}</span>
                <span>&nbsp;&nbsp;&nbsp;</span>
                {inputType == Themes.getTheme().inputTypes.mobile && <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <SfButton variant={variant} type={'filled'} caption={selectedCountryCode == "{}" ? (showCountryCodes ? "ISD ▲" : "ISD ▼") : getSelectedCountryCodeWrap().dialCode + " " + getSelectedCountryCodeWrap().emoji  + " " + (showCountryCodes ? "▲" : "")} onClick={() => {onClickIsd()}} styles={{cursor: 'pointer', fontSize: '70%', marginRight: Themes.getTheme().spaces.ltl + 'px'}} disabled={disabled} />
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
                                }} disabled={disabled}/>
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
                {inputType == Themes.getTheme().inputTypes.dateOfBirth && <div style={{
                    flexGrow: "1",
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <input className={`sf_input_${inputType}_dd ${classNameInput}`} 
                        ref={refInputDD} 
                        style={{
                            width: '50px',
                            margin: '0',
                            borderLeft: 'none',
                            borderTop: 'none',
                            borderRight: 'none',
                            borderBottom: 'none',
                            marginRight: Themes.getTheme().spaces.min + 'px',
                            borderRadius: Themes.getTheme().spaces.min + 'px',
                            textAlign: 'center',
                            ...stylesInput
                        }} 
                        onKeyUp={onKeyUpDD} 
                        type={ipType}
                        placeholder={"DD"}
                        disabled={disabled}
                        defaultValue={value.dd} />
                    <input className={`sf_input_${inputType}_mm ${classNameInput}`}
                        ref={refInputMM}  
                        style={{
                            width: '50px',
                            margin: '0',
                            borderLeft: 'none',
                            borderTop: 'none',
                            borderRight: 'none',
                            borderBottom: 'none',
                            marginRight: Themes.getTheme().spaces.min + 'px',
                            borderRadius: Themes.getTheme().spaces.min + 'px',
                            textAlign: 'center',
                            ...stylesInput
                        }} 
                        onKeyUp={onKeyUpMM} 
                        type={ipType}
                        placeholder={"MM"}
                        disabled={disabled}
                        defaultValue={value.mm} />
                    <input className={`sf_input_${inputType}_yyyy ${classNameInput}`}
                        ref={refInputYYYY} 
                        style={{
                            width: '80px',
                            margin: '0',
                            borderLeft: 'none',
                            borderTop: 'none',
                            borderRight: 'none',
                            borderBottom: 'none',
                            textAlign: 'center',
                            borderRadius: Themes.getTheme().spaces.min + 'px',
                            ...stylesInput
                        }} 
                        onKeyUp={onKeyUpYYYY} 
                        type={ipType}
                        placeholder={"YYYY"}
                        disabled={disabled}
                        defaultValue={value.yyyy} />
                </div>}
                {inputType != Themes.getTheme().inputTypes.dateOfBirth && <input 
                    className={`sf_input_${inputType} ${classNameInput}`}
                    ref={refInput} 
                    style={{
                        flexGrow: '1',
                        margin: '0',
                        borderLeft: 'none',
                        borderTop: 'none',
                        borderRight: 'none',
                        borderBottom: 'none',
                        paddingLeft: Themes.getTheme().spaces.ltl + 'px',
                        borderRadius: Themes.getTheme().spaces.min + 'px',
                        ...stylesInput
                        }} 
                    type={ipType} 
                    onKeyUp={(event) => {onKeyUp(event)}}
                    placeholder={hint}
                    disabled={disabled}
                    defaultValue={inputType != Themes.getTheme().inputTypes.mobile ? value : value.number} />}
        </div>
    )

}

export default SfInput;
