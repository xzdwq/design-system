/** __vue_virtual_code_placeholder */
import './header.css';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    user: {
        name: string;
    } | null;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    createAccount: () => void;
    login: () => void;
    logout: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    user: {
        name: string;
    } | null;
}>>> & {
    onCreateAccount?: (() => any) | undefined;
    onLogin?: (() => any) | undefined;
    onLogout?: (() => any) | undefined;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
