import BooksList from "@/components/books/BooksList";
import Head from "next/head";
import axios from "axios";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Books Store</title>
        <meta
          name="description"
          content="Here You can find various collections of books of various famous authors."
        />
      </Head>
      <BooksList books={props.books} />
    </>
  );
};

export async function getStaticProps() {
  const response = await axios.get("http://localhost:4000/books");
  const books = response.data;
  return {
    props: {
      books: books,
    },
  };
}
export default HomePage;
