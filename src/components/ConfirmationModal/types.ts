export type ConfirmProps = {
    confirmText?: string;
    cancelText?: string;
    onClickCancel?: () => void;
    onClickConfirm?: () => void;
    onClose?: () => void;
    title?: string;
    subtitle?: string;
    text?: string;
    open: boolean;
}