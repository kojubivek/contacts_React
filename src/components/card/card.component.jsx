const Card = ({ contact }) => {
  const { id, name, email, phone, address } = contact;

  const { street, city, zipcode } = address;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="rounded-circle"
        alt={`contact ${name}`}
        src={`https://i.pravatar.cc/200?img=${id}`}
      />
      <div className="card-body">
        <h5 className="card-title">
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
          {` ${name}`}
        </h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span>
            <i className="fa-solid fa-envelope"></i>
          </span>
          {` ${email}`}
        </li>
        <li className="list-group-item">
          <span>
            <i className="fa-solid fa-phone"></i>
          </span>
          {` ${phone.substring(13, -6).replaceAll(".", "-")}`}
        </li>
        <li className="list-group-item">
          <span>
            <i className="fa-solid fa-location-dot"></i>
            {` ${street}, ${city}, ${zipcode}`}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Card;
