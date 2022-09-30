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
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [ipType, setIpType] = useState('text');
    const [countryCodes, setCountryCodes] = useState('[]');
    const [countryCodesSearchString, setCountryCodesSearchString] = useState('');
    const [selectedCountryCode, setSelectedCountryCode] = useState('{}')
    const [prefillLoaded, setPrefillLoaded] = useState(false);

    const [dd, setDD] = useState('');
    const [mm, setMM] = useState('');
    const [yyyy, setYYYY] = useState('');
    const [lastKey, setLastKey] = useState('');

    const [selectedYYYY, setSelectedYYYY] = useState(new Date().getFullYear());
    const [selectedMM, setSelectedMM] = useState(1);
    const [selectedDD, setSelectedDD] = useState(1);

    const refInput = useRef<any>();
    const refInputDD = useRef<any>();
    const refInputMM = useRef<any>();
    const refInputYYYY = useRef<any>();

    const arrYears = [];
    const arrMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const mounted = useRef(false);


    function setShowDatePickerWrap(value: boolean) {
        if(mounted.current) {
            setTimeout(() => {
                setShowDatePicker(value)
            }, 500);
        }
    }

    function setSelectedMMWrap(value: number) {
        if(mounted.current) {
            setSelectedMM(value);
            setSelectedDDWrap(0);
            if(value > 0) {
                refInputMM.current.value = value;
            } else {
                refInputMM.current.value = "";
            }
            refInputYYYY.current.value = selectedYYYY;
        }
    }

    function setSelectedYYYYWrap(value: number) {
        if(mounted.current) {
            setSelectedYYYY(value);
            setSelectedMMWrap(0);
            //setSelectedDDWrap(0);
            if(value > 0) {
                refInputYYYY.current.value = value;
            }
        }
    }

    function setSelectedDDWrap(value: number) {
        if(mounted.current) {
            setSelectedDD(value);
            if(value > 0) {
                refInputDD.current.value = value;
            } else {
                refInputDD.current.value = "";
            }
            refInputMM.current.value = selectedMM;
            refInputYYYY.current.value = selectedYYYY;
        }
    }

    for(let i = new Date().getFullYear(); i >= 1960; i--) {
        arrYears.push(i);
    }


    function setShowCountryCodesWrap(value: boolean) {
        if(mounted.current) {
            setTimeout(() => { setShowCountryCodes(value) }, 200);
        }
    }

    function setSelectedCountryCodeWrap(value: any) {
        if(mounted.current) {
            setSelectedCountryCode(JSON.stringify(value));
        }
    }

    function getSelectedCountryCodeWrap() {
        return JSON.parse(selectedCountryCode);
    }

    function setCountryCodesWrap(value: any) {
        if(mounted.current) {
            setCountryCodes(JSON.stringify(value))
        }
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
            if(inputType == Themes.getTheme().inputTypes.date) {
                setIpType("number");
            }
    }

    function resetFocus() {
        if(autoFocus) {
            if(Themes.getTheme().inputTypes.dateOfBirth == inputType 
            || Themes.getTheme().inputTypes.date == inputType) {
                refInputDD.current!.focus();
            } else {
                refInput.current!.focus();
            }
        }
    }

    async function populateCountryCodes() {

        if(mounted.current) {

            const result = await Services.getCountryCodes();
            const arr = [];

            for(var i = 0; i < result.length; i++) {

                if(result[i].name.toLowerCase().indexOf(countryCodesSearchString.toLowerCase()) >= 0) {
                    arr.push(result[i]);
                }

            }

            setCountryCodesWrap(arr);
        }
    }

    function setFocus() {

        refInput.current!.focus();
    }

    function onClickIsd() {

        if(mounted.current) {
            if(showCountryCodes) {
                setShowCountryCodesWrap(false)
            } else {
                setShowCountryCodesWrap(true)
            }
        }
    }

    function onChangeCountryCodesSearchString(e:any) {
        if(mounted.current) {
            setCountryCodesSearchString(e.target.value);
        }
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

        if(mounted.current) {
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

    }

    const onKeyUpDD = (event: any) => {
        if(mounted.current) {
            setLastKey(event.key);
            setDD(event.target.value + "");
            onKeyUp(event);
        }
    }

    const onKeyUpMM = (event: any) => {
        if(mounted.current) {
            setLastKey(event.key);
            setMM(event.target.value + "");
            onKeyUp(event);
        }
    }

    const onKeyUpYYYY = (event: any) => {
        if(mounted.current) {
            setLastKey(event.key);
            setYYYY(event.target.value + "");
            onKeyUp(event);
        }
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

        if(inputType == Themes.getTheme().inputTypes.date) {
            if(value.dd != null) {
                setSelectedDD(parseInt(value.dd + ""));
            }
            if(value.mm != null) {
                setSelectedMM(parseInt(value.mm + ""));
            }
            if(value.yyyy != null) {
                setSelectedYYYY(parseInt(value.yyyy + ""));
            }
        }

    }, [])

    React.useEffect(() => {
        mounted.current = true;

        return () => {
            mounted.current = false;
        };
    }, []);

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
                {(inputType == Themes.getTheme().inputTypes.dateOfBirth || inputType == Themes.getTheme().inputTypes.date) && <div style={{
                    flexGrow: "1",
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <input className={`sf_input_${inputType}_dd ${classNameInput}`} 
                        onClick={() => {if(inputType == Themes.getTheme().inputTypes.date) {setShowDatePickerWrap(true)}}}
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
                        readOnly={inputType == Themes.getTheme().inputTypes.date ? true : false}
                        defaultValue={value.dd} />
                    <input className={`sf_input_${inputType}_mm ${classNameInput}`}
                        onClick={() => {if(inputType == Themes.getTheme().inputTypes.date) {setShowDatePickerWrap(true)}}}
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
                        readOnly={inputType == Themes.getTheme().inputTypes.date ? true : false}
                        defaultValue={value.mm} />
                    <input className={`sf_input_${inputType}_yyyy ${classNameInput}`}
                        onClick={() => {if(inputType == Themes.getTheme().inputTypes.date) {setShowDatePickerWrap(true)}}}
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
                        readOnly={inputType == Themes.getTheme().inputTypes.date ? true : false}
                        defaultValue={value.yyyy} />
                    {showDatePicker && <div className="sf_input_date_picker" style={{
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
                            textAlign: 'center',
                            alignItems: 'center',
                            marginBottom: Themes.getTheme().spaces.ltl + 'px',
                        }}>
                            <SfButton 
                                styles={{
                                    visibility: 'hidden',
                                    marginLeft: Themes.getTheme().spaces.ltl + 'px',
                                    marginTop: Themes.getTheme().spaces.ltl + 'px',
                                }}
                                className='sf_btn_date_close' variant={variant} type={'filled'} caption={'▲'} onClick={() => {}} />
                            <div style={{
                                display: 'flex'
                            }}>
                                <div style={{
                                    marginTop: Themes.getTheme().spaces.ltl + 'px',
                                    marginLeft: Themes.getTheme().spaces.ltl + 'px',
                                    marginRight: Themes.getTheme().spaces.ltl + 'px',
                                    paddingLeft: Themes.getTheme().spaces.min + 'px',
                                    paddingRight: Themes.getTheme().spaces.min + 'px',
                                    paddingBottom: '2px',
                                    border: 'solid 1px ' + (mode == Themes.getTheme().modes.day ? '#000000' : '#ffffff'),
                                    backgroundColor: mode == Themes.getTheme().modes.day ? '#ffffff' : '#000000',
                                    color: mode == Themes.getTheme().modes.day ? '#000000' : '#ffffff',
                                    borderRadius: Themes.getTheme().spaces.min + 'px'
                                }}><small>{selectedYYYY}</small></div>
                                <div style={{
                                    width: '97px',
                                    marginTop: Themes.getTheme().spaces.ltl + 'px',
                                    marginLeft: Themes.getTheme().spaces.ltl + 'px',
                                    marginRight: Themes.getTheme().spaces.ltl + 'px',
                                    paddingLeft: Themes.getTheme().spaces.min + 'px',
                                    paddingRight: Themes.getTheme().spaces.min + 'px',
                                    paddingBottom: '2px',
                                    border: 'solid 1px ' + (mode == Themes.getTheme().modes.day ? '#000000' : '#ffffff'),
                                    backgroundColor: mode == Themes.getTheme().modes.day ? '#ffffff' : '#000000',
                                    color: mode == Themes.getTheme().modes.day ? '#000000' : '#ffffff',
                                    borderRadius: Themes.getTheme().spaces.min + 'px'
                                }}><small>{selectedMM === 0 ? "" : Util.toMonthName(selectedMM)}</small></div>
                                <div style={{
                                    width: '30px',
                                    marginTop: Themes.getTheme().spaces.ltl + 'px',
                                    marginLeft: Themes.getTheme().spaces.ltl + 'px',
                                    marginRight: Themes.getTheme().spaces.ltl + 'px',
                                    paddingLeft: Themes.getTheme().spaces.min + 'px',
                                    paddingRight: Themes.getTheme().spaces.min + 'px',
                                    paddingBottom: '2px',
                                    border: 'solid 1px ' + (mode == Themes.getTheme().modes.day ? '#000000' : '#ffffff'),
                                    backgroundColor: mode == Themes.getTheme().modes.day ? '#ffffff' : '#000000',
                                    color: mode == Themes.getTheme().modes.day ? '#000000' : '#ffffff',
                                    borderRadius: Themes.getTheme().spaces.min + 'px'
                                }}><small>{selectedDD === 0 ? "" : selectedDD}</small></div>
                            </div>
                            <SfButton 
                                styles={{
                                    cursor: 'pointer',
                                    marginRight: Themes.getTheme().spaces.ltl + 'px',
                                    marginTop: Themes.getTheme().spaces.ltl + 'px',
                                }}
                                className='sf_btn_date_close' variant={variant} type={'filled'} caption={'▲'} onClick={() => {setShowDatePickerWrap(false)}} />
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <div style={{
                                height: '150px',
                                overflowY: 'auto',
                                // paddingLeft: Themes.getTheme().spaces.ltl + 'px',
                                // paddingRight: Themes.getTheme().spaces.ltl + 'px',
                            }}>
                                {
                                    arrYears.map((year) => {

                                        return ( <div 
                                            className={"year_" + year}
                                            onClick={() => {setSelectedYYYYWrap(year)}}
                                            key={year} 
                                            style={{
                                                cursor: 'pointer',
                                                marginTop: Themes.getTheme().spaces.ltl + 'px',
                                                marginLeft: Themes.getTheme().spaces.ltl + 'px',
                                                marginRight: Themes.getTheme().spaces.ltl + 'px',
                                                paddingLeft: Themes.getTheme().spaces.min + 'px',
                                                paddingRight: Themes.getTheme().spaces.min + 'px',
                                                paddingBottom: '2px',
                                                backgroundColor: mode == Themes.getTheme().modes.day ? '#ffffff' : (selectedYYYY == year ? '#ffffff' : '#444444'),
                                                color: mode != Themes.getTheme().modes.day ? (selectedYYYY == year ? '#444444' : '#ffffff') : (selectedYYYY == year ? '#000000' : '#888888'),
                                                borderRadius: Themes.getTheme().spaces.min + 'px'
                                        }}><small>{year}</small></div>)
                                    })
                                }
                            </div>
                            <div style={{
                                height: '150px',
                                overflowY: 'auto',
                                // paddingLeft: Themes.getTheme().spaces.ltl + 'px',
                                // paddingRight: Themes.getTheme().spaces.ltl + 'px',
                            }}>
                                {
                                    arrMonths.map((month) => {
                                        return ( <div 
                                            className={"month_" + month}
                                            onClick={() => {setSelectedMMWrap(month)}}
                                            key={month} 
                                            style={{
                                                cursor: 'pointer',
                                                width: '100px',
                                                textAlign: 'center',
                                                marginTop: Themes.getTheme().spaces.ltl + 'px',
                                                marginLeft: Themes.getTheme().spaces.ltl + 'px',
                                                marginRight: Themes.getTheme().spaces.ltl + 'px',
                                                paddingLeft: Themes.getTheme().spaces.min + 'px',
                                                paddingRight: Themes.getTheme().spaces.min + 'px',
                                                paddingBottom: '2px',
                                                backgroundColor: mode == Themes.getTheme().modes.day ? '#ffffff' : (selectedMM == month ? '#ffffff' : '#444444'),
                                                color: mode != Themes.getTheme().modes.day ? (selectedMM == month ? '#444444' : '#ffffff') : (selectedMM == month ? '#000000' : '#888888'),
                                                borderRadius: Themes.getTheme().spaces.min + 'px'
                                        }}><small>{Util.toMonthName(month)}</small></div>)
                                    })
                                }

                            </div>
                            <div style={{
                                height: '150px',
                                overflowY: 'auto',
                                // paddingLeft: Themes.getTheme().spaces.ltl + 'px',
                                // paddingRight: Themes.getTheme().spaces.ltl + 'px',
                            }}>
                                {
                                    Util.getDaysInMonthUTC(selectedMM-1, selectedYYYY).map((day) => {

                                        return ( <div 
                                            className={"date_" + day.getDate()}
                                            onClick={() => {setSelectedDDWrap(day.getDate())}}
                                            key={day.getDate()} 
                                            style={{
                                                cursor: 'pointer',
                                                width: '30px',
                                                textAlign: 'center',
                                                marginTop: Themes.getTheme().spaces.ltl + 'px',
                                                marginLeft: Themes.getTheme().spaces.ltl + 'px',
                                                marginRight: Themes.getTheme().spaces.ltl + 'px',
                                                paddingLeft: Themes.getTheme().spaces.min + 'px',
                                                paddingRight: Themes.getTheme().spaces.min + 'px',
                                                paddingBottom: '2px',
                                                backgroundColor: mode == Themes.getTheme().modes.day ? '#ffffff' : (selectedDD == day.getDate() ? '#ffffff' : '#444444'),
                                                color: mode != Themes.getTheme().modes.day ? (selectedDD == day.getDate() ? '#444444' : '#ffffff') : (selectedDD == day.getDate() ? '#000000' : '#888888'),
                                                borderRadius: Themes.getTheme().spaces.min + 'px'
                                        }}><small>{day.getDate()}</small></div>)

                                    })
                                }
                            </div>
                        </div>
                        
                    </div>}
                </div>}
                {(inputType != Themes.getTheme().inputTypes.dateOfBirth && inputType != Themes.getTheme().inputTypes.date) && <input 
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
