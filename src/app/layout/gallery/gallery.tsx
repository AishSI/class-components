import { Component } from 'react';
import './gallery.css';
import { AnimalsResponce, getApiData } from '@/shared/api/api';
import { converterYesNo } from '@/shared/stringUtilits';

interface Props {
  findText: string;
}

interface State {
  data: AnimalsResponce | null;
}
export class Gallery extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  async getSearchData() {
    this.setState({ data: null });

    const { findText } = this.props;
    const data = await getApiData(findText);
    this.setState({ data });
  }

  async componentDidMount() {
    this.getSearchData();
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return (
        <div className="spinner">
          <div className="loading"></div>
        </div>
      );
    }

    const animals = data.animals;

    return (
      <div className="gallery">
        {animals.map((animal) => (
          <div className="card" key={animal.uid}>
            <h2 className="title">{animal.name}</h2>
            <p className="cardInfo">Earth animal: {converterYesNo(animal.earthAnimal)}</p>
            <p className="cardInfo">Feline: {converterYesNo(animal.feline)}</p>
            <p className="cardInfo">Avian: {converterYesNo(animal.avian)}</p>
          </div>
        ))}
      </div>
    );
  }
}
