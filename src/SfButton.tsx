import * as React from 'react'
import { useState } from "react";
import { Button } from 'react-bootstrap';
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
}

const SfButton = ({ variant, type, disabled = false, caption, onClick, theme = Themes.getTheme(), icon = null, className = ''}: Props) => {

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
        <Button 
            className={`btn btn-secondary ${className}`} 
            style={{ 
                backgroundColor: backgroundColor,
                color: textColor,
                border: 'solid 1px ' + borderColor
            }}
            disabled={disabled} 
            onTouchStart={() => {onTouchStart(true)}} 
            onMouseDown={() => {onTouchStart(true)}} 
            onTouchEnd={() => {onTouchStart(false)}} 
            onMouseUp={() => {onTouchStart(false)}} 
            onClick={(event) => {onClick(event)}}
            >
            {caption}{icon != null && <span>&nbsp;{icon}</span>}   
        </Button>

    )

}

export default SfButton;
