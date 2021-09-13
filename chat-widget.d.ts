export declare let chatBoxHidden: boolean;
export declare function createWidget(config: Options): void;
export declare function initializeWidget(config: Options): void;
export declare function toggleChatBox(): void;
interface Options {
    generalSettings: {
        widgetEnabled: boolean;
        phoneNumber: string;
        prefilledMessage: string;
    };
    button?: {
        backgroundColor: string;
        borderRadiusPx: number;
        text: string;
        textColor: string;
    };
    chatWindow?: {
        styling?: {
            borderRadiusPx?: number;
        };
        header?: {
            logoUrl?: string;
            title?: string;
            subTitle?: string;
        };
        content?: {
            borderRadiusPx?: number;
            chatMessage: string;
        };
        footer?: {
            buttonBorderRadiusPx?: number;
            buttonBackgroundColor?: string;
            buttonText: string;
        };
    };
}
declare global {
    interface Window {
        wa_widget_config: Options;
    }
}
export {};
