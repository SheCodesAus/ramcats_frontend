import "./OrganisationCard.css";

const OrganisationCard = ({ organisation }) => {
  return (
    <div>
      <img src={organisation.logo} alt={`${organisation.name} logo`} />
      <h2>{organisation.name}</h2>
      <h3>Description</h3>
      <p>{organisation.description}</p>
      <p><a href={organisation.website} alt={`Visit ${organisation.name}'s website`}>{organisation.website}</a></p>
    </div>
  );
};

export default OrganisationCard;