export default function Pelicula(props) {
    return (
        <div className="movie-item-style-2">
            <img src={props.imagen} alt="" />
            <div class="mv-item-infor">
                <h6><a href="moviesingle.html">{props.titulo}</a></h6>
                <p class="rate"><i class="ion-android-star"></i><span>{props.calificacion}</span> /10</p>
                <p class="describe">{props.children}</p>
                <p class="run-time"> Duración: {props.duracion}.<span>MMPA: PG-13 </span>.<span>Fecha: {props.fecha}</span></p>
                <p>Director: <a href="#">{props.director}</a></p>
                <p>Stars: <a href="#">{props.actores}</a></p>
            </div>
        </div>
    )
}

