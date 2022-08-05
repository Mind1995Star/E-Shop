import LayoutError from '../layouts/404';

const yet = () => (
  <LayoutError>
    <section className="error-page">
      <div className="container">
        <h1>This page is in process !!</h1>
        <p>This page is being built.</p>
        <a href="/" className="btn btn--rounded btn--yellow">Go to home</a>
      </div>
    </section>
  </LayoutError>
)

export default yet