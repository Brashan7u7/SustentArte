import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="carousel carousel-container">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/Canasto.jpg" className="d-block w-100 img-fluid" alt="..."  />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/Canasto.jpg" className="d-block w-100 img-fluid" alt="..."  />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/Canasto.jpg" className="d-block w-100 img-fluid" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="row mb-5" style={{ height: "85px", backgroundColor: "#F1D8B3" }}>

      </div>

      <div className="container-fluid d-flex justify-content-center align-items-center mb-4">
        <div className="info d-flex justify-content-center align-items-center w-80">
          <div className="row">
            <div className="col-lg-4 col-m-6 col-sm-12">
              <div className="card border-0 justify-content-center align-items-center">
                <img className="card-img-top" src="/ecoFriendly.png" alt="Title" style={{ height: "300px", width: "300px" }} />
                <div className="card-body text-center">
                  <h4 className="card-title">ECO-FRIENDLY</h4>
                  <p className="card-text m-5  mt-1">Nuestros productos son amigables con el medio ambiente y sustentables, porque reciclamos materiales.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-m-6 col-sm-12">
              <div className="card border-0 justify-content-center align-items-center">
                <img className="card-img-top" src="/formasPago.png" alt="Title" style={{ height: "300px", width: "300px" }} />
                <div className="card-body text-center">
                  <h4 className="card-title">FORMAS DE PAGO</h4>
                  <p className="card-text m-5  mt-1">Puedes pagar con tu tarjeta de débito/crédito en PayPal o mediante transferencia a nuestra cuenta bancaria.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-m-6 col-sm-12">
              <div className="card border-0 justify-content-center align-items-center">
                <img className="card-img-top" src="/creacionArtesanal.png" alt="Title" style={{ height: "300px", width: "300px" }} />
                <div className="card-body text-center">
                  <h4 className="card-title">CREACION ARTESANAL</h4>
                  <p className="card-text m-5  mt-1">Nuestros productos son creados de manera totalmente artesanal, por manos de los mejores artesanos del estado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </main>
  );
}
