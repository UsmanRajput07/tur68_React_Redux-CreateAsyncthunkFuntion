import Product from "../Components/Product"

function Home() {
  return (
  <>
  <div>
    <h2 className="heading">welcome to redux toolkit store</h2>
    <section>
        <h3>products</h3>
        <Product/>
    </section>
  </div>
  </>
  )
}

export default Home