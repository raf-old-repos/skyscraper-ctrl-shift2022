
import React from "react";
import { Link } from "wouter";
import "../styles/styles.css"
import { FooterItem } from "../types/components";

type FooterProps = {
    items: FooterItem[]
};

const TextIcon: React.FC<FooterItem> = ({ Icon, name }) => (
    <>
        <Icon />
        <h3 className="footer-item-text">
            {name}
        </h3>
    </>
)

const Footer: React.FC<FooterProps> = (props) => {
    return <>
        <footer className="footer-container">
            <ul className="footer-list">
                {props.items.map((item, idx) => {
                    <li key={idx} className="footer-item">
                        <button className="footer-button">
                            {item.route ? <Link to={item.link}>

                                <TextIcon Icon={item.Icon} name={item.name} link={""} route={false} />

                            </Link> : <a href={item.link} >
                                {/* Garbage implementation */}
                                <TextIcon Icon={item.Icon} name={item.name} link={""} route={false} />
                            </a>
                            }
                        </button>
                    </li>
                })}
            </ul>
        </footer>
    </>;
};

export default Footer;

