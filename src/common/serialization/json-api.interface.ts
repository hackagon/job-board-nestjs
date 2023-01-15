export interface JsonApiResource {
  _id: string;
  type: string;
  attributes: any;
  relationships?: any;
  params?: any;
  meta: ObjectMeta;
}

export interface JsonApiCollection {
  data: Array<JsonApiResource> | Array<any>;
  meta: CollectionMeta;
  params?: any;
}

export interface ObjectMeta {
  createdAt: Date;
  updatedAt: Date;
  respondedAt?: Date | string;
}

export interface CollectionMeta {
  count: number;
  totalPages: number;
  limit: number | null;
  skip: number;
}

export interface CollectionLink {
  self: 'string';
}

export interface SerializeOptions { }
