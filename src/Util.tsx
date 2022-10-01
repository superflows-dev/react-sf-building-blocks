const Util = {
    
    getWindowDimensions: function () {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    },

    toMonthName: function(monthNumber: number) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
      
        return date.toLocaleString('en-US', {
          month: 'long',
        });
    },

    getDaysInMonthUTC: function(month: number, year: number) {
        var date = new Date(Date.UTC(year, month, 1));
        var days = [];
        while (date.getUTCMonth() === month) {
          days.push(new Date(date));
          date.setUTCDate(date.getUTCDate() + 1);
        }
        return days;
    },

    validateDDMMYYYY: function(dd: string, mm: string, yyyy: string) {

        if (dd == "" || 
            mm == "" || 
            yyyy == "" || 
            parseInt(dd) <= 0 ||
            parseInt(dd) > 31 ||
            parseInt(mm) < 0 ||
            parseInt(mm) > 12 ||
            parseInt(yyyy) < 1900 ||
            parseInt(yyyy) > 3000
            )  {

                return false;

        } else { 

            if(mm == "2") {
                if((parseInt(mm)%4 === 0 && parseInt(dd) > 29) ||
                    (parseInt(mm)%4 > 0 && parseInt(dd) > 28)) {
                        return false;
                    } else {
                        return true;
                    }
            } else if (mm == "4" || mm == "6" || mm == "9" || mm == "11") {
                if(parseInt(dd) > 30) {
                    return false;
                } else {
                    return true;
                }
            } 

            return true;
        }

    },
    
    validateMobile: function(value: string) {

        return value.match(
            /^[0-9]+$/
        );

    },
    
    validateName: function(value: string) {

        return value.match(
            /^([ \u00c0-\u01ffa-zA-Z'\-])+$/
        );

    },

    validateEmail: function(value: string) {

        return value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );

    },

    shadeColor: function (color: string, amount: number) {
        return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
    },

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
                //ret = theme.colors.primaryTextColor
                ret = 'transparent';
            }
        } else if(variant == theme.variants.secondary) {
            if(type == theme.types.filled) {
                ret = theme.colors.secondaryBgColor
            } else if(type == theme.types.outlined) {
                //ret = theme.colors.secondaryTextColor
                ret = 'transparent';
            }
        } else if(variant == theme.variants.danger) {
            if(type == theme.types.filled) {
                ret = theme.colors.dangerBgColor
            } else if(type == theme.types.outlined) {
                //ret = theme.colors.dangerTextColor
                ret = 'transparent';
            }
        } else if(variant == theme.variants.success) {
            if(type == theme.types.filled) {
                ret = theme.colors.successBgColor
            } else if(type == theme.types.outlined) {
                //ret = theme.colors.successTextColor
                ret = 'transparent';
            }
        } else if(variant == theme.variants.warning) {
            if(type == theme.types.filled) {
                ret = theme.colors.warningBgColor
            } else if(type == theme.types.outlined) {
                //ret = theme.colors.warningTextColor
                ret = 'transparent';
            }
        } else if(variant == theme.variants.info) {
            if(type == theme.types.filled) {
                ret = theme.colors.infoBgColor
            } else if(type == theme.types.outlined) {
                //ret = theme.colors.infoTextColor
                ret = 'transparent';
            }
        } else if(variant == theme.variants.light) {
            if(type == theme.types.filled) {
                ret = theme.colors.lightBgColor
            } else if(type == theme.types.outlined) {
                //ret = theme.colors.lightTextColor
                ret = 'transparent';
            }
        } else if(variant == theme.variants.dark) {
            if(type == theme.types.filled) {
                ret = theme.colors.darkBgColor
            } else if(type == theme.types.outlined) {
                //ret = theme.colors.darkTextColor
                ret = 'transparent';
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