import './Brand'
import Brand from './Brand'
import Inputsearch  from './Inputsearch'
import Login from './Login'
import Shoppingcart from './Shoppingcart'


const Varface = ()=> {
    return (
        <div className="container text-center">
      <div className="row align-items-center">
        <div className="col">
          <Brand />
        </div>
        <div className="col">
          <Inputsearch />
        </div>
        <div className="col">
          <div className='container'>
            <div className='row'>
              <div className='col-6'>
                <Login />
              </div>
              <div className='col-6'>
                <Shoppingcart />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>   
    )
}

export default Varface;