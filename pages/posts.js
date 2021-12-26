import Container from "../components/Container";
function Blog() {
  const footerDesign = "text-sm text-center m-auto px-5 py-5 text-gray-400";
  return (
    <>
      <div className="container">
        <main>
          <Container/>
          <footer className={footerDesign}>
            &copy;Suvadeep Ghoshal since 2021
          </footer>
        </main>
      </div>
    </>
  );
}

export default Blog;
