export interface Iinputs {
    type: "text" | "number" | "tel" | "dropdown" | "date" | "search" | "multiSelect" | "percintage" | 'month';
    name: string;
    placeholder?: string;
    title?: string;
    options?: any[];
    label?: string;
    value?: string;
    ignoreStartDate?: boolean;
    field?: string;
    autoDisplayFirst?: boolean;
    isStartDateToday?: boolean;
    hideClear?: boolean;
}
