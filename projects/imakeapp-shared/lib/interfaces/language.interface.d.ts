export interface language_interface {
    name: string;
    code: string;
}
export interface languages_state_interface {
    languages: language_interface[];
    active_language: language_interface;
    language_data: any;
}
