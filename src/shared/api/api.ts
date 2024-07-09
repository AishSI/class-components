const API_BASE_URL = 'https://stapi.co/api/v1/rest/animal/search?';

interface Animal {
  uid: string;
  name: string;
  earthAnimal: boolean;
  earthInsect: boolean;
  avian: boolean;
  canine: boolean;
  feline: boolean;
}

interface Page {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
}

interface Sort {
  clauses: [];
}

export interface AnimalsResponce {
  page: Page;
  sort: Sort;
  animals: Animal[];
}

export async function getApiData(findText: string): Promise<AnimalsResponce> {
  let pageSize: number;
  let methodRequest: string;

  if (findText) {
    pageSize = 10;
    methodRequest = 'POST';
  } else {
    pageSize = 30;
    methodRequest = 'GET';
  }

  const responce = await fetch(`${API_BASE_URL}name=${findText}&pageSize=${pageSize}`, {
    method: methodRequest,
    redirect: 'follow',
  });

  const data = await responce.json();

  return data;
}
