export const navItems = [
    {label:'Store'},
    {label:'Mac'},
    {label:'iPhone'},
    {label:'Vision'},
    {label:'Watch'},
    {label:'AirPods'},
];

export const macColor = "#2e2c2e";

export const modelScales = {
    "14": { desktop: 0.06, mobile: 0.03 },
    "16": { desktop: 0.08, mobile: 0.05 },
} as const;

export type ModelSize = keyof typeof modelScales;
export const defaultModelSize: ModelSize = "16";

export const noChangeParts = [
    "Object_84","Object_37","Object_34","Object_12","Object_80","Object_35","Object_36","Object_13","Object_125","Object_76","Object_33","Object_42","Object_58","Object_52","Object_21","Object_10"
];