import { getImageUrl } from "./Utils";

export function Profile(promps) {
    return (
        <section className="profile">
        <h2>{promps.name}</h2>
        <img
          className="avatar"
          src={getImageUrl(`${promps.url}`)}
          alt={promps.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profesión: </b> 
            {promps.work}
          </li>
          <li>
            <b>Reconocimientos: {promps.award.amount} </b> 
            {promps.award.list}
          </li>
          <li>
            <b>Descubrió: </b>
            {promps.discover}
          </li>
        </ul>
      </section>
    );
}