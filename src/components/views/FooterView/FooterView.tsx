import React from "react";
import './FooterView.scss';

export const FooterView = () => {
    return <>
        <footer>
            <p className="footer">
                &copy; Copyright <strong>DesignByMilencja 2023 </strong>
                <span className="imgAuthors"> Wykorzystane grafiki:
                    Obrazy
                    <a
                        href="src/components/views/FooterView/FooterView.tsx?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1700515"> Elisa</a><a
                        href="src/components/views/FooterView/FooterView.tsx?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1700515"> oraz</a>
                    <a
                        href="src/components/views/FooterView/FooterView.tsx?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=925610"> StockSnap</a> z <a
                        href="src/components/views/FooterView/FooterView.tsx?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=925610"> Pixabay</a>
                </span>
            </p>
        </footer>
    </>
}
