export default function Paginacion(props) {

    
    console.log(props.pagina)
    const getPaginas = () => {
        const resultado = [];
        
        for (let i = 0; i < props.total; i++) {
            var pagina = i+ 1;
           
            resultado.push(
            <a onClick={() => props.onChange(pagina)} 
            className={props.pagina === pagina ? 'active': ''} >
                {pagina}</a>
            );
        }

        return resultado;
    }

    return (
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Pagina {props.pagina} of {props.total}:</span>
                {/* otra forma de realizar el getPaginas() */}
                {/* {Array.apply(0, Array(this.props.total)).map(value =>
                    <a className="active" href="#">1x</a>
                )} */}

                {getPaginas()}
                
            </div>
        </div>
    );
}