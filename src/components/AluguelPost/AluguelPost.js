import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './AluguelPost.css'

export default function AluguelPost() {
  const [venda, setVenda] = useState([])

  useEffect(()=>{
    const getVenda = async ()=>{
      try{
        const product = await api.get("/aluguelmonitor")
        setVenda(product.data)
      }catch(err){
        alert(err.message)
      }
    }
    getVenda()
  }, [])
  return (
    <div className='fullVendaPost'>
     {venda?.map((post)=>(
        <Link className="titleColor" to={`/monitor-aluguel/${post?._id}`} key={post._id}>
          <div className="cardVendaPost">
            <h6 className='titleVendaPost'>{post.categories}</h6>
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
