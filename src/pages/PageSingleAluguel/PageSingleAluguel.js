import React, { useEffect, useState } from 'react'
import './PageSingleAluguel.css'
import api from '../../services/api'
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
const URLImg = "https://festupload.s3.amazonaws.com/";

export default function PageSingleAluguel() {
    const location = useLocation();
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})

    const [foto, setFoto ] = useState("")
    const [cidade, setCidade ] = useState("")
    const [bairro, setBairro ] = useState("")
    const [logradouro, setLogradouro ] = useState("")
  
  useEffect(()=>{
    const getPost = async ()=>{
        try{
            const res = await api.get("/aluguelmonitor/"+path)
            setPost(res.data)
            setCidade(res.data.cep.localidade)
            setBairro(res.data.cep.bairro)
            setLogradouro(res.data.cep.logradouro)
            setPost(res.data)
            setFoto(res.data.photo1)
        }catch(err){}
    }
    getPost()
  }, [path])

    const Autorizar = async ()=>{
        try{
            await api.put("/aluguelmonitor/"+path)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Autorizado com Sucesso!',
                showConfirmButton: false,
                timer: 2000
              })
            window.location.replace("/monitor");
        }catch(err){}
    }

    const Reprovar = async ()=>{
        try{
            await api.delete("/aluguelmonitor/"+path)
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Reprovado com Sucesso!',
                showConfirmButton: false,
                timer: 1500
              })
            window.location.replace("/monitor");
        }catch(err){}
    }


      const FotoChengOne = ()=>{
        setFoto(post.photo1)
      }
      const FotoChengTwo = ()=>{
        setFoto(post.photo2)
      }
      const FotoChengTrei = ()=>{
        setFoto(post.photo3)
      }
      const FotoChengFort = ()=>{
        setFoto(post.photo4)
      }
      const FotoChengFive = ()=>{
        setFoto(post.photo5)
      }

  return (
    <div className='MonitorContent'>
        <div className="menuMonitor">
            <img src="../image/newLogo.png" alt=" " className="imgLOgoMonitor" />
        </div>
        <div className="menuMonitorInferior">
            <i className="painelMenu">Painel de Monitoramento - UNILABTEM</i>
        </div>
        <div className="MenuLateralAndPainel">
            <div className="MenuLateral">
                <div className="menuMM">Número de Pedidos</div>
                <div className="vendaMonitor editMMonitor">Venda</div>
                <div className="doacaoMonitor editMMonitor">Doação</div>
                <div className="aluguelMonitor editMMonitor">Aluguel</div>
                <div className="compartilhamentoMonitor editMMonitor">Compartilhamento</div>
            </div>
            <div className="Painel">
                <div className='fullContentSingleVendaPost'>
            <div className='conteinerSinglePostVendaSingleVendaPost'>
        
            <div className='fullContentModerador'>
            <div className='imgContent'>
                <p id='categoria'>Categoria: Aluguel</p>
                <div className='imgDivSingle'>
                    <img src={URLImg+foto} id='photoVendaId' alt='' />
                </div>
                <div className='imgDivSingleClass'>
                {post?.photo1  && (<img className='photoVendaclassName' onClick={FotoChengOne} src={URLImg+post.photo1} alt='' />)}
                {post?.photo2  && (<img className='photoVendaclassName' onClick={FotoChengTwo} src={URLImg+post.photo2} alt='' />)}
                {post?.photo3  && (<img className='photoVendaclassName' onClick={FotoChengTrei} src={URLImg+post.photo3} alt='' />)}
                {post?.photo4  && (<img className='photoVendaclassName' onClick={FotoChengFort} src={URLImg+post.photo4} alt='' />)}
                {post?.photo5  && (<img className='photoVendaclassName' onClick={FotoChengFive} src={URLImg+post.photo5} alt='' />)}
                </div>
                
            </div>
            <div className='descContentMonitor'>
                <div>
                <div className='avaliacao'>
                <i className="fa-solid fa-star" id='estrela'></i>
                <i className="fa-solid fa-star" id='estrela'></i>
                <i className="fa-solid fa-star" id='estrela'></i>
                <i className="fa-solid fa-star" id='estrela'></i>
                <i className="fa-solid fa-star-half-stroke" id='estrela'></i>
                (Avaliações)
                </div>
                <div className='codigoItem'>
                <p>Cód. Item </p>
                </div>
                <p>Título: {post?.title}</p>
                <p>Descrição: {post?.desc}</p>
                <p><i>Divulgador: </i> <b>{post.username}</b></p>
                <p><i>Preço: </i>R$ <b>{post.preco}</b></p>
                <p><i>Data de divulgação: </i> <b>{new  Date(post.createdAt).toDateString()}</b></p>
                <p><i>Estatos: </i> <b>Desponível</b></p>
                <p><i>Sala: </i><b>{post.sala}</b> </p>
                <p><i>Cozinha: </i> <b>{post.cozinha}</b></p>
                <p><i>Quarto: </i><b>{post.quarto}</b> </p>
                <p><i>Banheiro: </i><b>{post.banheiro}</b> </p>
                {cidade && (<p><i>Cidade: </i><b>{cidade}</b> </p>)}
                {bairro && (<p><i>Bairro: </i><b>{bairro}</b> </p>)}
                {logradouro && (<p><i>Logradouro: </i><b>{logradouro}</b> </p>)}
                <p><i>Info: </i> <b>{post.desc}</b> </p>
                <div className='cartoes'>
                
                </div>
                </div>
            </div>
            
                <div className='butoomContent'>
                    <div className='buttonZapDiv' ><button onClick={Autorizar}  className='buttonEditar' id='colorAprovado'>Aprovar <i className="fa-solid fa-thumbs-up"></i></button></div>
                    <div></div>
                    <div className='buttonZapDiv'><button  className='buttonDeletar' onClick={Reprovar} >Reprovar <i className="fa-solid fa-thumbs-down"></i></button></div>
                </div>
            <footer className=''></footer>
            </div>
        </div>
        </div>
                    
            </div>
        </div>
    </div>
  )
}
