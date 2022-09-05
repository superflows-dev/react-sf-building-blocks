const Util = {

    getTextColor: function (theme: any, variant: string, type: string) {
        
        let ret = null;

        if(variant == theme.variants.primary) {
            if(type == theme.types.filled) {
                ret = theme.colors.primaryTextColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.primaryBgColor
            }
        } else if(variant == theme.variants.secondary) {
            if(type == theme.types.filled) {
                ret = theme.colors.secondaryTextColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.secondaryBgColor
            }
        } else if(variant == theme.variants.danger) {
            if(type == theme.types.filled) {
                ret = theme.colors.dangerTextColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.dangerBgColor
            }
        } else if(variant == theme.variants.success) {
            if(type == theme.types.filled) {
                ret = theme.colors.successTextColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.successBgColor
            }
        } else if(variant == theme.variants.warning) {
            if(type == theme.types.filled) {
                ret = theme.colors.warningTextColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.warningBgColor
            }
        } else if(variant == theme.variants.info) {
            if(type == theme.types.filled) {
                ret = theme.colors.infoTextColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.infoBgColor
            }
        } else if(variant == theme.variants.light) {
            if(type == theme.types.filled) {
                ret = theme.colors.lightTextColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.lightBgColor
            }
        } else if(variant == theme.variants.dark) {
            if(type == theme.types.filled) {
                ret = theme.colors.darkTextColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.darkBgColor
            }
        }

        return ret;

    },

    getBackgroundColor: function (theme: any, variant: string, type: string) {
        
        let ret = null;

        if(variant == theme.variants.primary) {
            if(type == theme.types.filled) {
                ret = theme.colors.primaryBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.primaryTextColor
            }
        } else if(variant == theme.variants.secondary) {
            if(type == theme.types.filled) {
                ret = theme.colors.secondaryBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.secondaryTextColor
            }
        } else if(variant == theme.variants.danger) {
            if(type == theme.types.filled) {
                ret = theme.colors.dangerBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.dangerTextColor
            }
        } else if(variant == theme.variants.success) {
            if(type == theme.types.filled) {
                ret = theme.colors.successBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.successTextColor
            }
        } else if(variant == theme.variants.warning) {
            if(type == theme.types.filled) {
                ret = theme.colors.warningBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.warningTextColor
            }
        } else if(variant == theme.variants.info) {
            if(type == theme.types.filled) {
                ret = theme.colors.infoBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.infoTextColor
            }
        } else if(variant == theme.variants.light) {
            if(type == theme.types.filled) {
                ret = theme.colors.lightBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.lightTextColor
            }
        } else if(variant == theme.variants.dark) {
            if(type == theme.types.filled) {
                ret = theme.colors.darkBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.darkTextColor
            }
        }

        return ret;

    },

    getBorderColor: function (theme: any, variant: string, type: string) {
        
        let ret = null;

        if(variant == theme.variants.primary) {
            if(type == theme.types.filled) {
                ret = theme.colors.primaryBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.primaryBgColor
            }
        } else if(variant == theme.variants.secondary) {
            if(type == theme.types.filled) {
                ret = theme.colors.secondaryBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.secondaryBgColor
            }
        } else if(variant == theme.variants.danger) {
            if(type == theme.types.filled) {
                ret = theme.colors.dangerBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.dangerBgColor
            }
        } else if(variant == theme.variants.success) {
            if(type == theme.types.filled) {
                ret = theme.colors.successBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.successBgColor
            }
        } else if(variant == theme.variants.warning) {
            if(type == theme.types.filled) {
                ret = theme.colors.warningBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.warningBgColor
            }
        } else if(variant == theme.variants.info) {
            if(type == theme.types.filled) {
                ret = theme.colors.infoBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.infoBgColor
            }
        } else if(variant == theme.variants.light) {
            if(type == theme.types.filled) {
                ret = theme.colors.lightBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.lightBgColor
            }
        } else if(variant == theme.variants.dark) {
            if(type == theme.types.filled) {
                ret = theme.colors.darkBgColor
            } else if(type == theme.types.outlined) {
                ret = theme.colors.darkBgColor
            }
        }

        return ret;

    },

}

export default Util;