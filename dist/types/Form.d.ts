import DataContainer from "./DataContainer";
import Nullable from "./Nullable";
declare type MinLat = number;
declare type MinLong = number;
declare type MaxLat = number;
declare type MaxLong = number;
export declare type BoundingBox = [MinLat, MinLong, MaxLat, MaxLong];
export declare enum FormType {
    Shallow = "shallow",
    Deep = "deep"
}
export interface StatusFieldChoice {
    label: string;
    value: string;
    color: string;
}
export interface StatusField {
    choices: StatusFieldChoice[];
    data_name: string;
    default_previous_value: boolean;
    default_value: string;
    description: string;
    disabled: boolean;
    enabled: boolean;
    hidden: boolean;
    key: string;
    label: string;
    read_only: boolean;
    required: boolean;
    type: string;
}
export interface Element {
}
export interface ShallowForm {
    assignment_enabled?: Nullable<boolean>;
    auto_assign?: Nullable<boolean>;
    bounding_box?: Nullable<BoundingBox>;
    created_at?: Nullable<string>;
    description?: Nullable<string>;
    geometry_required?: Nullable<boolean>;
    geometry_types?: ["Point"] | [] | null;
    hidden_on_dashboard?: Nullable<boolean>;
    id?: Nullable<string>;
    image_large?: Nullable<string>;
    image_small?: Nullable<string>;
    image_thumbnail?: Nullable<string>;
    image?: Nullable<string>;
}
export interface Form extends ShallowForm {
    elements: Element[];
}
export declare type FormContainer = DataContainer<ShallowForm>;
export {};
