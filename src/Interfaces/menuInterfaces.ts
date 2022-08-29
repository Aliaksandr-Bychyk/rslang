interface IMenuItems {
  value: string,
  component: string,
  id: number,
  path: string
}

interface IMenu {
  active: boolean,
  setActive: React.Dispatch<React.SetStateAction<boolean>>,
  header: string,
  items: IMenuItems[]
}

interface IGame {
  name: string,
  image: string
}

export { IMenuItems, IMenu, IGame };
