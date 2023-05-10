import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
        return (
            <div className='my-3'>
            <div className="card">
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: '0'
            }
        }>
        <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img src={!imageUrl? "https://media.cnn.com/api/v1/images/stellar/prod/230426095429-activision-blizzard-uk-gaming-call-of-duty-file-restricted.jpg?c=16x9&q=w_800,c_fill":imageUrl} className="card-img-top" alt="Not Available"/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small class="text-body-secondary">By {(author ? author:'Unknown author')} on {new Date(date).toGMTString()}</small></p>
        <a rel='noreferrer' href={newsUrl} target='_blank' class="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
        </div>
        )
    }
}

export default NewsItem