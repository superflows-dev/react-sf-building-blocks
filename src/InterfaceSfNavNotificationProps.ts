import { InterfaceNavigate } from "./InterfaceNavigate";
import { InterfaceSfNavMenuItem } from "./InterfaceSfNavMenuItem";

interface InterfaceSfNavNotificationProps {
    variant: string;
    theme: any;
    notificationList: any;
    notificationListMenu: InterfaceSfNavMenuItem;
    notificationDetailsMenu: InterfaceSfNavMenuItem;
    stylesNotificationListContainer: any;
    stylesNotificationRead: any;
    stylesNotificationUnRead: any;
    stylesNotificationViewAll: any;
    enableRouting: boolean;
    classNameNotificationListContainer: string;
    classNameNotificationRead: string;
    classNameNotificationUnRead: string;
    classNameNotificationViewAll: string;
    toggleNotificationMenu: () => any;
    onViewAllNotificationsClicked: () => void;
    onNotificationClicked: (value: any) => void;
    navigateTo: (value: InterfaceNavigate) => void;
}


export {type InterfaceSfNavNotificationProps};