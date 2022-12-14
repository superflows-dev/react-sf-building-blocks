
interface InterfaceSfNavBannerProps {
    variant: string;
    theme: any;
    bannerComponent?: any;
    showBanner?: boolean;
    bannerText?: string;
    bannerCta?: string;
    bannerEnableDismiss?: boolean;
    stylesBannerContainer?: any;
    stylesBannerText?: any;
    stylesBannerCta?: any;
    classNameBannerContainer?: any;
    classNameBannerText?: any;
    classNameBannerCta?: any;
    onBannerCtaPressed?: () => void;
}

export {type InterfaceSfNavBannerProps};