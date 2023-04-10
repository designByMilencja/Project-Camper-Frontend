import React from "react";
import './FooterView.scss';

export const FooterView = () => {
    return <>
        <footer>
            <p className="footer">
                &copy; Copyright <strong>DesignByMilencja 2023 </strong>
                <span className="imgAuthors"> Wykorzystane obrazy:
                    <a href="src/components/views/FooterView/FooterView.tsx?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1700515"> Elisa,</a>
                    <a href="src/components/views/FooterView/FooterView.tsx?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=925610"> StockSnap,</a>
                    <a href="https://pixabay.com/pl/users/raphaelsilva-4702998/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2935365"> Raphael Silva</a> z Pixabay
                </span>
            </p>
        </footer>
    </>
}
