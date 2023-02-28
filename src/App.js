import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useContext} from 'react'
import {Context} from './Context/Context'
import Venda from './pages/Venda/Venda'
import Login from './pages/Login/Login'
import Registrar from './pages/Registrar/Registrar'
import SingleVenda from './pages/SingleVenda/SingleVenda';
import SingleDesapego from './pages/SingleDesapego/SingleDesapego';
import Desapego from './pages/Desapego/Desapego';
import Aluguel from './pages/Aluguel/Aluguel';
import Compartilhar from './pages/Compartilhar/Compartilhar';
import CadastrarAluguel from './pages/CadastrarAluguel/CadastrarAluguel';
import CadastrarCompartilhar from './pages/CadastrarCompartilhar/CadastrarCompartilhar';
import SingleAluguel from './pages/SingleAluguel/SingleAluguel';
import SingleCompartilhar from './pages/SingleCompartilhar/SingleCompartilhar';
import EditAluguel from './pages/EditAluguel/EditAluguel';
import EditCompartilhar from './pages/EditCompartilhar/EditCompartilhar';
import Exe from './pages/exe/Exe';
import ExeComp from './pages/ExeComp/ExeComp';
import SendEmail from './pages/SendEmail/SendEmail';
import UserPage from './pages/UserPage/UserPage';
import Vida from './pages/Vida/Vida';
import NewSobre from './pages/Sobre/NewSobre';
import Visto from './pages/Visto/Visto';
import Intercampi from './pages/Intercampi/Intercampi';
import Termos from './pages/Termos/Termos';
import ConfirmEmailPage from './pages/ConfirmEmailPage/ConfirmEmailPage';
import SendEmailConfirm from './pages/ConfirmEmailPage/SendEmailConfirm';
import Monitor from './pages/Monitor/Monitor';
import PageSingVenda from './pages/pageSingVenda/PageSingVenda';
import PageSingVendaEd from './pages/PageSingleVendaEd/PageSingleVendaEd';
import PageSingDoacao from './pages/PageSingleDoacao/PageSingleDoacao';
import SinglePageDoacaoEd from './pages/SinglePageDoacaoEd/SiglePageDoacaoEd';
import PageSingleAluguel from './pages/PageSingleAluguel/PageSingleAluguel';

function App() {

  const {user} = useContext(Context);

  return (
      <Router>
        <Routes> 
          <Route path="/" element={ user ? <Vida /> : <Login />} exact />
          <Route path="/conf/:id" element={ <ConfirmEmailPage /> } exact />
          <Route path="/venda" element={ user ? <Venda /> : <Login />} exact />
          <Route path="/doacao" element={ user ? <Desapego/> : <Login />} exact />
          {/* esta rota de aluguel é inacessível */}
          <Route path="/exe" element={ user ? <Aluguel /> : <Login />} exact />
          <Route path="/execomp" element={user ? <ExeComp />  : <Login />} exact />
          {/*Esta outa de compartilhamento é inacessível também */}
          <Route path="/habitacao/aluguel/:id" element={ user ? <SingleAluguel /> : <Login />} exact />
          <Route path="/aluguel-edit/:id" element={ user ? <EditAluguel /> : <Login />} exact />
          <Route path="/compartilhar-edit/:id" element={ user ? <EditCompartilhar /> : <Login />} exact />
          <Route path="/aluguel-cadastrando" element={ user ? <CadastrarAluguel /> : <Login />} exact />
          <Route path="/habitacao-compartilhar" element={ user ? <Compartilhar /> : <Login />} exact />
          <Route path="/habitacao/compartilhar/:id" element={ user ? <SingleCompartilhar /> : <Login />} exact />
          <Route path="/compartilhar-cadastrar" element={ user ? <CadastrarCompartilhar /> : <Login />} exact />
          <Route path="/post/:id" element={user ? <SingleVenda /> : <Login />} exact />
          <Route path="/doacao/:id" element={user ? <SingleDesapego /> : <Login />} exact />
          <Route path="/habitacao-aluguel" element={user ? <Exe /> : <Login />} exact />
          <Route path="/user" element={user ? <UserPage />  : <Login />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/sendemail" element={<SendEmail />} exact />
          <Route path="/sobre" element={<NewSobre />} exact />
          <Route path="/visto" element={<Visto />} exact />
          <Route path="/intercampi" element={<Intercampi />} exact />
          <Route path="/registrar" element={<Registrar />} exact />
          <Route path="/monitor" element={<Monitor />} exact />
          <Route path="/monitor-doacao/:id" element={<PageSingDoacao />} exact />
          <Route path="/monitor-aluguel/:id" element={<PageSingleAluguel />} exact />
          <Route path="/monitor-doacao-ed/:id" element={<SinglePageDoacaoEd />} exact />
          <Route path="/monitor-venda/:id" element={<PageSingVenda />} exact />
          <Route path="/monitor-venda-ed/:id" element={<PageSingVendaEd />} exact />
          <Route path="/registrar/termos-politicas" element={<Termos />} exact />
          <Route path="/registrar/send-confirm-email-to-register-accont" element={<SendEmailConfirm />} exact />
        </Routes>
      </Router>
  );
}

export default App;