import * as React from 'react'
import { useState, useRef } from "react";
import Themes from 'react-sf-themes';
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
    const [ipType, setIpType] = useState('text');

    const refInput = useRef<any>();

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

    function setFocus() {

        refInput.current!.focus();
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

    }

    React.useEffect(() => {
        resetColors();
        resetType();    
        resetFocus();
    }, [])

    return (
        <div
            onClick={() => {setFocus()}}
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
                {caption}
                <span>&nbsp;&nbsp;&nbsp;</span>
                <input 
                    className={`sf_input_${inputType}`}
                    ref={refInput} 
                    style={{
                        flexGrow: '1',
                        margin: '0',
                        borderLeft: 'solid 1px ' + textColor,
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
