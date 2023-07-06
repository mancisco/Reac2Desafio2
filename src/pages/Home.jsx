import React from 'react';

const Home = () => {
    const backgroundImage = 'img/img.jpg';
    return (
        <div className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh' }}>
            <div className="row justify-content-center align-items-center" style={{ height: '60vh' }}>
                <div className="col-6 text-center text-white">
                    <h1 className="display-1">VivaCraft</h1>
                    <p className="lead">
                    programacion de videojuegos.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Desarrollo juegos</h5>
                            <p className="card-text">Desarrollamos para la plataforma que necesites</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Orientación</h5>
                            <p className="card-text">Te orientamos de acuerdo a lo que quieras y necesites.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cumpliendo sueños</h5>
                            <p className="card-text">Creamos el juego que tanto sueñas y anhelas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;