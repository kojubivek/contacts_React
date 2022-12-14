import Card from "../card/card.component";

const CardList = ({ contacts }) => (
  <div className="card-list">
    <div className="container">
      <div className="row">
        {contacts.map((contact) => {
          return (
            <div key={contact.id} className="col mb-3 justify-content-center">
              {" "}
              <Card contact={contact} />
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default CardList;
