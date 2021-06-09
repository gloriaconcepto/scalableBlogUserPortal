import { notification } from "antd";

export const openNotificationWithIcon = (type, title, description, placement, duration) => {
    notification[type]({
        message: title,
        description: description,
        style: {
            "margin-top": "3rem",
        },
        placement: placement,
        duration: duration,
    });
};
