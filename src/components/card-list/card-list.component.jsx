import Card from "../card/card.component";

const CardList = ({ contacts }) => (
  <div className="card-list">
    <div className="container">
      <div className="row justify-content-start m">
        {contacts.map((contact) => {
          return (
            <div className="col col-md-4 mb-3">
              <Card key={contact.id} contact={contact} />
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default CardList;
