export interface IMenu {}
export interface ICard {}
export interface ITag {}
export interface ICatalog {}

export interface IState {
  menus: IMenu[];
  cards: ICard[];
  tags: ITag[];
  catalogs: ICatalog[];
}

const state: IState = {
  menus: [],
  cards: [],
  tags: [],
  catalogs: []
};

export default state;
