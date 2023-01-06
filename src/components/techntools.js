import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import headshot from '../images/headshot.png' 
import python from '../images/python-icon.png'
import javascript from '../images/javascript_icon.png'
import cplus from '../images/c_icon.png'
import html from '../images/html_icon.png'
import css from '../images/css_icon.png'
import react from '../images/react_icon.png'
import redux from '../images/redux_icon.png'
import node from '../images/nodejs_icon.png'
import bootstrap from '../images/bootstrap_icon.png'
import express from '../images/expressjs_icon.png'
import mongodb from '../images/mongodb_icon.png'
import firebase from '../images/firebase_icon.png'
import gcp from '../images/google_cloud_icon.png'
import aws from '../images/aws_icon.png'
import git from '../images/git_logo_icon.png'
import github from '../images/github_icon.png'
import jupyter from '../images/jupyter_icon.png'
import vscode from '../images/vscode_icon.png'
import pycharm from '../images/pycharm_icon.png'
import './custom.css'

const TechStack = () => {
    return (
        <>
        <Card style={{ width: 'auto',  boxShadow: '0px 0px 8px 5px #000000' }}>
        <Card.Body>

          <Card.Text>
        <h2> Languages</h2>
        <img src={python}/>
        <img src={javascript}/>
        <img src={cplus}/>
        <img src={html}/>
        <img src={css}/>

            <h2>Frameworks</h2>
            <img src={react}/>
            <img src={redux}/>
            <img src={express} />
            <img src={node}/>
            <img src={bootstrap}/>

        <h2>Cloud Tech</h2>
        <img src={mongodb}/>
        <img src={firebase}/>
        <img src={gcp}/>
        <img src={aws}/>  
        <h2>Code Editors</h2>
        <img src={vscode}/> 
        <img src={pycharm}/> 
        <img src={jupyter}/>
        <h2>Tools</h2>
        <img src={git}/>
        <img src={github}/> 
          </Card.Text>
          
        </Card.Body>
      </Card>
      </>
    )
}
export default TechStack;