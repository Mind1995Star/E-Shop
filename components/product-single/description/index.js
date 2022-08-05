const Description = ({ show }) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s </p>
      </div>
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
      </div>
    </section>
  );
};
  
export default Description;
    