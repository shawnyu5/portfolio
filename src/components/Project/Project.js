import './Project.css'
import {randomRGB} from '../../helpers.js'
import {getToolElement} from "../../helpers.js";
import {FiGithub} from 'react-icons/fi'
import {FiMoreHorizontal} from 'react-icons/fi'
import {CgArrowsExpandUpRight} from "react-icons/all";
export default function NewProject(props){
    const overlayColor = randomRGB()
    const infoStyle = {
        backgroundImage: `url("${props.image || 'https://picsum.photos/800/500?grayscale'}")`,
        backgroundSize: '100%'
    }
    const darkOverlayStyle = {
        background: `linear-gradient(180deg, rgb(${overlayColor}/ 22%) 0%, rgba(0,0,0,1) 99%)`
    }

    const tools = props.madeWith ? props.madeWith.map(t=>{
        return getToolElement(t)
    }) : null;
    return(
        <div className={'Project'}>
            <div id={"toolsUsed"}>
                Made With
                <div id={'tools'}>
                    {tools}
                </div>
            </div>

            <div id={"info"} style={infoStyle}>
                <div id={'darkOverlay'} style={darkOverlayStyle}/>
                <div id={"infoText"}>
                    <div><h3>{props.title}</h3><pre>{props.label}</pre></div>
                    <p>{props.description}</p>
                </div>
            </div>

            {props.github || props.demo || props.more ?
            <div id={"links"}>
                {props.github ? <a id={"github"} href={props.github}><div><pre>Github  </pre><FiGithub/></div></a> : ''}
                {props.demo ? <a id={"demo"} href={props.demo} target={"_blank"}><div><pre>Demo  </pre><CgArrowsExpandUpRight/></div></a> : ''}
                {props.more ? <a id={"more"} href={props.more}><div><pre>More  </pre><FiMoreHorizontal/></div></a> : ''}
            </div> : ''}

        </div>
    )
}