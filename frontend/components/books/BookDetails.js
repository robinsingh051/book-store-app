import classes from "./BookDetails.module.css";
const BookDetails = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <author>{props.author}</author>
      <p>{props.description}</p>
    </section>
  );
};
export default BookDetails;
