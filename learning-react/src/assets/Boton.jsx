import PropTypes from 'prop-types';
export function Boton({text , name= 'user'}) {

    return <button onClick={function () {
        console.log('Hola mundo')
    }}>
        {text} - {name}
    </button>
}
Boton.propTypes = {
    text: PropTypes.string.isRequired 
}

Boton.defaultProps ={
    name: 'some user'
}