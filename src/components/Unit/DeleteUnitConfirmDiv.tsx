import { observer } from 'mobx-react-lite';
import React from 'react'
import { useContext } from 'react';
import { RootStoreContext } from "../../Stores/rootStore";
interface IProps {
   showModal : (value : boolean) => void; 
   id : string;
}

const DeleteUnitConfirmDiv : React.FC<IProps> = ({showModal,id}) => {
    const footerStyle = {
        width: "100%",
        marginTop:"10px",
        // backgroundColor: "goldenrod",
        color: "white",
        display:"flex",
        justifyContent:"center"
    };
    const rootStore = useContext(RootStoreContext)
    const {deleteUnit} = rootStore.unitStore;
    const handleSubmit = () => {
        console.log(id);
        deleteUnit(id);
        showModal(false)
    }
    return (
        <div>
           
                <div
                    style={{ width: "100%" }}
                >
                    <h2 className="mx-auto modalHeader deleteunit">
                        Do you really want to delete {id}?
                    </h2>
                </div>
                <div  style={footerStyle}>         
                        <button
                            className="confirmButton mr-auto"
                            onClick={() => handleSubmit()}
                        >
                            Yes
                        </button>
                        <button className="confirmButton" onClick={() => showModal(false)}>
                           Cancel
                       </button>
                </div>
            
        </div>
    )
}

export default observer(DeleteUnitConfirmDiv)
