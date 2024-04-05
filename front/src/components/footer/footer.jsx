import React from 'react'
import styles from "./footer.module.css";
import { FaFacebook , FaInstagram, FaTwitter} from 'react-icons/fa';

export const footer = () => {
  return (
    <>
        <div className={styles.contenedor}>
            <div className="container-fluid m-2 mb-1 ml-2 mr-1">
                <div className="row">
                    <div
                        className="col-4"
                    >
                        <h4>SUSTENTARTE</h4>
                        <h5>"Vive una vida sustentable"</h5>
                    </div>
                    <div
                        className="col-2"
                    >
                        
                    </div>
                    <div
                        className="col-6"
                    >
                        <div className="container-fluid">
                            <div className="row mt-4 mr">
                            <div
                                    className="col-6 mt-2"
                                >
                                    <h5 style={{ textAlign: 'right' }}>Contactanos en:</h5>
                                </div>
                                <div
                                    className="col-1"
                                >
                                    <a href=""><h2><FaFacebook/></h2></a>
                                </div>
                                <div
                                    className="col-1"
                                >
                                    <a href=""><h2><FaInstagram/></h2></a>
                                </div>
                                <div
                                    className="col-1"
                                >
                                    <a href=""><h2><FaTwitter/></h2></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default footer;
