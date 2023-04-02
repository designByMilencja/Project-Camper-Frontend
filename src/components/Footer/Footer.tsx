import './Footer.scss';
import React from "react";

export const Footer = () => {
    return <>
        <footer>
            <p className="footer">
                &copy; Copyright <strong>DesignByMilencja 2023 </strong>
                <span className="imgAuthors"> Wykorzystane grafiki:
                    Obrazy
                    <a
                        href="https://pixabay.com/pl/users/elisariva-1348268/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1700515"> Elisa</a><a
                        href="https://pixabay.com/pl//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1700515"> oraz</a>
                    <a
                        href="https://pixabay.com/pl/users/stocksnap-894430/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=925610"> StockSnap</a> z <a
                        href="https://pixabay.com/pl//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=925610"> Pixabay</a>
                </span>
            </p>
        </footer>
    </>
}
