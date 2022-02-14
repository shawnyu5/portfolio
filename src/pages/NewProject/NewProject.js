import ReactModal from "react-modal";
import {AiOutlineClose} from "react-icons/ai";
import {getAllTools} from "../../helpers";
import {CgArrowsExpandUpRight} from "react-icons/all";
import React from "react";

export default function NewProject (props) {
    const [userLoggedIn, setUserLoggedIn] = React.useState(true);
    function checkAuth() {
        fetch('/php/auth.php', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                if (data.status == true) {
                    return false;
                } else {
                    console.log('not logged in');
                    setUserLoggedIn(false);
                    return false;
                }
            })
            .catch(err => console.log(err));
    }
    return(
        <ReactModal isOpen={props.showModal} style={{
            overlay: {
                backgroundColor: "rgba(0,0,0,0.7)"
            },
            content: {
                marginTop: "5%",
                backgroundColor: "#0c0c0c",
                padding: "0",
                display: "flex",
                flexDirection: "column",
            }
        }}>
            <div id={"modal-title"} style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottom: "1px solid var(--border-color)",
                paddingLeft: "1rem",
                position: 'sticky',
                top: 0,
                backgroundColor: "#0c0c0c",
                fontWeight: 600,
            }}>
                <p style={{paddingTop: "2rem"}}>Add New Project</p>
                <button style={{
                    border: 0,
                    backgroundColor: 'unset'
                }} onClick={()=>props.setShowModal(false)}>Close <AiOutlineClose size={30}/></button>
            </div>
            <div style={{
                padding: "1rem",
            }}>
                <form action="/php/newProject.php" style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }} method={'post'} onSubmit={checkAuth}>

                    <label htmlFor="prjtitle">
                        Title
                        <input type="text" name="title" id="prjtitle"/>
                    </label>

                    <label htmlFor="label">
                        Label
                        <input type="text" name="label" id="label"/>
                    </label>

                    <label htmlFor="description">
                        Description
                        <input type="text" name="description" id="description"/>
                    </label>
                    <label htmlFor={'imageURL'}>
                        Image
                        <input type="text" name="imageURL" id={'imageURL'}/>
                    </label>

                    <label htmlFor="toolsContainer">
                        Made With
                        <div id={'toolsContainer'} style={{columnWidth: 200}}>
                            {getAllTools().map(t =>
                                <div style={{
                                    display: "inline-flex",
                                    width: "100%",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0.5rem",
                                    border: "1px solid var(--border-color)",
                                }}>
                                    <label htmlFor={t.name} style={{
                                        flexGrow: 1,
                                    }}><span style={{display: 'flex', gap:10}}><img src={t.imageURL} alt={`icon for ${t.name}`} width={30}/> {t.name} </span></label>
                                    <input id={t.name} type="checkbox" name="madeWith[]" value={t.name} style={{width: 'unset'}}/>
                                </div>
                            )}
                        </div>
                    </label>

                    <label htmlFor={'github'}>
                        Github
                        <input type="text" name="github" id={'github'}/>
                    </label>

                    <label htmlFor={'demo'}>
                        <span>Demo <CgArrowsExpandUpRight/></span>
                        <input type="text" name="demo" id={'demo'}/>
                    </label>

                    <label htmlFor={'more'}>
                        Link
                        <input type="text" name="more" id={'more'}/>
                    </label>

                    <button disabled={!userLoggedIn} style={{
                        height: "3rem",
                        fontWeight: 600,
                    }}>{userLoggedIn ? 'Add New Project' : 'Session Expired!'}</button>
                </form>
            </div>
        </ReactModal>
    )
}