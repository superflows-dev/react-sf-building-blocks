import { InterfaceNavigate } from "./InterfaceNavigate";
import { InterfaceSfNavMenuItem } from "./InterfaceSfNavMenuItem";
import { InterfaceSfNavNotificationItem } from "./InterfaceSfNavNotificationItem";

interface InterfaceSfNavNotificationProps {
    variant: string;
    theme: any;
    notificationList: any;
    stylesNotificationListContainer: any;
    stylesNotificationRead: any;
    stylesNotificationUnRead: any;
    stylesNotificationViewAll: any;
    classNameNotificationListContainer: string;
    classNameNotificationRead: string;
    classNameNotificationUnRead: string;
    classNameNotificationViewAll: string;
    toggleNotificationMenu: () => any;
    onViewAllNotificationsClicked: () => void;
    onNotificationClicked: (value: InterfaceSfNavNotificationItem) => void;
}


export {type InterfaceSfNavNotificationProps};