import * as React from 'react'
import { useState } from "react";
import Themes from 'react-sf-themes';
import Util from './Util';

interface Props {
  variant: string;
  type: string;
  caption: string;
  onClick: (event: any) => void;
  disabled?: boolean;
  theme?: any;
  icon?: React.ReactNode;
  className?: string;
  styles?: any;
}

const SfButton = ({ variant, type, disabled = false, caption, onClick, theme = Themes.getTheme(), icon = null, className = '', styles = {}}: Props) => {


    const [borderColor, setBorderColor] = useState('none');
    const [backgroundColor, setBackgroundColor] = useState('none');
    const [textColor, setTextColor] = useState('none');

    function resetColors() {

        setTextColor(Util.getTextColor(theme, variant, type));
        setBackgroundColor(Util.getBackgroundColor(theme, variant, type));
        setBorderColor(Util.getBorderColor(theme, variant, type));

    }

    function invertColors() {
    
        setTextColor(Util.getTextColor(theme, variant, type == theme.types.filled? theme.types.outlined: theme.types.filled));
        setBackgroundColor(Util.getBackgroundColor(theme, variant, type == theme.types.filled? theme.types.outlined: theme.types.filled));
        setBorderColor(Util.getBorderColor(theme, variant, type == theme.types.filled? theme.types.outlined: theme.types.filled));

    }

    const onTouchStart = (value: boolean) => {

        if(value) {
            invertColors();
        } else {
           setTimeout(() => {resetColors();}, 300); 
        }
        
    }

    React.useEffect(() => {
        resetColors();        
    }, [])

    return (
        <button
            className={`sf_btn ${className}`} 
            style={{ 
                backgroundColor: backgroundColor,
                color: textColor,
                border: 'solid 1px ' + borderColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: Themes.getTheme().spaces.ltl + 'px',
                paddingRight: Themes.getTheme().spaces.ltl + 'px',
                paddingTop: Themes.getTheme().spaces.min + 'px',
                paddingBottom: Themes.getTheme().spaces.min + 'px',
                borderRadius: Themes.getTheme().spaces.min + 'px',  
                ...styles
            }}
            disabled={disabled} 
            onTouchStart={() => {onTouchStart(true)}} 
            onMouseDown={() => {onTouchStart(true)}} 
            onTouchEnd={() => {onTouchStart(false)}} 
            onMouseUp={() => {onTouchStart(false)}} 
            onClick={(event) => {onClick(event)}}
            >
            {caption}{icon != null && <span style={{paddingTop: '3px'}}>&nbsp;{icon}</span>}   
        </button>

    )

}

export default SfButton;
