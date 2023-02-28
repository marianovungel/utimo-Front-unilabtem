import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './AluguelEditMonitor.css'

export default function AluguelEditMonitor() {

  const [produtoVenda, setProdutoVenda] = useState([])

  const getProdutoVenda = async ()=>{
    try{
      const response = await api.get("/aluguelmonitor/check/true");
      setProdutoVenda(response.data)
    }catch(err){}
  }

  useEffect(() => {
    getProdutoVenda();
  }, [])

  return (
<div className='fullVendaPost'>
{produtoVenda?.map((post)=>(
   <Link className="titleColor" to={`/monitor-doacao-ed/${post?._id}`} key={post?._id}>
     <div className="cardVendaPost">
       <h6 className='titleVendaPost'>{post?.categories}</h6>
       <div className='verPost'>
         <i className='verText'>Ver o Post</i>
         <i className="fa-regular fa-eye eyesClass"></i>
       </div>
     </div>
   </Link>
))}
</div>
  )
}
