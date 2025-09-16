import "./shows.css";
/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows = [], onSelectShow = () => {} }) {
  return (
    <nav className="shows">
      <ul>
        {shows.map((item) => {
          return (
            <li className="show" key={item.genre}>
              <button onClick={() => onSelectShow(item)}>{item.name}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
