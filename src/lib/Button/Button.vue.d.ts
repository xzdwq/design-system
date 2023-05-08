/** __vue_virtual_code_placeholder */
import './button.css';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The label of the button
     */
    label: string;
    /**
     * primary or secondary button
     */
    primary?: boolean | undefined;
    /**
     * size of the button
     */
    size?: "small" | "medium" | "large" | undefined;
    /**
     * background color of the button
     */
    backgroundColor?: string | undefined;
}>, {
    primary: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (id: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The label of the button
     */
    label: string;
    /**
     * primary or secondary button
     */
    primary?: boolean | undefined;
    /**
     * size of the button
     */
    size?: "small" | "medium" | "large" | undefined;
    /**
     * background color of the button
     */
    backgroundColor?: string | undefined;
}>, {
    primary: boolean;
}>>> & {
    onClick?: ((id: number) => any) | undefined;
}, {
    primary: boolean;
}>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
