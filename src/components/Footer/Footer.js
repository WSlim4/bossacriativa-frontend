import React, { Component } from 'react';
import '../../global.css';
import './Footer.css';
import Funarte from '../../assets/funarte.svg';
import UFRJ from '../../assets/ufrj.png';
import {Link} from 'react-router-dom';
import EscMus from '../../assets/escmus.png';
import Bonif from '../../assets/bonif.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="grey">
                    <div>
                        <p>ACESSO</p>
                        <Link className="link" to="/login">Faça Login</Link><br/>
                        <Link className="link" to="/cadastro">Ainda não tenho cadastro</Link><br/>
                    </div>
                    <div className="institucional">
                        <p className="footer-title">INSTITUCIONAL</p>
                        <Link className="link" to="/about">Sobre o projeto</Link><br />
                        <Link className="link" to="/parceiros">Realizadores e parceiros</Link><br />
                        <Link className="link" to="/imprensa">Assessoria de imprensa</Link>
                    </div>
                    <div className="contato">
                        <p className="footer-title">CONTATOS</p>
                        <p className="footer-text">email@bossacriativa.com.br</p>
                    </div>
                </div>
                <div className="bloco yellow">
                    <h6 className="copyright left">
                        © 2020 Copyright Bossa Criativa: Arte de toda gente - todos os direitos reservados<br/></h6>
                    <div className='apoio'>
                        <a className="funarte" href="https://www.funarte.gov.br/" target="_blank">
                            <img src={Funarte} alt="Logo Funarte" className="logo"/>
                        </a>
                        <a className="ufrj" href="https://ufrj.br/" target="_blank">
                            <img src={UFRJ} alt="Logo UFRJ" className="logo"/>
                        </a>
                        <a href="http://www.musica.ufrj.br/">
                            <img src={EscMus} alt="Logo Escola de Música" className='brand-logo logo'></img>
                        </a>
                        <a href="http://www.fujb.ufrj.br/">
                            <img src={Bonif} alt="Logo Fundação José Bonifácio" className="logo"></img>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Footer; 