const Card = ({ contact }) => {
  const { id, name, email, phone, address } = contact;
  console.log(email);
  const { street, city, zipcode } = address;

  return (
    <div className="col col-md-4">
      <div className="card" Style="width: 18rem;">
        <img
          alt={`contact ${name}`}
          src={`https://i.pravatar.cc/300?img=${id}`}
        />
        <div className="card-body">
          <h5 className="card-title">
            <span>
              <i class="fa-solid fa-user"></i>
            </span>
            {` ${name}`}
          </h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span>
            {` ${email}`}
          </li>
          <li className="list-group-item">
            <span>
              <i class="fa-solid fa-phone"></i>
            </span>
            {` ${phone.substring(13, -6).replaceAll(".", "-")}`}
          </li>
          <li className="list-group-item">
            <span>
              <i class="fa-solid fa-location-dot"></i>
              {` ${street}, ${city}, ${zipcode}`}
            </span>
          </li>
        </ul>
      </div>
    </div>

    // <div className="card-container">
    //   <img
    //     alt={`contact ${name}`}
    //     src={`https://i.pravatar.cc/300?img=${id}`}
    //   />
    //   <h2>{name}</h2>
    //   <p>{email}</p>
    //   <p>{phone.substring(13, -6).replaceAll(".", "-")}</p>
    //   <p>{`${street}, ${city}, ${zipcode}`}</p>

    // </div>
  );
};

export default Card;
