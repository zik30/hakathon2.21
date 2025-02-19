import stl from "./header.module.scss"

function Header() {
  return (
    <div className={stl.header}>
        <div className="logo">
            <h2>LOGO</h2>
        </div>
        <div className={stl.center}>
            <div className={stl.item}>Company</div>
            <div className={stl.item}>Products</div>
            <div className={stl.item}>Solutions</div>
            <div className={stl.item}>Careers</div>
        </div>
        <div className="btn">
            <button>Submit</button>
        </div>
    </div>
  )
}

export default Header