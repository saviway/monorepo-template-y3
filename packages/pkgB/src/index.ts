export type Params = {
  label: string
  value: string
}


export const myFn = (p: Params): string => `${p.label}:${p.value}`
