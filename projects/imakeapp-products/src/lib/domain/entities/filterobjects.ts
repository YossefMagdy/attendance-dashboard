import { Message } from "primeng/api";
import { Iinputs } from "projects/imakeapp-shared/lib/components/generic-filter/Interfaces/inputInterface";

export const configuration: ITableConfiguration[] = [
  {
    key: "name",
    title: "الاسم",
    type: "text",
  },
  {
    key: "name",
    title: "الاسم انجليزى",
    type: "text",
  },
  {
    key: "options",
    title: "الخيارات",
    type: "txt",
  },
  {
    key: "price",
    title: "السعر",
    type: "text",
  },
  {
    key: "visible",
    title: "الظهور",
    type: "text",
  },
  {
    key: "mark_as_new",
    title: "جديد",
    type: "text",
  },
  {
    key: "photo",
    title: "الصورة",
    type: "image",
  },
];
export const messages: Message[] = [
  {
    severity: "info",
    summary: "تعديل المنتج",
    detail:
      "يمكنك التعديل على الظهور او جديد فى المنتج عن طريق الضغط على الايقونة",
  },
];
export const filterInputs: Iinputs[] = [
  {
    name: "category_id",
    placeholder: "التصنيف الرئيسى",
    type: "multiSelect",
    label: "name_ar",
    value: "id",
    hideClear: false,
    options : []
  },
  {
    name: "sub_category_id",
    placeholder: "التصنيف الفرعى",
    type: "multiSelect",
    label: "name_ar",
    value: "id",
    options : []
  },
  {
    name: "id",
    placeholder: "الكود",
    type: "number",
    options : []
  },
  {
    name: "name",
    placeholder: "الاسم",
    field: "name_ar",
    type: "search",
    options : []
  },
  {
    name: "price",
    placeholder: "السعر",
    type: "text",
    options : []
  },
];
export interface ITableConfiguration{
  title: string;
  key: string;
  type: string;
}
