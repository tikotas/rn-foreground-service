type NotificationType = {
    id: any;
    title?: any
    message?: string
    vibration?: boolean
    visibility?: "private" | "public" | "secret"
    icon?: string
    largeIcon?: string
    importance?: "min" | "low" | "default" | "high" | "max" | "none" | "unspecified"
    number?: string
    button?: boolean
    buttonText?: string
    buttonOnPress?: string
    button2?: boolean
    button2Text?: string
    button2OnPress?: string
    mainOnPress?: string
    progress?: {
        max: number
        curr: number
    };
    color?: string
    setOnlyAlertOnce?: boolean
}

type TaskType = {
    delay?: number
    onLoop?: boolean
    taskId?: string
    onSuccess?: () => void
    onError?: () => void
}
declare const ReactNativeForegroundService: {
    register: () => void;
    start: ({
                id,
                title,
                message,
                vibration,
                visibility,
                icon,
                largeIcon,
                importance,
                number,
                button,
                buttonText,
                buttonOnPress,
                button2,
                button2Text,
                button2OnPress,
                mainOnPress,
                progress,
                color,
                setOnlyAlertOnce,
            }: NotificationType) => Promise<void>;
    update: ({
                 id,
                 title,
                 message,
                 vibration,
                 visibility,
                 largeIcon,
                 icon,
                 importance,
                 number,
                 button,
                 buttonText,
                 buttonOnPress,
                 button2,
                 button2Text,
                 button2OnPress,
                 mainOnPress,
                 progress,
                 color,
                 setOnlyAlertOnce,
             }: NotificationType) => Promise<void>;
    stop: () => Promise<any>;
    stopAll: () => Promise<any>;
    is_running: () => boolean;
    add_task: (
        task: any,
        {
            delay,
            onLoop,
            taskId,
            onSuccess,
            onError,
        }: TaskType
    ) => string;
    update_task: (
        task: any,
        {
            delay,
            onLoop,
            taskId,
            onSuccess,
            onError,
        }: TaskType
    ) => string;
    remove_task: (taskId: any) => void
    is_task_running: (taskId: any) => boolean
    remove_all_tasks: () => {}
    get_task: (taskId: any) => any
    get_all_tasks: () => {}
    eventListener: (callBack: any) => () => void
};
export default ReactNativeForegroundService;
