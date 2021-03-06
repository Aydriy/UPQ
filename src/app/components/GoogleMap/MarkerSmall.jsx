import React from "react";


function MarkerSmall() {
    return (
        <div className="markerSmall">
            <div className="smallPoint" id="marker">
                <div className="pointContainer" >
                    <svg className="p1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#00A031" />
                    </svg>
                    <svg className="p2" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M16.5 33C25.6127 33 33 25.6127 33 16.5C33 7.3873 25.6127 0 16.5 0C7.3873 0 0 7.3873 0 16.5C0 25.6127 7.3873 33 16.5 33Z" fill="#00A031" />
                    </svg>
                </div>

            </div>

        </div>

    );
}

export default MarkerSmall;



