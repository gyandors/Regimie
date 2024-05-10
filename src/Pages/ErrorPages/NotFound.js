import Footer from '../../Components/Footer';
import Header from '../../Components/Header/Header';

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{ textAlign: 'center' }}>
        <h1>An error occurred!</h1>
        <p>Sorry, this page isn't available.</p>
      </main>
      <Footer />
    </>
  );
}
