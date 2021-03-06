import Mixin from "mixmatch";
import Page from "../page";
import Base from "../resources/base";
import FetchOptions from "../types/FetchOptions";

import { DEFAULT_PER_PAGE } from "../constants";
import DataContainer from "../types/DataContainer";

interface ListParam {
  [key: string]: string | number | boolean;
}

export default class List extends Mixin {
  get defaultListParams(): ListParam {
    return { per_page: DEFAULT_PER_PAGE };
  }

  async all(params: ListParam = this.defaultListParams) {
    const options: FetchOptions = {
      qs: params,
    };

    const body: DataContainer<any> = await this.client.api.get(this.collectionPath(), options);
    return new Page(body, this.resourcesName);
  }
}

export default interface List extends Mixin, Base {}
