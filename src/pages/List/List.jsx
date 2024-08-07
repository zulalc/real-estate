import "./List.scss";
import { listData } from "../../libraries/dummydata";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";

function List() {
  const data = listData;
  return (
    <div className="list-page">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </div>
  );
}

export default List;
