import './gallery.css';
import { AnimalsResponce, getApiData } from '@/shared/api/api';
import { converterYesNo } from '@/shared/stringUtilits';
import { useEffect, useState } from 'react';

interface Props {
  findText: string;
}

export const Gallery = ({ findText }: Props): React.ReactNode => {
  const [dataAnimal, setDataAnimal] = useState<null | AnimalsResponce>(null);

  const getSearchData = async (findText: string) => {
    const data = await getApiData(findText);
    setDataAnimal(data);
  };

  useEffect(() => {
    getSearchData(findText);
  }, [findText]);

  if (!dataAnimal) {
    return (
      <div className="spinner">
        <div className="loading"></div>
      </div>
    );
  }

  const animals = dataAnimal.animals;

  return (
    <div className="gallery">
      {animals.map((animal) => (
        <div className="card" key={animal.uid}>
          <h2 className="title">{animal.name}</h2>
          <p className="cardInfo">Earth animal: {converterYesNo(animal.earthAnimal)}</p>
          <p className="cardInfo">Earth insect: {converterYesNo(animal.earthInsect)}</p>
          <p className="cardInfo">Feline: {converterYesNo(animal.feline)}</p>
          <p className="cardInfo">Avian: {converterYesNo(animal.avian)}</p>
        </div>
      ))}
    </div>
  );
};
