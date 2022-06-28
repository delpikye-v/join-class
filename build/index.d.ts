export interface ClassDictionary {
    [id: string]: any;
}
export interface ClassArray extends Array<ClassValue> {
}
export declare type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;
declare function joinclass(...classes: ClassValue[]): string;
export { joinclass, joinclass as classes, joinclass as classnames, joinclass as clsx, };
export default joinclass;
