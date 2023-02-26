/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Dog = {
  __typename: "Dog",
  id: string,
  name: string,
  events: string,
  createdAt: string,
  updatedAt: string,
};

export type CreateDogInput = {
  id?: string | null,
  name: string,
  events: string,
};

export type ModelDogConditionInput = {
  name?: ModelStringInput | null,
  events?: ModelStringInput | null,
  and?: Array< ModelDogConditionInput | null > | null,
  or?: Array< ModelDogConditionInput | null > | null,
  not?: ModelDogConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateDogInput = {
  id: string,
  name?: string | null,
  events?: string | null,
};

export type DeleteDogInput = {
  id: string,
};

export type ModelDogConnection = {
  __typename: "ModelDogConnection",
  items:  Array<Dog | null >,
  nextToken?: string | null,
};

export type ModelDogFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  events?: ModelStringInput | null,
  and?: Array< ModelDogFilterInput | null > | null,
  or?: Array< ModelDogFilterInput | null > | null,
  not?: ModelDogFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSubscriptionDogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  events?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDogFilterInput | null > | null,
  or?: Array< ModelSubscriptionDogFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type newDogMutation = {
  createDog?:  {
    __typename: "Dog",
    id: string,
  } | null,
};

export type CreateDogMutationVariables = {
  input: CreateDogInput,
  condition?: ModelDogConditionInput | null,
};

export type CreateDogMutation = {
  createDog?:  {
    __typename: "Dog",
    id: string,
    name: string,
    events: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDogMutationVariables = {
  input: UpdateDogInput,
  condition?: ModelDogConditionInput | null,
};

export type UpdateDogMutation = {
  updateDog?:  {
    __typename: "Dog",
    id: string,
    name: string,
    events: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDogMutationVariables = {
  input: DeleteDogInput,
  condition?: ModelDogConditionInput | null,
};

export type DeleteDogMutation = {
  deleteDog?:  {
    __typename: "Dog",
    id: string,
    name: string,
    events: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAllDogsQuery = {
  listDogs?:  {
    __typename: "ModelDogConnection",
    items:  Array< {
      __typename: "Dog",
      id: string,
      name: string,
    } | null >,
  } | null,
};

export type GetDogQueryVariables = {
  id: string,
};

export type GetDogQuery = {
  getDog?:  {
    __typename: "Dog",
    id: string,
    name: string,
    events: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDogsQueryVariables = {
  filter?: ModelDogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDogsQuery = {
  listDogs?:  {
    __typename: "ModelDogConnection",
    items:  Array< {
      __typename: "Dog",
      id: string,
      name: string,
      events: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDogSubscriptionVariables = {
  filter?: ModelSubscriptionDogFilterInput | null,
};

export type OnCreateDogSubscription = {
  onCreateDog?:  {
    __typename: "Dog",
    id: string,
    name: string,
    events: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDogSubscriptionVariables = {
  filter?: ModelSubscriptionDogFilterInput | null,
};

export type OnUpdateDogSubscription = {
  onUpdateDog?:  {
    __typename: "Dog",
    id: string,
    name: string,
    events: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDogSubscriptionVariables = {
  filter?: ModelSubscriptionDogFilterInput | null,
};

export type OnDeleteDogSubscription = {
  onDeleteDog?:  {
    __typename: "Dog",
    id: string,
    name: string,
    events: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
