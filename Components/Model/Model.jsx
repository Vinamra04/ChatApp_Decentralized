import React, { useState, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from './Model.module.css';
import usernameImage from '../../assets/username.png';
import accountImage from '../../assets/account.png';
import sendImage from '../../assets/send.png';
import closeImage from '../../assets/close.png';
import { ChatAppContect } from '../../Context/ChatAppContext';
import { Loader } from '../../Components/index';

const Model = ({
    openBox,
    title,
    address,
    head,
    info,
    smallInfo,
    image,
    functionName,
}) => {
    //USESTATE
    const [name, setName] = useState("");
    const [accountAddress, setAccountAddress] = useState("");

    const { loading } = useContext(ChatAppContect);
    return (
        <div className={Style.Model}>
            <div className={Style.Model_box}>
                <div className={Style.Model_box_left}>
                    <Image src={image} alt="buddy" width={700} height={700} />
                </div>
                <div className={Style.Model_box_right}>
                    <h1>
                        {title} <span>{head}</span>
                    </h1>
                    <p>{info}</p>
                    <small>{smallInfo}</small>

                    {
                        loading == true ? (
                            <Loader />
                        ) : (
                            <div className={Style.Model_box_right_name}>
                                <div className={Style.Model_box_right_name_info}>
                                <Image src={usernameImage} alt="user" width={30} height={30} />

                                    <input
                                        type="text"
                                        placeholder="Your Name.."
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className={Style.Model_box_right_name_info}>
                                <Image src={accountImage} alt="user" width={30} height={30} />
                                    <input
                                        type="text"
                                        placeholder={address || "Enter address.."}
                                        onChange={(e) => setAccountAddress(e.target.value)}
                                    />
                                </div>

                                <div className={Style.Model_box_right_name_btn}>
                                    <button onClick={() => functionName({ name, accountAddress })}
                                    >
                                        {""}
                                        <Image src={sendImage} alt="send" width={30} height={30} />
                                        {""}
                                        Submit
                                    </button>

                                    <button onClick={() => openBox(false)}>
                                        {""}
                                        <Image src={closeImage} alt="close" width={30} height={30} />
                                        {""}
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    );
};

export default Model;