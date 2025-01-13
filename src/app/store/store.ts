import {Icountry} from "../../models/icountry";
import {Countries} from "../../util/Const";
import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from "@ngrx/signals";
import {Ifruit} from "../../models/ifruit";
import {withStorageSync} from "./functions/with-storage-sync";
import {computed} from "@angular/core";
import {withEntities} from "@ngrx/signals/entities";

export interface IconfigState {
  seletedCountry: Icountry
  fruits: Ifruit[]
}

const initialState: IconfigState = {
  seletedCountry: Countries[2],
  fruits: [{name: "manzana", price: 123}]
}


export const appStore = signalStore(
  {providedIn: "root"},
  withState(initialState),
  withMethods((store) => ({
    changeValue: (country: Icountry) => {
      patchState(store, {seletedCountry: country});
    },
    addFruit: (fruit: Ifruit) => {
      patchState(store, {fruits: [...store.fruits(), fruit]});
    },
    deleteFruit: (fruit: Ifruit) => {
      patchState(store, {
        fruits: store.fruits().filter(
          item => item.name !== fruit.name || item.price !== fruit.price)
      });
    }
  })),

  withHooks(({}) => {
    return {
      onInit() {
        console.log("Store init");
      },
      onDestroy() {
        console.log("Destroy Store");
      }
    };
  }),

  withComputed(({fruits}) => ({
    totalPrice: computed(() => fruits().reduce((total, item) => total + item.price, 0)),
  })),

  withEntities<Ifruit>(),


  withStorageSync({
    key: 'appConfig',
    select: (state: IconfigState): Partial<IconfigState> => ({seletedCountry: state.seletedCountry}),
    stringify: (state: IconfigState) => JSON.stringify({country: state.seletedCountry.id}),
    parse: (configString: string) => configParser(configString)
  }),
);


function configParser(value: string): any {
  let out: Icountry = findCountry(JSON.parse(value).country);
  return {seletedCountry: out};
}


export function findCountry(value: number): Icountry {
  const out: Icountry | undefined = Countries.find(item => item.id == value);
  if (out) return out
  else return Countries[2]
}
