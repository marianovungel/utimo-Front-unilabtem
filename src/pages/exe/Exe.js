import React from 'react'
import './exe.css'
import Menu from '../../components/Menu/Menu'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import api from '../../services/api'
import Header from '../../components/Header/Header'
// import { useContext } from 'react'
// import { Context } from '../../Context/Context'

export default function Exe() {

    const [aluguel, setAluguel] = useState([]);
    // const { user } = useContext(Context)
    
    
    useEffect(()=>{
        const FetchDesapego = async () => {
            try{
                const res = await api.get("/aluguel")
                setAluguel(res.data);
            }catch(err){
                alert(err)
            }
        }
        FetchDesapego();
    }, [])

    const URLImg = "https://festupload.s3.amazonaws.com/";
    //bg-light
  return (
    <div className='fullContentAluguel'>
        <div className='OI' >
            <Menu />
        </div>
        <div className='menuBootstrap' >
        <nav className="navbar navbar-expand-lg navbar-light  menuBootstrap">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <div className='logoBootstrap'>
                    <img className='imagemLogo' src="./image/preta.png" alt="logoUnilabtem" />
                </div>
            </Link>
            <button className="bg-light braca" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-light braca"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Vida na Unilab</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/doacao">Doação</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="/venda">Venda</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="/sobre">Sobre</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-light" to="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Habitação
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/habitacao-aluguel">Aluguel</Link></li>
                    <li><Link className="dropdown-item" to="/habitacao-compartilhar">Compartilhamento</Link></li>
                    <li><Link className="dropdown-item" to="/aluguel-cadastrando">Divulgar Aluguel</Link></li>
                </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/user">
                        {/* {user.profilePic ? (<img src={URLImg+user.profilePic} alt="" className='imgMenuHumburguer' />):
                        (<i>Usuário</i>)} */}
                        User
                    </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </div>
        <header className='headerAluguel'>
            <div className='flexHeaderAluguel'>
            <Header />
            </div>
        </header>
        <div className='contentSideBarComp'>
            
            {aluguel?.map((p)=>(
                <div className='cardAluguelnew' key={p?._id}>
                    <div className="imagemAluguelSection">
                    <img className="imgAluguelCArdAdd" src={URLImg + p.photo1} alt="" />
                    </div>
                    <div className="descritionAluguelSetion">
                        <i className="aluguelI">{p.cep.localidade}</i>
                        <h3 className="hpraceAluguel">R${p.preco}</h3>
                        <i>Compartilhamento</i>
                        <p className="pdescriçãoAluguel">{p.desc}</p>
                    </div>
                    <div className="buttonAluguelSection">
                    <Link to={`/habitacao/aluguel/${p?._id}`}><button className="buttonAluguelInfoCard">Info...</button></Link>
                    </div>
                </div>
            ))}
    </div>
    </div>
  )
}
