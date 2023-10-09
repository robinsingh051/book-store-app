import BookDetails from "@/components/books/BookDetails";
import axios from "axios";
import Head from "next/head";

const BookDetail = (props) => {
  return (
    <>
      <Head>
        <title>{props.bookData.title}</title>
        <meta name="description" content={props.bookData.description} />
        <meta name="author" content={props.bookData.author} />
      </Head>
      <BookDetails
        image={props.bookData.image}
        title={props.bookData.title}
        author={props.bookData.author}
        description={props.bookData.description}
      />
    </>
  );
};

//next js will generate all pages for all meetupIds
export async function getStaticPaths() {
  const response = await axios.get("http://localhost:4000/books");
  const books = response.data;
  const paths = books.map((book) => ({
    params: {
      bookId: book.id,
    },
  }));
  return {
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps(context) {
  const bookId = context.params.bookId;
  const response = await axios.get(`http://localhost:4000/books/${bookId}`);
  const book = response.data;
  return {
    props: {
      bookData: {
        id: book.id,
        title: book.title,
        author: book.author,
        image: book.image,
        description: book.description,
      },
    },
  };
}

export default BookDetail;
