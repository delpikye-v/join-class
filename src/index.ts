export interface ClassDictionary {
  [id: string]: any;
}
export interface ClassArray extends Array<ClassValue> {}

export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;

const typesClass = ["string", "number"];

const joinStr = (name: ClassValue, arr: Set<string>) => {
  if (!name) return;

  const type = typeof name;
  if (typesClass.includes(type)) {
    arr.add(`${name}`.trim());
    return;
  }

  if (Array.isArray(name)) {
    name.forEach((item) => joinStr(item, arr));
    return;
  }

  if (type === "object") {
    // @ts-ignore
    Object.keys(name).forEach((k) => name[k] && arr.add(`${k}`.trim()));
  }
};

function joinclass(...classes: ClassValue[]) {
  let list = new Set<string>(); // remove duplicate
  Array.from(classes).forEach((name) => joinStr(name, list));
  return Array.from(list)
    .filter((item) => item)
    .join(" ");
}

export {
  joinclass,
  joinclass as classes,
  joinclass as classnames,
  joinclass as clsx,
};

export default joinclass;
