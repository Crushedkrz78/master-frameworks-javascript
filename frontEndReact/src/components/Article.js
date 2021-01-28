import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import Moment from 'react-moment';
import 'moment/locale/es';
import ImageDefault from '../assets/img/default-image.png';

class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    };

    componentWillMount(){
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id)
        .then(res => {
            this.setState({
                article: res.data.article,
                state: 'success'
            });
        }).catch( err => {
            this.setState({
                article: false,
                status: 'success'
            });
        })
    }
    
    render(){
        var article = this.state.article;
        return(
            <div className="center">
                <section id="content">
                    {this.state.article &&
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                {article.image != null ? (
                                    <img src={this.url + "get-image/" + article.image} alt={article.title}/>
                                ) : (
                                    <img src={ImageDefault} alt="placeholder"/>
                                )

                                }
                            </div>
                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                                <Moment locale="es" fromNow>{article.date}</Moment>
                            </span>
                            <p>
                                {article.content}
                            </p>
                            <Link to="/blog" className="btn btn-danger">Eliminar</Link>
                            <Link to="/blog" className="btn btn-warning">Editar</Link>
                            
                            <div className="clearfix"></div>
                        </article>
                    }

                    {!this.state.article && this.state.status === 'success' &&
                        <div id="article">
                            <h2 className="subheader">El artículo no existe</h2>
                            <p>Inténtalo de nuevo más tarde.</p>
                        </div>
                    }

                    {!this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando...</h2>
                            <p>Espere un momento...</p>
                        </div>
                    }
                </section>
                <Sidebar/>
            </div>
        );
    }
}

export default Article;