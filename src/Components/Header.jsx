import { Link } from 'react-router-dom'

function Header() {

    return (
    <>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start"></div>
            <div className="navbar-center">
                <h1 className='text-3xl'>Smartchê</h1>
            </div>
            <div className="navbar-end">
                <Link to="/login"><button className="btn mr-10">Login</button></Link>
            </div>
        </div>
    </>
    )
}

export default Header