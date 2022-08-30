interface IMenuItems {
  value: string,
  id: number,
  path: string
}

interface IMenu {
  active: boolean,
  setActive: React.Dispatch<React.SetStateAction<boolean>>,
  header: string,
  items: IMenuItems[]
}

export { IMenuItems, IMenu };
